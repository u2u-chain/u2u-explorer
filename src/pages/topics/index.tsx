import DashboardLayout from "@/components/layouts/DashboardLayout";
import RecentTopics from "@/components/app/topics/RecentTopics";
import Head from "next/head";

export default function TopicsPage() {
  return (
    <div>
      <Head>
        <title>Topics | Unicorn Ultra (U2U)</title>
      </Head>
      <RecentTopics />
    </div>
  )
}

TopicsPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
