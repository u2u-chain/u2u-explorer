import DashboardLayout from "@/components/layouts/DashboardLayout";
import {Col, Row} from "antd";
import RecentTransactions from "@/components/app/transactions/RecentTransactions";
import RecentStakingRewards from "@/components/app/accounts/account-detail/RecentStakingRewards";
import Account from "@/components/app/accounts/account-detail/AccountDetail";
import Allowances from "@/components/app/accounts/account-detail/Allowances";
import Head from "next/head";

export default function AccountDetailPage () {
  return (
    <>
      <Head>
        <title>Detail Account | Unicorn Ultra (U2U)</title>
      </Head>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Account />
        </Col>
        <Col span={24}>
          <RecentTransactions />
        </Col>
        <Col span={24}>
          <Allowances />
        </Col>
        <Col span={24}>
          <RecentStakingRewards />
        </Col>
      </Row>
    </>

  )
}

AccountDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
