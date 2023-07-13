import {Button, Card, Typography} from "antd";
import styles from "./Staking.module.css"

const Staking = () => {
  return (
    <Card title={"Staking"}>
      <div className={styles.wrapper}>
        <Typography.Text>
          To view or change your staking options first connect your wallet.
        </Typography.Text>
        <Button size={"large"} type={'primary'}><b>CONNECT WALLET...</b></Button>
      </div>
    </Card>
  )
}

export default Staking