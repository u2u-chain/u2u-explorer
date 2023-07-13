import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import Head from "next/head";
import BlockDetail from "@/components/app/blocks/blockDetail";
import BlockTransactions from "@/components/app/blocks/blockDetail/BlockTransactions";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {blockService} from "@/services/block.service";

const BlockDetailPage: NextPageWithLayout =() => {
  const router = useRouter()
  const [block, setBlock] = useState<Block | undefined>()

  const blockNumber = router.query.blockNumber as string

  useEffect(() => {
    const getBlock = async () => {
      try {
        const res: any = await blockService.getBlockByNumber(blockNumber)
        setBlock(res)
      } catch (e: any) {
        return
      }
    }
    if (blockNumber) getBlock()
  }, [blockNumber])
  return(
    <>
      <Head>
        <title>Detail Blocks | Unicorn Ultra (U2U)</title>
      </Head>
      <BlockDetail block={block}/>
      <BlockTransactions block={block}/>
    </>
  )
}

BlockDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default BlockDetailPage
