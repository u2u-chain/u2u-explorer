import DashboardLayout from "@/components/layouts/DashboardLayout";
import Head from "next/head";
import Accounts from "@/components/app/accounts/Accounts";

export default function AccountsPage () {
  return (
    <>
      <Head>
        <title>Accounts | Unicorn Ultra (U2U)</title>
      </Head>
      <Accounts/>
    </>
    
  )
}

AccountsPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
