import {Button, Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "./LatestTransactions.module.css"
import moment from "moment";
import Link from "next/link";
import { useState} from "react";
import {transactionService} from "@/services/transaction.service";
import PausedContinueButton from "@/components/shared/PausedContinueButton";
import {usePausedContinue} from "@/hooks/usePausedContinue";

const columns: ColumnsType<Transaction> = [
  {
    render: (_, param) => {
      const timestamp = Number(param.consensus_timestamp);
      const date = moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss');

      return (
        <div className={styles.numberWrapper}>
          <Typography.Text className={styles.block}>TX</Typography.Text>
          <div>
            <Link href={`transactions/${param.consensus_timestamp}`} >
              <Typography.Text className={styles.transfers}>
                {param.transaction_hash}
              </Typography.Text>
            </Link>
            <Typography.Text className={styles.time}>
              {moment(date).fromNow()}
            </Typography.Text>
          </div>
        </div>
      )
    }
  },
  {
    render: (_, param) => (
      <>
        <Typography.Text className={styles.transfersWrapper}>
          From
          <Link href={`/accounts/${param.transfers[0].account}`}>
              <Typography.Text className={styles.transfers}>{param.transfers[0].account}</Typography.Text>
          </Link>
        </Typography.Text>

        <Typography.Text className={styles.transfersWrapper}>
          To {""}
          <Link href={`/accounts/${param.transfers[1].account}`}>
              <Typography.Text className={styles.transfers}>
                {param.transfers[1].account}
              </Typography.Text>
          </Link>
        </Typography.Text>
      </>
    )
  },
  {
    dataIndex: 'coin',
    render: (_, param) => (
      <Typography.Text className={styles.coinU2u}>
        {0} U2U
      </Typography.Text>
    )
  },
];


const LatestTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const pageSize = 15
  const getTransactions = async () => {
    try {
      const query = {
        limit: pageSize,
        order: "desc",
        transactionType: "CRYPTOTRANSFER"
      }
      const res : any = await transactionService.getTransactions(query)
      setTransactions(res.transactions)
    } catch (e: any) {
      return
    }
  }
  const [{loading, paused}, {handleToggle}] = usePausedContinue({onGetData: getTransactions})

  return (
    <Card
      title={"Latest Transactions"}
      extra={
        <PausedContinueButton paused={paused} onToggle={handleToggle} />
      }
    >
      <Table
        columns={columns}
        dataSource={transactions as any}
        scroll={{x: 514}}
        pagination={false}
        showHeader={false}
        loading={loading}
      />
      <div className={styles.button}>
        <Link href={"/transactions"}>
          <Button type={"primary"}>View all transactions</Button>
        </Link>
      </div>
    </Card>
  )
}
export default LatestTransactions