import DashboardLayout from "@/components/layouts/DashboardLayout";
import RecentContracts from "@/components/app/contracts/RecentContracts";
import Head from "next/head";

export default function  ContractsPage() {
  return (
    <div>
      <Head>
        <title>Contracts | Unicorn Ultra (U2U)</title>
      </Head>
      <RecentContracts />
    </div>
  )
}

ContractsPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}