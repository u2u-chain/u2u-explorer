import {Card, Col, Row, Typography} from "antd";
import styles from "./Network.module.css";
import {useEffect, useState} from "react";
import {nodeService} from "@/services/network.service";
import moment from "moment";

const Network = ({totalNodes}: {totalNodes: number}) => {
  const [networkStake, setNetworkStake] = useState<NetworkStake | undefined>()

  useEffect(() => {
    const getNetworkStake = async () => {
      try {
        const res: any = await nodeService.getNetworkStake()
        setNetworkStake(res)
      } catch (e: any) {
        return
      }

    }
    getNetworkStake()
  }, [])

  function convertDateLastStaked(stakingPeriod: string) {
    const date = moment.unix(Number(stakingPeriod));
    const now = moment();
    const diff = now.diff(date, 'minutes');
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours}h ${minutes}min ago`
  }

  function convertDateNextStakedPeriod(stakingPeriod: string, stakingPeriodDuration: number) {
    const date = moment.unix(Number(stakingPeriod));
    const now = moment();
    const diff = stakingPeriodDuration - now.diff(date, 'minutes');
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours}h ${minutes}min`
  }

  return (
    <Card title={"Network"} className={styles.image}>
      <div className={styles.network}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Total Nodes</Typography.Text>
            <Typography.Text className={styles.coin}>{totalNodes}</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Total Staked</Typography.Text>
            <Typography.Text className={styles.coin}>{networkStake?.stake_total}</Typography.Text>
            <Typography.Text className={styles.u2u}> U2U</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Last Period Reward</Typography.Text>
            <Typography.Text className={styles.coin}>{networkStake?.staking_reward_fee_fraction}</Typography.Text>
            <Typography.Text className={styles.u2u}> U2U</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Last Staked</Typography.Text>
            <Typography.Text
              className={styles.coin}>{convertDateLastStaked(networkStake?.staking_period.from)}</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Next Staking Period</Typography.Text>
            <Typography.Text
              className={styles.coin}>in {convertDateNextStakedPeriod(networkStake?.staking_period.from, networkStake?.staking_period_duration)}</Typography.Text>
          </Col>
          <Col xs={24} sm={12} md={12} xl={8}>
            <Typography.Text className={styles.title}>Staking Period</Typography.Text>
            <Typography.Text
              className={styles.coin}>{Number(networkStake?.staking_period_duration) / 60}h</Typography.Text>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

export default Network