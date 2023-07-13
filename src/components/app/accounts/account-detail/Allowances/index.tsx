import {Card, Col, Row} from "antd";
import U2UAllowances from "@/components/app/accounts/account-detail/Allowances/U2UAllowances";
import TokenAllowances from "@/components/app/accounts/account-detail/Allowances/TokenAllowances";

export default function Allowances() {
	return (
		<Card title={"Allowances"}>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24} lg={12}>
					<U2UAllowances />
				</Col>
				<Col xs={24} sm={24} md={24} lg={12}>
					<TokenAllowances />
				</Col>
			</Row>
		</Card>
	)
}