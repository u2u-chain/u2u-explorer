import {Card, Table, Tag, Typography} from "antd";
import {TransactionTypes} from "@/configs/apps.config";
import {ColumnsType} from "antd/lib/table";
import {transactionService} from "@/services/transaction.service";
import {useEffect, useState} from "react";
import {utils} from "@/utils";
import {useRouter} from "next/router";

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

interface BlockTransactionsProps {
  block: Block
}

export default function BlockTransactions({block}: BlockTransactionsProps) {
  const router = useRouter()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{
    setLoading(true)
    const getTransactions = async () => {
      try {
        const query = {
          limit: 1,
          order: "asc",
          timestamp: block?.timestamp.from,
          optionalFiltering: "gte"
        }
        const res: any = await transactionService.getTransactions(query)
        setTransactions(res.transactions)
        setLoading(false)
      } catch (e: any) {
        setLoading(false)
        return
      }
    }
    if(block?.number) getTransactions()
  }, [block])

  return (
    <div style={{marginTop: 26}}>
      <Card title={"Block Transactions"}>
        <Table
          dataSource={transactions as any}
          columns={TransactionColumns}
          scroll={{ x: 992 }}
          onRow={(_) => ({
            onClick: () => router.push(`/transactions/${block.timestamp.from}`),
          })}
          loading={loading}
        />
      </Card>
    </div>
  )
}