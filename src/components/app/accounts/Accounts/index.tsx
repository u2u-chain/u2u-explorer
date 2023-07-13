import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import {useState} from "react";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import PausedContinueButton from "@/components/shared/PausedContinueButton";
import {accountService} from "@/services/account.service";
import {utils} from "@/utils";

const AccountColumns: ColumnsType<any> = [
  {
    title: 'Account',
    render: (_, param) => (
      <Typography>{param.account}</Typography>
    )
  },
  {
    title: 'Expiry',
    render: (_, param) => (
      <Typography>{utils.formatDate(param.expiry_timestamp)}</Typography>
    )
  },
  {
    title: 'Tokens',
    render: (_, param) => (
      <Typography className={"text-gray"}>None</Typography>
    )
  },
  {
    title: 'Memo',
    render: (_, param) => (
      param.memo !== "" ?
        <Typography>{param.memo}</Typography> :
        <Typography className={"text-gray"}>None</Typography>
    )
  },
  {
    title: 'Balance',
    render: (_, param) => (
      param.balance.balance !== 0 ?
      <Typography>{utils.convertAmount(param.balance.balance)} U2U</Typography> :
        <Typography className={"text-gray"}>{utils.convertAmount(param.balance.balance)} U2U</Typography>
    )
  },
];

export default function FungibleAccounts() {
  const router = useRouter()
  const [accounts, setAccounts] = useState<any[]>([])

  const pageSize = 15

  const getAccounts = async () => {
    try {
      const query = {
        limit: pageSize,
        order: "desc",
        type: "FUNGIBLE_COMMON"
      }
      const res: any = await accountService.getAccounts(query)
      setAccounts(res.accounts)
    } catch (e: any) {
      return
    }
  }

  const [{loading, paused}, {handleToggle}] = usePausedContinue({onGetData: getAccounts})

  return (
    <Card
      title={"Accounts"}
      extra={<PausedContinueButton paused={paused} onToggle={handleToggle}/>}
    >
      <Table
        dataSource={accounts as any}
        columns={AccountColumns}
        pagination={{
          pageSize
        }}
        onRow={(param) => ({
          onClick: () => router.push(`/accounts/${param.account}`),
        })}
        loading={loading}
      />
    </Card>
  )
}