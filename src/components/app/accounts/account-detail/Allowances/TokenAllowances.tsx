import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {accountService} from "@/services/account.service";

const TokenAllowancesColumns: ColumnsType<any> = [
	{
		title: 'Spender',
		render: (_, param) => {
			return (
				<Typography.Text>
				</Typography.Text>
			)
		}
	},
	{
		title: 'Time',
		render: (_, param) => {
			return (
				<Typography.Text>
				</Typography.Text>
			)
		}
	},
	{
		title: 'Token ID',
		render: (_, param) => {
			return (
				<Typography.Text>
				</Typography.Text>
			)
		}
	},
	{
		title: 'Amount',
		render: (_, param) => {
			return (
				<Typography.Text>
				</Typography.Text>
			)
		}
	},
];

export default function TokenAllowances() {
	const router = useRouter()
	const [tokenAllowances, setTokenAllowances] = useState<any[]>([])

	const accountId = router.query.accountId as string

	const pageSize = 15
	useEffect(()=> {
		const getTokenAllowances = async () => {
			try {
				const query = {
					limit: pageSize,
					order: "asc",
				}
				const res: any = await accountService.getTokenAllowances(query, accountId)
				setTokenAllowances(res.allowances)
			} catch (e: any) {
				return
			}
		}
		if(accountId) getTokenAllowances()
	}, [accountId])
	return (
		<Card bordered={false} style={{marginBottom: 20}}>
			<Typography.Title level={4}>Token Allowances</Typography.Title>
			<Table
				dataSource={tokenAllowances as any}
				columns={TokenAllowancesColumns}
				scroll={{ x: 514 }}
				pagination={false}
			/>
		</Card>
	)
}