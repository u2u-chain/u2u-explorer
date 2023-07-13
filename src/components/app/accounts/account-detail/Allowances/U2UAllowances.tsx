import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useEffect, useState} from "react";
import {accountService} from "@/services/account.service";
import {useRouter} from "next/router";

const U2UAllowancesColumns: ColumnsType<any> = [
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
    dataIndex: 'time',
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


export default function U2UAllowances() {
  const router = useRouter()
  const [cryptoAllowances, setCryptoAllowances] = useState<any[]>([])

  const pageSize = 15
  const accountId = router.query.accountId as string

  useEffect(() => {
    const getCryptoAllowances = async () => {
      try {
        const query = {
          limit: pageSize,
          order: "asc",
        }
        const res: any = await accountService.getCryptoAllowances(query, accountId)
        setCryptoAllowances(res.allowances)
      } catch (e: any) {
        return
      }
    }
    if(accountId) getCryptoAllowances()
  }, [accountId])

  return (
    <Card bordered={false} style={{marginBottom: 20}}>
      <Typography.Title level={4}>U2U Allowances</Typography.Title>
      <Table
        dataSource={cryptoAllowances as any}
        columns={U2UAllowancesColumns}
        pagination={false}
        scroll={{ x: 514 }}
      />
    </Card>
  )
}