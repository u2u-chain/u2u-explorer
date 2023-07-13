import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {accountService} from "@/services/account.service";

const RecentStakingRewardsColumns: ColumnsType<any> = [
	{
		title: 'Time',
		align: "left",
		render: (_, param) => (
			<Typography.Text></Typography.Text>
		)
	},
	{
		title: 'Amount Rewarded',
		align: "right",
		render: (_, param) => (
			<Typography.Text></Typography.Text>
		)
	},
];

export default function RecentStakingRewards() {
	const router = useRouter()
	const [recentStakingRewards, setRecentStakingRewards] = useState<any[]>([])

	const accountId = router.query.accountId as string
	const pageSize = 15

	useEffect(()=> {
		const getRecentStakingRewards = async () => {
			try {
				const query = {
					limit: pageSize,
					order: "desc",
				}
				const res: any = await accountService.getRecentStakingRewards(query, accountId)
				setRecentStakingRewards(res.rewards)
			} catch (e: any) {
				return
			}
		}
		if(accountId) getRecentStakingRewards()
	}, [accountId])
	return (

		<Card title={"Recent Staking Rewards"}>
			<Table
				dataSource={recentStakingRewards as any}
				columns={RecentStakingRewardsColumns}
				scroll={{ x: 992 }}
				pagination={{
					pageSize
				}}
			/>
		</Card>
	)
}