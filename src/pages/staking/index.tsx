import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import Staking from "@/components/app/staking";
import RewardsEstimator from "@/components/app/staking/RewardsEstimator";
import Head from "next/head";

const StakingPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Staking | Unicorn Ultra (U2U)</title>
      </Head>
      <Staking/>
      <RewardsEstimator/>
    </>
  )
}

StakingPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default StakingPage