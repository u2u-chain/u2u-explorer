import styles from "./Information-scan.module.css"
import {Col, Row, theme, Typography} from "antd";
import Image from "next/image";
import trendUp from "@/assets/images/trend-up.png"
import trendDown from "@/assets/images/trend-down.png"
const InformationScan =() => {

  const {
    token: {colorError, colorPrimary}
  } = theme.useToken()

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Row gutter={[24, 24]}>
          <Col xs={12} sm={12} lg={4}>
            <Typography.Title className={styles.price} >
              $1
            </Typography.Title>
            <Typography.Text  className={styles.text}>
              U2U Price
              <Image src={trendUp} alt={"trend-up"}/>
              <Typography.Text style={{color: colorPrimary}} className={styles.percent}>
                16.72%
              </Typography.Text >
            </Typography.Text>
          </Col>
          <Col xs={12} sm={12} lg={6}>
            <Typography.Title className={styles.price} >
              $0
            </Typography.Title>
            <Typography.Text  className={styles.text}>
              U2U Market Cap
              <Image src={trendDown} alt={"trend-down"}/>
              <Typography.Text style={{color: colorError}} className={styles.percent}>
                6.78%
              </Typography.Text >
            </Typography.Text>
          </Col>
          <Col xs={12} sm={12} lg={8}>
            <Typography.Title className={styles.price} >
              $0
            </Typography.Title>
            <Typography.Text  className={styles.text}>
              U2U Released
            </Typography.Text>
          </Col>
          <Col xs={12} sm={12} lg={6}>
            <Typography.Title className={styles.price} >
              $50,000,000,000
            </Typography.Title>
            <Typography.Text  className={styles.text}>
              U2U Total
            </Typography.Text>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default InformationScan