import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useEffect, useState} from "react";
import {transactionService} from "@/services/transaction.service";
import {utils} from "@/utils";
import {useRouter} from "next/router";

const TokenColumns: ColumnsType<Transaction> = [
	{
		title: 'Topic',
		dataIndex: 'topic',
		render: (_, param) => {
			return (
				<Typography.Text>{param.entity_id}</Typography.Text>
			)
		}
	},
	{
		title: 'Created',
		dataIndex: 'created',
		render: (_, param) => (
			<Typography.Text className={"text-size"}>
				{(utils.formatDate(param.consensus_timestamp))}
			</Typography.Text>
		)
	},
	{
		title: 'Memo',
		dataIndex: 'memo',
		render: (_, param) => {
			return (
					param.memo_base64 ? <Typography.Text>{atob(param.memo_base64)}</Typography.Text> :
						<Typography.Text className={"text-gray"}>None</Typography.Text>
			)
		}
	},
];


export default function RecentTopics() {
	const router = useRouter()
	const [transactions, setTransactions] = useState<Transaction[]>([])

	const pageSize = 15
	useEffect(() => {
		const getTransactions = async () => {
			try {
				const query = {
					limit: pageSize,
					order: "desc",
					transactionType: "CONSENSUSCREATETOPIC",
					result: "success"
				}
				const res: any = await transactionService.getTransactions(query)
				setTransactions(res.transactions)
			} catch (e: any) {
				return
			}
		}
		getTransactions()
	}, [])

	return (
		<Card title={"Recent Topics"}>
			<Table
				dataSource={transactions as any}
				columns={TokenColumns}
				scroll={{x: 992}}
				pagination={{
					pageSize
				}}
				onRow={(param) => ({
					onClick: () => router.push(`/topics/${param.entity_id}`),
				})}
			/>
		</Card>
	)
}