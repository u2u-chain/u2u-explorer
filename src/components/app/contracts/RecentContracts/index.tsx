import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import {useState} from "react";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import {contractService} from "@/services/contract.service";
import PausedContinueButton from "@/components/shared/PausedContinueButton";
import {utils} from "@/utils";

const ContractColumns: ColumnsType<Contract> = [
	{
		title: 'Contract',
		render: (_, param) => {
			return (
				<Typography.Text>{param.contract_id}</Typography.Text>
			)
		}
	},
	{
		title: 'Created',
		render: (_, param) => (
			<Typography.Text>{utils.formatDate(param.created_timestamp)}</Typography.Text>
		)
	},
	{
		title: 'Memo',
		render: (_, param) => {
			return (
				param.memo ? <Typography.Text>
						{atob(param.memo)}
					</Typography.Text> :
					<Typography.Text className={"text-gray"}>
						None
					</Typography.Text>
			)
		}
	},
];


export default function RecentContracts() {
	const router = useRouter()
	const [contracts, setContracts] = useState<any[]>([])

	const pageSize = 15
	const getContracts = async () => {
		try {
			const query = {
				limit: pageSize,
				order: "desc",
			}
			const res: any = await contractService.getContracts(query)
			setContracts(res.contracts)
		} catch (e: any) {
			return
		}
	}

	const [{loading, paused}, {handleToggle}] = usePausedContinue({onGetData: getContracts})

	return (
		<Card
			title={"Recent Contracts"}
			extra={
				<PausedContinueButton paused={paused} onToggle={handleToggle}/>
			}>
			<Table
				dataSource={contracts as any}
				columns={ContractColumns}
				scroll={{x: 992}}
				pagination={{
					pageSize,
				}}
				onRow={(param) => ({
					onClick: () => router.push(`/contracts/${param.contract_id}`),
				})}
				loading={loading}
			/>
		</Card>
	)
}