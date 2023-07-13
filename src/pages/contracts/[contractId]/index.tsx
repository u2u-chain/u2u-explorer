import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import ContractDetail from "@/components/app/contracts/contract-detail";
import RecentContractCalls from "@/components/app/contracts/contract-detail/RecentContractCalls";
import Head from "next/head";

const ContractDetailPage: NextPageWithLayout =() => {
  return(
    <>
      <Head>
        <title>Detail Contract | Unicorn Ultra (U2U)</title>
      </Head>
      <ContractDetail/>
      <RecentContractCalls/>
    </>
  )
}

ContractDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default ContractDetailPage
