
import {Card, Col, InputNumber, Row, Select, Typography} from "antd";
import styles from "./RewardsEstimator.module.css"
import {useEffect, useState} from "react";
import {nodeService} from "@/services/network.service";

const RewardsEstimator = () => {
  const [nodes, setNodes] = useState<NetworkNode[]>([])

  const pageSize = 25
  useEffect(() => {
    const query = {
      limit: pageSize
    }
    const getNodes = async () =>{
      try {
        const res: any = await nodeService.getNetworkNodes(query)
        setNodes(res.nodes)
      }
      catch (e: any){
        return
      }
    }
    getNodes()
  }, [])

  return (
    <div className={styles.wrapper}>
      <Card title={"Rewards Estimator"}>
        <div className={styles.stake}>
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <div className={styles.stakeContent}>
                  <Typography.Text>Choose a node to stake to</Typography.Text>
                  <Select defaultValue={0 as any} >
                    {
                      // StakeTypes.map((transaction, index) => (
                      //   <Select.Option key={index} value={transaction.value}>
                      //     {transaction.name}
                      //   </Select.Option>
                      // ))
                      nodes?.map((node, index) => (
                        <Select.Option key={index} value={node.node_id}>
                          {node.node_id}-
                        </Select.Option>
                      ))
                    }
                  </Select>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className={styles.stakeContent}>
                  <Typography.Text>Enter the number of bars you want to stake</Typography.Text>
                  <InputNumber type={"number"} style={{width: "100%"}} placeholder={"100"} min={1  as any}/>
                </div>
              </Col>
            </Row>
        </div>
        <div className={styles.inforReward}>
            <Row gutter={[24,24]}>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Current 24h Period Reward</Typography.Text>
                <Typography.Text className={styles.coin}>0</Typography.Text>
                <Typography.Text className={styles.u2u}> U2U</Typography.Text>
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Approx Monthly Reward</Typography.Text>
                <Typography.Text className={styles.coin}>0</Typography.Text>
                <Typography.Text className={styles.u2u}> U2U</Typography.Text>
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Current 24h Period Reward</Typography.Text>
                <Typography.Text className={styles.coin}>0</Typography.Text>
                <Typography.Text className={styles.u2u}> U2U</Typography.Text>
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <Typography.Text className={styles.title}>Approx Yearly Reward Rate</Typography.Text>
                <Typography.Text className={styles.coin}>0%</Typography.Text>
              </Col>
            </Row>
        </div>
        <Typography.Text className={styles.description}>
          These numbers are not individualized and only for illustrative purposes. Please see the staking documentation for factors that can influence these numbers.
        </Typography.Text>
      </Card>
    </div>
  )
}

export default RewardsEstimator