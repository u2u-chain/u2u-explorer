import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import Network from "@/components/app/nodes/Network";
import Nodes from "@/components/app/nodes/Nodes";
import Head from "next/head";
import {useEffect, useState} from "react";
import {nodeService} from "@/services/network.service";

const NodesPage: NextPageWithLayout = () => {
  const [nodes, setNodes] = useState<NetworkNode[]>([])

  const pageSize = 25
  useEffect(() => {
    const query = {
      limit: pageSize
    }
    const getNodes = async () =>{
      try {
        const res: any = await nodeService.getNetworkNodes(query)
        setNodes(res.nodes)
      }
      catch (e: any){
        return
      }
    }
    getNodes()
  }, [])

  return (
    <>
      <Head>
        <title>Nodes | Unicorn Ultra (U2U)</title>
      </Head>
      <Network totalNodes={nodes?.length}/>
      <Nodes nodes ={nodes}/>
    </>
  )
}

NodesPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default NodesPage