import AppCard from "@/components/shared/AppCard";
import {Col, message, Row, Tooltip, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import styles from "./NodeDetail.module.css"
import {useEffect, useState} from "react";
import {nodeService} from "@/services/network.service";
import {useRouter} from "next/router";
import {utils} from "@/utils";

const NodeDetail = () => {
  const router = useRouter()
  const {width} = useWindowSize()
  const [node, setNode] = useState<NetworkNode | undefined>()
  const [networkStake, setNetworkStake] = useState<NetworkStake | undefined>()

  const isDesktop = width < 992
  const pageSize = 25
  const nodeId = router.query.nodeId as string

  useEffect(() => {
    const query = {
      limit: pageSize
    }
    const getNetworkNodes = async () => {
      try {
        const res: any = await nodeService.getNetworkNodes(query)
        const node: any = res.nodes.find(item => item.node_id === Number(nodeId))
        setNode(node)
      } catch (e: any) {
        return
      }
    }
    getNetworkNodes()
  }, [nodeId])

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
  }, [nodeId])

  return (
    <AppCard
      title={`Node ${nodeId}`}
      subNode={"U2U Council Node"}
    >
      <Row gutter={24}>
        <Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Node Account</Typography.Text></td>
              <td><Typography.Text className={"text-green"}>{node?.node_account_id}</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Description</Typography.Text></td>
              <td>
                <Typography.Text>Node {node?.node_id}</Typography.Text>

              </td>
            </tr>
            <tr>
              <td><Typography.Text>Address Book File</Typography.Text></td>
              <td><Typography.Text>{node?.file_id}</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Node existed since</Typography.Text></td>
              <td><Typography.Text>{utils.formatDate(node?.timestamp.from)}</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Node expiry date</Typography.Text></td>
              <td>
                {
                  node?.timestamp.to ?
                    <Typography.Text>{utils.formatDate(node?.timestamp.from)}</Typography.Text> :
                    <Typography.Text className={"text-gray"}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Service Endpoints</Typography.Text></td>
              <td>
                {
                  node?.service_endpoints.map((endpoint: {ip_address_v4; string, port: number}, index: number) => (
                    <div key={index}>
                      <Typography.Text>{endpoint.ip_address_v4}:
                        <Typography.Text className={"text-gray"}>{endpoint.port}</Typography.Text>
                      </Typography.Text>
                      <br/>
                    </div>
                  ))
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Public Key</Typography.Text></td>
              <td>
                  <div className={styles.hash}>
                    <Tooltip title={"Copy to clipboard"} >
                      <Typography.Text
                        className={styles.code}
                        onClick={() => {
                          navigator.clipboard.writeText(`${node?.public_key}`).then(() => {
                            message.success('Copied to clipboard')
                          })
                        }}
                      >
                        {node?.public_key.split(`${node?.node_cert_hash}`)[1].replace(/(.{4})/g, "$1 ")}
                      </Typography.Text>
                    </Tooltip>
                    <Typography.Text className={"text-green"}>RSA</Typography.Text>
                  </div>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Certificate Hash</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <Tooltip title={"Copy to clipboard"}>
                    <Typography.Text
                      style={{width: "max-content"}}
                      className={styles.code}
                      onClick={() => {
                        navigator.clipboard.writeText(`${node?.node_cert_hash}d3`).then(() => {
                          message.success('Copied to clipboard')
                        })
                      }}
                    >
                      d3
                    </Typography.Text>
                  </Tooltip>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={24} lg={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Last Period Reward Rate</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>{node?.reward_rate_start}%</Typography.Text>
                <Typography.Text style={{textTransform: "uppercase", fontSize: "11px !important"}}> APPROX ANNUAL
                  EQUIVALENT</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Stake for Consensus</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>{node?.stake}%</Typography.Text>
                <Typography.Text style={{fontSize: "11px !important"}}> U2U </Typography.Text>
                {
                  node?.stake < node?.min_stake ?
                    <Typography.Text className={"text-green"}>
                      {`(<Min)`}
                    </Typography.Text> :
                    <Typography.Text className={"text-green"}>
                      {`(>Min)`}
                    </Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Min Stake</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>{(node?.min_stake/100000000).toLocaleString()}</Typography.Text>
                <Typography.Text style={{fontSize: "11px !important"}}> U2U</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Max Stake</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>{(node?.max_stake/100000000).toLocaleString()}</Typography.Text>
                <Typography.Text style={{fontSize: "11px !important"}}> U2U</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Staked for Reward</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>{node?.stake_rewarded}</Typography.Text>
                <Typography.Text style={{fontSize: "11px !important"}}> U2U</Typography.Text>
                <p><Typography.Text className={"text-green"}>0% of total</Typography.Text></p>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Staked For No Reward</Typography.Text></td>
              <td>
                <Typography.Text className={styles.textBold}>{node?.stake_not_rewarded}</Typography.Text>
                <Typography.Text style={{fontSize: "11px !important"}}> U2U</Typography.Text>
                <p><Typography.Text className={"text-green"}>0% of total</Typography.Text></p>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Stake for Consensus</Typography.Text></td>
              <td>
                <Typography.Text
                  className={styles.textBold}>{networkStake?.staking_period_duration / 60}</Typography.Text>
                <Typography.Text style={{fontSize: "11px !important"}}> hours</Typography.Text>
                <p><Typography.Text className={"text-green"}>from 00:00 am today to 11:59 pm today UTC</Typography.Text>
                </p>
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default NodeDetail