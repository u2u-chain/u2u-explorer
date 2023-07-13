import { Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import {useCallback, useState} from "react";
import {blockService} from "@/services/block.service";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import moment from "moment/moment";
import PausedContinueButton from "@/components/shared/PausedContinueButton";

const BlockColumns: ColumnsType<Block> = [
  {
    title: 'Number',
    render: (_, param) => (
        <Typography.Text>{param.number}</Typography.Text>
    )
  },
  {
    title: 'Start Time',
    render: (_, param) =>  {
      const timestamp = param.timestamp.from;
      const date = moment.unix(Number(timestamp));
      const now = moment();
      const diffInSeconds = now.diff(date, 'seconds');
      const formattedDiff = `${diffInSeconds} seconds ago`;

      return (
        <Typography.Text>{formattedDiff }</Typography.Text>
      )
    }
  },
  {
    title: 'Transactions',
    dataIndex: 'transactions',
    render: (_, param) => (
      <Typography.Text>{param.count}</Typography.Text>
    )
  },
  {
    title: 'Gas Used',
    dataIndex: 'gasUsed',
    render: (_, param) => (
      <Typography.Text>{param.gas_used}</Typography.Text>
    )
  },
];


export default function Blocks() {
  const router = useRouter()
  const [blocks, setBlocks] = useState<Block[]>([])

  const pageSize = 15
  const getBlocks = useCallback(async () => {
    try {
      const query = {
        limit: pageSize,
        order: "desc",
      }
      const res : any = await blockService.getBlocks(query)
      setBlocks(res.blocks)
      return res
    } catch (e: any) {
      return
    }
  }, [])

  const [{loading, paused}, {handleToggle}] = usePausedContinue({onGetData: getBlocks})
  return (
    <div>
      <Card
        title={"Blocks"}
        extra={
          <PausedContinueButton paused={paused} onToggle={handleToggle}/>
        }
      >
        <Table
          dataSource={blocks as any}
          columns={BlockColumns}
          scroll={{ x: 992 }}
          pagination={{
            pageSize
          }}
          onRow={(param) => ({
            onClick: () => router.push(`/blocks/${param.number}`),
          })}
          loading={loading}

        />
      </Card>
    </div>
  )
}

