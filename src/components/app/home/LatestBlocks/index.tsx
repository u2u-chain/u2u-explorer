import {Button, Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import styles from "./LatestBlocks.module.css"
import moment from "moment";
import Link from "next/link";
import {useCallback, useState} from "react";
import {blockService} from "@/services/block.service";
import PausedContinueButton from "@/components/shared/PausedContinueButton";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import {useRouter} from "next/router";

const columnBlocks: ColumnsType<Block> = [
  {
    render: (_, param) => {
      const timestamp = param.timestamp.from;
      const date = moment.unix(Number(timestamp));
      const now = moment();
      const diffInSeconds = now.diff(date, 'seconds');
      const formattedDiff = `${diffInSeconds} seconds ago`;

      return (
        <div className={styles.numberWrapper}>
          <Typography.Text className={styles.block}>BK</Typography.Text>
          <div>
            <Typography.Text className={"text-green"}>
              {param.number}
            </Typography.Text>
            <Typography.Text className={styles.time}>
              {formattedDiff}
            </Typography.Text>
          </div>
        </div>
      )
    }
  },
  {
    render: (_, param) => (
      <>
        <div className={styles.hashWrapper}>
          <Typography.Text>
            Hash:
          </Typography.Text>
          <Typography.Text className={styles.hash}>
            {param.hash}
          </Typography.Text>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            flexWrap: "wrap"
          }}
        >
            <Typography.Text
              className={"text-green"}
            >
              {param.count} transactions
            </Typography.Text>
        </div>
      </>
    )
  },
  {
    dataIndex: 'coin',
    render: (_, param) => (
      <Typography.Text className={styles.coinU2u}>
        {param.gas_used} U2U
      </Typography.Text>
    )
  },
];

const LatestBlocks = () => {
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
    <Card
      title={"Latest Blocks"}
      extra={
        <PausedContinueButton paused={paused} onToggle={handleToggle}/>
      }
    >
      <Table
        columns={columnBlocks}
        dataSource={blocks as any}
        scroll={{x: 514}}
        pagination={false}
        showHeader={false}
        onRow={(param) => ({
          onClick: () => router.push(`/blocks/${param.number}`),
        })}
        loading={loading}
      />
      <div className={styles.button}>
        <Link href={"/blocks"}>
          <Button type={"primary"}>View all blocks</Button>
        </Link>
      </div>
    </Card>
  )
}
export default LatestBlocks