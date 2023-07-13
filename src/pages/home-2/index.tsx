import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import {Col, Row} from "antd";
import CryptoTransfers from "@/components/app/home2/CryptoTransfers";
import SmartContractCalls from "@/components/app/home2/SmartContractCalls";
import HCSMessages from "@/components/app/home2/HCSMessages";
import Head from "next/head";

const HomePage2: NextPageWithLayout =() => {
  return (
    <>
      <Head>
        <title>Home | Unicorn Ultra (U2U)</title>
      </Head>
      <Row gutter={[22, 22]}>
        <Col span={24}><CryptoTransfers/></Col>
        <Col span={24}>
          <Row gutter={[26, 22]}>
            <Col xs={24} lg={12}><SmartContractCalls/></Col>
            <Col xs={24} lg={12}><HCSMessages/></Col>
          </Row>
        </Col>
      </Row>
    </>

  )
}

HomePage2.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default HomePage2