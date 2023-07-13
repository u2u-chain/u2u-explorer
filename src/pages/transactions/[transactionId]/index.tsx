import DashboardLayout from "@/components/layouts/DashboardLayout";
import {NextPageWithLayout} from "@/pages/_app";
import TransactionDetail from "@/components/app/transactions/transaction-detail";
import Transfers from "@/components/app/transactions/transaction-detail/Transfers";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {transactionService} from "@/services/transaction.service";
import MessageSubmitted from "@/components/app/transactions/transaction-detail/MessageSubmitted";

const TransactionDetailPage: NextPageWithLayout =() => {
  const router = useRouter()
  const [transaction, setTransaction] = useState<Transaction | undefined>()
  const consensusTimestamp = router.query.transactionId as string
  const [status, setStatus] = useState<boolean>(true)

  useEffect(() => {
    const getTransaction = async () => {
      try {
        const res: any = await transactionService.getTransaction(consensusTimestamp);
        setTransaction(res.transactions[0]);
        setStatus(true)
      } catch (e: any) {
        setStatus(false)
        return
      }
    };

    if (consensusTimestamp) {
      getTransaction();
    }
  }, [consensusTimestamp]);
  return(
    <>
      <Head>
        <title>Detail Transactions | Unicorn Ultra (U2U)</title>
      </Head>
      <TransactionDetail transaction={transaction} status={status}/>
      <Transfers transaction={transaction}/>
      <MessageSubmitted/>
    </>
  )
}

TransactionDetailPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default TransactionDetailPage
