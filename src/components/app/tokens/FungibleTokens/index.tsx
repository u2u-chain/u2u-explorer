import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import {useState} from "react";
import {tokenService} from "@/services/token.service";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import PausedContinueButton from "@/components/shared/PausedContinueButton";

const TokenColumns: ColumnsType<Token> = [
	{
		title: 'Token',
		render: (_, param) => (
			<Typography>{param.name}</Typography>
		)
	},
	{
		title: 'Symbol',
		render: (_, param) => (
			<Typography>{param.symbol}</Typography>
		)
	},
];

export default function FungibleTokens() {
	const router = useRouter()
	const [tokens, setTokens] = useState<Token[]>([])

	const pageSize = 15
	const getTokens = async () => {
		try {
			const query = {
				limit: pageSize,
				order: "desc",
				type: "FUNGIBLE_COMMON"
			}
			const res: any = await tokenService.getTokens(query)
			setTokens(res.tokens)
		} catch (e: any) {
			return
		}
	}

	const [{loading, paused}, {handleToggle}] = usePausedContinue({onGetData: getTokens})

	return (
		<Card
			title={"Fungible Tokens"}
			extra={<PausedContinueButton paused={paused} onToggle={handleToggle} />}
		>
			<Table
				dataSource={tokens as any}
				columns={TokenColumns}
				pagination={{
					pageSize
				}}
				onRow={(param) => ({
					onClick: () => router.push(`/tokens}`),
				})}
				loading={loading}
			/>
		</Card>
	)
}