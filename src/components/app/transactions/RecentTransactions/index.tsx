import {Button, Card, Select, Table, Tag, Typography} from "antd";
import {TransactionTypes} from "@/configs/apps.config";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import PausedContinueButton from "@/components/shared/PausedContinueButton";
import {transactionService} from "@/services/transaction.service";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import {useState} from "react";
import {utils} from "@/utils";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const TransactionColumns: ColumnsType<Transaction> = [
	{
		title: 'ID',
		render: (_, param) => (
			<Typography.Text>
				{param.node}@{param.valid_start_timestamp}
			</Typography.Text>
		)
	}, {
		title: 'Type',
		render: (_, param) => {
			const type = TransactionTypes.map((transaction) => {
				if(param.name === transaction.value) return transaction.name
			})
			return (
				<Tag className={"text-size"} color={"var(--green)"} >
					{type}
				</Tag>
			)
		}
	}, {
		title: 'Content',
		render: (_, param) => {
			return (
				<Typography.Text>
					Contract ID: {param.entity_id}
				</Typography.Text>
			)
		}
	}, {
		title: 'Time',
		dataIndex: 'time',
		render: (_, param) => {
			return (
				<Typography.Text className={"text-size"}>
					{(utils.formatDate(param.consensus_timestamp))}
				</Typography.Text>
			)
		}
	},
];

export default function RecentTransactions() {
	const router = useRouter()
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const [transactionType, setTransactionType] = useState<string>("")
	const [pagination, setPagination] = useState<Link | undefined>()

	const pageSize = 15
	const getTransactions = async () => {
		try {
			const query = {
				limit: pageSize,
				order: "desc",
				transactionType,
			}
			const res: any = await transactionService.getTransactions(query)
			setTransactions(res.transactions)
			setPagination(res.links)
		} catch (e: any) {
			return
		}
	}

	const [{loading, paused}, {handleToggle, handlePaused}] = usePausedContinue({onGetData: getTransactions, dependency: transactionType})

	const handleChangeType = () => {
		return (e: string) => setTransactionType(e)
	}

	const handleNextPage = async () => {
		handlePaused()
		console.log(pagination?.next)
		try {
			const res: any = await transactionService.getTransactions(null,pagination?.next)
			setTransactions(res.transactions)
			setPagination(res.links)
		} catch (e: any) {
			return
		}
	}

	const handlePrevPage = () => {
		handlePaused()
	}

	console.log(pagination)
	return (
		<Card title={"Recent Transactions"} extra={
			<div className={"d-flex"}>
				<PausedContinueButton paused={paused} onToggle={handleToggle} />
				<Select onChange={handleChangeType()} defaultValue={"TYPES: ALL" as any} style={{width: 280, marginLeft: 10}}>
					{
						TransactionTypes.map((transaction, index) => (
							<Select.Option key={index} value={transaction.value}>
								{transaction.name}
							</Select.Option>
						))
					}
				</Select>
			</div>
		}>
			<div style={{float: "right", marginBottom: 20}}>
				<div style={{display: "flex", gap: 8}}>
					<Button type={"default"} onClick={handlePrevPage} icon={<LeftOutlined />} />
					<Button type={"default"} onClick={handleNextPage} icon={<RightOutlined />} />
				</div>
			</div>
			<Table
				dataSource={transactions as any}
				columns={TransactionColumns}
				scroll={{ x: 992 }}
				pagination={false}
				onRow={(param) => ({
					onClick: () => router.push(`/transactions/${param.consensus_timestamp}`),
				})}
				loading={loading}
				total={1000}
			/>
		</Card>
	)
}