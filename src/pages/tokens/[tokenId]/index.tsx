import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import TokenDetail from "@/components/app/tokens/token-detail";
import TokenKey from "@/components/app/tokens/token-detail/TokenKey";
import NFTHolders from "@/components/app/tokens/token-detail/NFTHolders";
import Head from "next/head";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {tokenService} from "@/services/token.service";

const TokenDetailPage: NextPageWithLayout = () => {
  const router = useRouter()
  const [token, setToken] = useState<Token | undefined>()

  const tokenId = router.query.tokenId as string

  useEffect(() => {
    const getToken = async () => {
      try {
        const res: any = await tokenService.getToken(tokenId)
        console.log(res, '123')
        setToken(res)
      } catch (e: any) {
        return
      }
    }
    if (tokenId) getToken()
  }, [tokenId])
  console.log(tokenId)
  return (
    <>
      <Head>
        <title>Detail Tokens | Unicorn Ultra (U2U)</title>
      </Head>
      <TokenDetail token={token}/>
      <TokenKey token={token}/>
      <NFTHolders/>
    </>
  )
}

TokenDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default TokenDetailPage
