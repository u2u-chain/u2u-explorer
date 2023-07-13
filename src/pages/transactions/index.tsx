import DashboardLayout from "@/components/layouts/DashboardLayout";
import {Col, Row} from "antd";
import Head from 'next/head'
import RecentTransactions from "@/components/app/transactions/RecentTransactions";

const TransactionsPage = () => {
  return (
    <>
      <Head>
        <title>Transactions | Unicorn Ultra (U2U)</title>
      </Head>
      <Row>
      <Col span={24}>
        <RecentTransactions />
      </Col>
    </Row>
    </>
    
  )
}

TransactionsPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default TransactionsPage