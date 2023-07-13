import AppCard from "@/components/shared/AppCard";
import {useWindowSize} from "@/hooks/useWindowSize";
import {Col, message, Row, Tooltip, Typography} from "antd";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {accountService} from "@/services/account.service";
import {utils} from "@/utils";
import {transactionService} from "@/services/transaction.service";
import styles from "./AccountDetail.module.css"

export default function Account() {
	const router = useRouter()
	const {width} = useWindowSize()
	const [account, setAccount] = useState<Account | undefined>()
	const [transaction, setTransaction] = useState<Transaction | undefined>()

	const isDesktop = width < 992
	const accountId = router.query.accountId as string

	useEffect(() => {
		const getAccount = async () => {
			try {
				const res: any = await accountService.getAccount(accountId)
				setAccount(res)
			} catch (e: any) {
				return
			}
		}
		if (accountId) getAccount()
	}, [accountId])

	useEffect(() => {
		const getTransaction = async () => {
			try {
				const consensusTimestamp = account?.created_timestamp
				const res: any = await transactionService.getTransaction(consensusTimestamp);
				setTransaction(res.transactions[0]);
			} catch (e: any) {
				return
			}
		};

		if (account) {
			getTransaction();
		}
	}, [account]);

	return (
		<AppCard
			title={"Account"}
			subtitle={{
				id: `${account?.staked_account_id}`,
				name: "Account",
				subKey: "rkpys",
				evmAddress: `${account?.evm_address}`
			}}
		>
			<Row gutter={24}>
				<Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
					<table className={"customTable"}>
						<tbody>
							<tr>
								<td><Typography.Text>Balance</Typography.Text></td>
								<td>
									<Typography.Text>{utils.convertAmount(account?.balance.balance)} U2U</Typography.Text>
									{/*<Typography.Text className={"text-green"}> $0.0015</Typography.Text>*/}
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Staked to</Typography.Text></td>
								<td>
									{
										account?.staked_node_id ?
											<Typography.Text>{account?.staked_node_id}</Typography.Text> :
											<Typography.Text className={"text-gray"}> None</Typography.Text>
									}
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Pending Reward</Typography.Text></td>
								<td>
									{
										account?.pending_reward !== undefined ?
											<Typography.Text
												className={account?.pending_reward === 0 ? "text-gray" : ""}>{utils.convertAmount(account.pending_reward)} U2U</Typography.Text> :
											<Typography.Text className={"text-gray"}> None</Typography.Text>
									}

								</td>
							</tr>
							<tr>
								<td><Typography.Text>Memo</Typography.Text></td>
								<td>
									{
										account?.memo ?
											<Typography.Text>{account.memo}</Typography.Text> :
											<Typography.Text className={"text-gray"}> None</Typography.Text>
									}
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Create Transaction</Typography.Text></td>
								<td>
									{
										account?.created_timestamp && transaction?.transaction_id ?
											<Typography.Text className={"text-green"}>{transaction.transaction_id}</Typography.Text> :
											<Typography.Text className={"text-gray"}>None</Typography.Text>
									}
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Expires at</Typography.Text></td>
								<td>
									<Typography>{utils.formatDate(account?.expiry_timestamp)}</Typography>
								</td>
							</tr>
							<tr>
								<td><Typography.Text>Auto Renew Period</Typography.Text></td>
								<td><Typography.Text className={"text-gray"} >Not yet enabled</Typography.Text></td>
							</tr>
							<tr>
								<td><Typography.Text>Max. Auto. Association</Typography.Text></td>
								<td><Typography.Text>{account?.max_automatic_token_associations}</Typography.Text></td>
							</tr>
							<tr>
								<td><Typography.Text>Receiver Sig. Required</Typography.Text></td>
								<td><Typography.Text className={"text-red"}>{account?.receiver_sig_required}</Typography.Text></td>
							</tr>
						</tbody>
					</table>
				</Col>
				<Col xs={24} lg={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
					<table className={"customTable"}>
						<tbody>
						<tr>
							<td><Typography.Text>Admin Key</Typography.Text></td>
							<td>
								<div className={styles.hash}>
										<Tooltip title={"Copy to clipboard"}>
											<Typography.Text
												className={styles.code}
												onClick={() => {
													navigator.clipboard.writeText(`${account?.key.key}`).then(() => {
														message.success('Copied to clipboard')
													})
												}}
												style={{fontFamily: "var(--font_code)", display: "block",}}
											>
												{account?.key.key.replace(/(.{4})/g, "$1 ")}
											</Typography.Text>
										</Tooltip>
									<Typography.Text className={"text-green"}>{account?.key._type}</Typography.Text>
								</div>
							</td>
						</tr>
						<tr>
							<td><Typography.Text>Ethereum Nonce</Typography.Text></td>
							<td>
								<Typography.Text>{account?.ethereum_nonce}</Typography.Text>
							</td>
						</tr>
						</tbody>
					</table>
				</Col>
			</Row>
		</AppCard>

	)
}