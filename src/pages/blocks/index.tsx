import DashboardLayout from "@/components/layouts/DashboardLayout";
import Blocks from "@/components/app/blocks";
import Head from "next/head";

export default function BlocksPage() {
  return (
    <div>
      <Head>
        <title>Blocks | Unicorn Ultra (U2U)</title>
      </Head>
      <Blocks />
    </div>
  )
}

BlocksPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}