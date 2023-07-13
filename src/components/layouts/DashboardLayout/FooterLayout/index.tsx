import styles from "./Footer.module.css"
import {Col, Row, theme, Typography} from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import twitter from "@/assets/images/social/twitter.png";
import telegram from "@/assets/images/social/telegram.png";
import discord from "@/assets/images/social/discord.png";

const FooterDashboardLayout = () => {
  const {
    token: {colorWhite, colorPrimary},
  } = theme.useToken();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <Row
          gutter={[24,32]}
          style={{
            display: "flex",
            alignItems: "center"
          }}>
          <Col xs={24} sm={8} md={8} lg={8}>
            <Link href={"/"} className={styles.logo}>
              <Image src={logo} alt="logo"/>
            </Link>
          </Col>
          <Col xs={24} sm={8} md={8} lg={10}>
            <div className={styles.privacy} >
              <Link href={"https://docs.uniultra.xyz/the-u2u-foundation-privacy-policy"} target="_blank">
                <Typography.Text style={{color: colorWhite, display: "inline-block"}}>Privacy Policy</Typography.Text>
              </Link>
              <div className={styles.dot} style={{
                backgroundColor: colorPrimary,
              }}></div>
              <Link href={"https://docs.uniultra.xyz/u2u-foundation"} target="_blank">
                <Typography.Text style={{color: colorWhite, display: "inline-block"}}>U2U Venture Builder
                  Council</Typography.Text>
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={8} md={8} lg={6}>
            <div className={styles.social} >
              <Link href={"https://twitter.com/UniUltraxyz"} target="_blank">
                <Image className={styles.logo} src={twitter} alt="twitter"/>
              </Link>
              <Link href={"https://t.me/UnicornUltra"} target="_blank">
                <Image className={styles.logo} src={telegram} alt="telegram"/>
              </Link>
              <Link href={"https://discord.gg/QE3J7KVwNp"} target="_blank">
                <Image className={styles.logo} src={discord} alt="discord"/>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  )
}
export default FooterDashboardLayout