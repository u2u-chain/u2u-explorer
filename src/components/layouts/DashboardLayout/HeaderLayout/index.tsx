import {useRouter} from "next/router";
import styles from "./Header.module.css"
import {Button, Col, Drawer, Menu, MenuProps, Row, theme, Typography} from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import iconGas from "@/assets/images/icon-gas.svg";
import menu from "@/assets/images/menu.svg";
import {useState} from "react";
import {useWindowSize} from "@/hooks/useWindowSize";
import AppInput from "@/components/shared/AppInput";
import {CloseOutlined} from "@ant-design/icons";

const HeaderDashboardLayout = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false)
  const {width} = useWindowSize();

  const isTablet = width < 992;

  const {
    token: {colorWhite, colorError},
  } = theme.useToken();

  const items: any['items'] = [
    {
      key: '/',
      label: 'Dashboard',
    },
    {
      key: '/transactions',
      label: 'Transactions',
    },
    {
      key: '/tokens',
      label: 'Tokens',
    },
    {
      key: '/topics',
      label: 'Topics',
    },
    {
      key: '/contracts',
      label: 'Contracts',
    },
    {
      key: '/accounts',
      label: 'Accounts',
    },
    {
      key: '/nodes',
      label: 'Nodes',
    },
    {
      key: '/staking',
      label: 'Staking',
    },
    {
      key: '/blocks',
      label: 'Blocks',
    },

  ];

  const onChangePath: MenuProps['onClick'] = (e) => {
    router.push(`${e.key}`)
    setOpen(false);
  };

  let asPath: string = "" ;
  const parts = router.pathname.split('/');
  if (parts.length >= 2) {
    asPath = '/' + parts[1];
  }

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
          <Row gutter={24}>
            <Col xs={24} md={10} lg={8}>
              <Link href={"/"}>
                <Image className={styles.logo} src={logo} alt="logo"/>
              </Link>
              <Typography.Text style={{
                backgroundColor: "#1b404db3",
                color: colorWhite
              }} className={styles.informationU2}>
                U2U: $1.15 <Typography.Text
                style={{color: colorError, fontSize: 12.5}}>(-5.73%)</Typography.Text> &nbsp; | &nbsp;
                <Image className={styles.iconGas} src={iconGas} alt="Gas"/> 3 Gwei
              </Typography.Text>
            </Col>
            <Col xs={24} md={14} lg={16}>
              {isTablet ? (
                <div style={{cursor: 'pointer'}} onClick={() => setOpen((o) => !o)}>
                  <div className={styles.menuIcon}>
                    <Image src={menu} alt="icon-menu"/>
                  </div>
                </div>) : (
                <Menu
                  className={styles.menu}
                  style={{color: colorWhite}}
                  mode="horizontal"
                  items={items}
                  selectedKeys={[asPath]}
                  onClick={onChangePath}
                />
              )
              }
              {
                isTablet &&
                <Drawer
                  open={open}
                  headerStyle={{display: 'none'}}
                  bodyStyle={{padding: 0, backgroundColor: "", top: 0}}
                  placement={'right'}
                  width={350}
                  >
                    <div className={styles.drawerWrapper}>
                      <div className={styles.drawerButtonClose}>
                        <Button
                          type={"link"}
                          icon={<CloseOutlined style={{fontSize: 20}} />}
                          onClick={() => setOpen(false)}
                        />
                      </div>
                      <div>
                        <Menu
                          style={{
                            backgroundColor: "transparent",
                            color: "var(--white)"
                          }}
                          mode="inline"
                          items={items}
                          selectedKeys={[asPath]}
                          onClick={onChangePath}
                        />
                      </div>
                    </div>
                  </Drawer>
              }

              <AppInput
                size={"large"}
                placeholder="Search accounts, transactions, tokens, contracts and topics"
              />
            </Col>
          </Row>
        </div>
      </header>
    </>
  )
}
export default HeaderDashboardLayout