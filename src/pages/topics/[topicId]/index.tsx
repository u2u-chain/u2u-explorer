import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import TopicDetail from "@/components/app/topics/topic-detail";
import Head from "next/head";

const TopicDetailPage: NextPageWithLayout =() => {
  return(
    <>
      <Head>
        <title>Detail Topics | Unicorn Ultra (U2U)</title>
      </Head>
      <TopicDetail/>
    </>
  )
}

TopicDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default TopicDetailPage
