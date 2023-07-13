import DashboardLayout from "@/components/layouts/DashboardLayout";
import {Col, Row} from "antd";
import NonFungibleTokens from "@/components/app/tokens/NonFungibleTokens";
import FungibleTokens from "@/components/app/tokens/FungibleTokens";
import Head from "next/head";

export default function TokensPage() {
  return (
    <>
      <Head>
        <title>Tokens | Unicorn Ultra (U2U)</title>
      </Head>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={25} md={24} lg={12}>
          <NonFungibleTokens />
        </Col>
        <Col xs={24} sm={25} md={24} lg={12}>
          <FungibleTokens />
        </Col>
      </Row>
    </>
    
  )
}

TokensPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
