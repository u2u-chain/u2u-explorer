import {Card, Table, Tooltip, Typography} from "antd";
import {useRouter} from "next/router";
import {ColumnsType} from "antd/lib/table";
import node from "@/assets/images/node.svg"
import Image from "next/image";
import styles from "./Nodes.module.css"

const NodeColumns: ColumnsType<NetworkNode> = [
  {
    title: '',
    dataIndex: 'node',
    render: () => (
      <Image width={21} src={node} alt={"node"}/>
    )
  },
  {
    title: 'Node',
    render: (_, param) => (
      <Typography.Text>
        {param.node_id}
      </Typography.Text>
    )
  }, {
    title: 'Description',
    dataIndex: 'description',
    render: (_, param) => (
      param.description ?
        <Typography.Text>
          {param.description}
        </Typography.Text> :
        <Typography.Text className={"text-gray"}>
          None
        </Typography.Text>
    )
  }, {
    title: 'Stake',
    render: (_, param) => (
      <>
        <Typography.Text className={param.stake === 0 ? "text-gray" : ""}>
          {param.stake} U2U {""}
        </Typography.Text>
        {
          param.stake < param.min_stake ?
            <Typography.Text className={param.stake === 0 ? "text-gray" : ""}>
              {`(<Min)`}
            </Typography.Text> :
            <Typography.Text>
              {`(>Min)`}
            </Typography.Text>
        }
      </>
    )
  }, {
    title: 'Staked For No Reward',
    render: (_, param) => (
      <Typography.Text className={param.stake_not_rewarded === 0 ? "text-gray" : ""}>
        {param.stake_not_rewarded} U2U
      </Typography.Text>
    )
  },
  {
    title: 'Stake Range',
    width: "20%",
    render: (_, param) => {
      const total = param.stake_rewarded + param.stake_not_rewarded + param.max_stake + param.min_stake
      const stakeRewardedPercent = (param.stake_rewarded / total) * 100
      const stakeNotRewardedPercent = (param.stake_not_rewarded / total) * 100
      const stakeMinMaxRewardedPercent = ((param.max_stake + param.min_stake) / total) * 100

      return  (
        <Tooltip
          color={"#fff"}
          overlayStyle={{maxWidth: '600px'}}
          title={
            <ul className={styles.hoverPopover}>
              <li>
                <Typography.Text className='bg-green'></Typography.Text>
                <Typography.Text>Rewarded:</Typography.Text>
                <Typography.Text><b>{param.stake_rewarded}</b> U2U</Typography.Text>
              </li>
              <li>
                <Typography.Text className='bg-red'></Typography.Text>
                <Typography.Text>Not Rewarded:</Typography.Text>
                <Typography.Text><b>{param.stake_not_rewarded}</b> U2U</Typography.Text>
              </li>
              <li>
                <Typography.Text></Typography.Text>
                <Typography.Text>Min:</Typography.Text>
                <Typography.Text><b>{(param.min_stake/100000000).toLocaleString()}</b> U2U</Typography.Text>
              </li>
              <li>
                <Typography.Text></Typography.Text>
                <Typography.Text>Max:</Typography.Text>
                <Typography.Text><b>{(param.max_stake/100000000).toLocaleString()}</b> U2U</Typography.Text>
              </li>
            </ul>
          }
        >
          <Typography.Text className={styles.groupStakeRange}>
            <Typography.Text style={{width: `${stakeRewardedPercent}%`}} className="bg-green"></Typography.Text>
            <Typography.Text style={{width:`${stakeNotRewardedPercent}%`}} className="bg-red"></Typography.Text>
            <Typography.Text style={{width: `${stakeMinMaxRewardedPercent}%`}}></Typography.Text>
          </Typography.Text>
        </Tooltip>
      )
    }
  },
  {
    title: 'Reward Rate',
    align: "right",
    render: (_, param) => (
      <Typography.Text>
        {param.reward_rate_start}%
      </Typography.Text>
    ),
  }
];


const Nodes = ({nodes}: {nodes: NetworkNode[]}) => {
  const router = useRouter()

  return (
    <div style={{marginTop: 22}}>
      <Card title={"Nodes"}>
        <Table
          dataSource={nodes as any}
          columns={NodeColumns}
          scroll={{x: 992}}
          pagination={{
            pageSize: 25,
          }}
          onRow={(param) => ({
            onClick: () => router.push(`/nodes/${param.node_id}`),
          })}
        />
      </Card>
    </div>
  )
}

export default Nodes