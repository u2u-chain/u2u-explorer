import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import PausedContinueButton from "@/components/shared/PausedContinueButton";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import {useCallback, useState} from "react";
import {contractService} from "@/services/contract.service";
import {utils} from "@/utils";

const RecentContractColumns: ColumnsType<RecentContract> = [
  {
    title: 'Time',
    render: (_, param) => (
      <Typography.Text
        style={{
          display: "inline-block",
          minWidth: 120
        }}
      >{utils.formatDate(param.timestamp)}</Typography.Text>
    )
  },
  {
    title: 'From',
    render: (_, param) => (
      <Typography.Text style={{
        display: "inline-block",
        minWidth: 200
      }}>
        {param.from} (0.0.214893)
      </Typography.Text>
    )
  },
  {
    title: 'Error Message',
    render: (_, param) => {
      return (
        param.error_message ?
          <Typography.Text
            className={"text-red"}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              maxWidth: "200px",
              textOverflow: "ellipsis",
              display: "inline-block",
            }}
          >
            {param.error_message}
          </Typography.Text> :
          <Typography.Text className={"text-gray"}>
            None
          </Typography.Text>
      )
    }
  },
  {
    title: 'Transfer Amount',
    render: (_, param) => (
      param.amount !== 0 ?
        <Typography>{utils.convertAmount(param.amount)} U2U</Typography> :
        <Typography className={"text-gray"}>{utils.convertAmount(param.amount)} U2U</Typography>
    )
  },
];

const RecentContractCalls = () => {
  const [recentContracts, setRecentContracts] = useState<RecentContract[]>([])

  const pageSize = 15
  const getRecentContracts = useCallback(async () => {
    try {
      const query = {
        limit: pageSize,
        order: "desc",
      }
      const res: any = await contractService.getRecentContracts(query)
      setRecentContracts(res.results)
      return res
    } catch (e: any) {
      return
    }
  }, [])

  const [{loading, paused}, {handleToggle}] = usePausedContinue({onGetData: getRecentContracts})
  return (
    <Card
      title={"Recent Contract Calls"}
      extra={
        <PausedContinueButton paused={paused} onToggle={handleToggle}/>
      }
    >
      <Table
        columns={RecentContractColumns}
        dataSource={recentContracts as any}
        pagination={{
          pageSize
        }}
        scroll={{x: 514}}
        loading={loading}
      />
    </Card>
  )
}
export default RecentContractCalls