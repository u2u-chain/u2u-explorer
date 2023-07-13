import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import NodeDetail from "@/components/app/nodes/node-detail";
import Head from "next/head";

const NodeDetailPage: NextPageWithLayout =() => {
  return(
    <>
      <Head>
        <title>Detail Nodes | Unicorn Ultra (U2U)</title>
      </Head>
      <NodeDetail/>
    </>
  )
}

NodeDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default NodeDetailPage
