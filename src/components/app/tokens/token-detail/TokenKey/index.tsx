import AppCard from "@/components/shared/AppCard";
import {Col, message, Row, Tooltip, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import styles from "./TokenKey.module.css"

const TokenKey = ({token}: {token: Token}) => {
  const {width} = useWindowSize()
  const isDesktop = width < 992
  return (
    <AppCard
      title={"Token Key"}
    >
      <Row gutter={24}>
        <Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Admin Key</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <div>
                    {
                      token?.admin_key ?
                        <Tooltip title={"Copy to clipboard"}>
                          <Typography.Text
                            onClick={() => {
                              navigator.clipboard.writeText(`${token?.admin_key}`).then(() => {
                                message.success('Copied to clipboard')
                              })
                            }}
                            className={styles.code}>
                            {token?.admin_key.replace(/(.{4})/g, "$1 ")}
                          </Typography.Text>
                        </Tooltip> :
                        <Typography.Text className={"text-gray"}>None</Typography.Text>
                    }
                  </div>
                  <Typography.Text className={token?.admin_key ? "text-green" : "text-gray"}>ED25519</Typography.Text>
                </div>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>KYC Key</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <div>
                    {
                      token?.kyc_key ?
                        <Tooltip title={"Copy to clipboard"}>
                          <Typography.Text
                            onClick={() => {
                              navigator.clipboard.writeText(`${token?.kyc_key}`).then(() => {
                                message.success('Copied to clipboard')
                              })
                            }}
                            className={styles.code}>
                            {token?.kyc_key.replace(/(.{4})/g, "$1 ")}
                          </Typography.Text>
                        </Tooltip> :
                        <Typography.Text className={"text-gray"}>None</Typography.Text>
                    }
                  </div>
                  <Typography.Text className={token?.kyc_key ? "text-green" : "text-gray"}>ED25519</Typography.Text>
                </div>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Freeze Key</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <div>
                    {
                      token?.freeze_key ?
                        <Tooltip title={"Copy to clipboard"}>
                          <Typography.Text
                            onClick={() => {
                              navigator.clipboard.writeText(`${token?.freeze_key}`).then(() => {
                                message.success('Copied to clipboard')
                              })
                            }}
                            className={styles.code}>
                            {token?.freeze_key.replace(/(.{4})/g, "$1 ")}
                          </Typography.Text>
                        </Tooltip> :
                        <Typography.Text className={"text-gray"}>None</Typography.Text>
                    }
                  </div>
                  <Typography.Text className={token?.freeze_key ? "text-green" : "text-gray"}>ED25519</Typography.Text>
                </div>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Wipe Key</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <div>
                    {
                      token?.wipe_key ?
                        <Tooltip title={"Copy to clipboard"}>
                          <Typography.Text
                            onClick={() => {
                              navigator.clipboard.writeText(`${token?.wipe_key}`).then(() => {
                                message.success('Copied to clipboard')
                              })
                            }}
                            className={styles.code}>
                            {token?.wipe_key.replace(/(.{4})/g, "$1 ")}
                          </Typography.Text>
                        </Tooltip> :
                        <Typography.Text className={"text-gray"}>None</Typography.Text>
                    }
                  </div>
                  <Typography.Text className={token?.wipe_key ? "text-green" : "text-gray"}>ED25519</Typography.Text>
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
              <td><Typography.Text>Supply Key</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <div>
                    {
                      token?.supply_key ?
                        <Tooltip title={"Copy to clipboard"}>
                          <Typography.Text
                            onClick={() => {
                              navigator.clipboard.writeText(`${token?.supply_key}`).then(() => {
                                message.success('Copied to clipboard')
                              })
                            }}
                            className={styles.code}>
                            {token?.supply_key.replace(/(.{4})/g, "$1 ")}
                          </Typography.Text>
                        </Tooltip> :
                        <Typography.Text className={"text-gray"}>None</Typography.Text>
                    }
                  </div>
                  <Typography.Text className={token?.supply_key ? "text-green" : "text-gray"}>ED25519</Typography.Text>
                </div>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Fee Schedule Key</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <div>
                    {
                      token?.fee_schedule_key ?
                        <Tooltip title={"Copy to clipboard"}>
                          <Typography.Text
                            onClick={() => {
                              navigator.clipboard.writeText(`${token?.fee_schedule_key}`).then(() => {
                                message.success('Copied to clipboard')
                              })
                            }}
                            className={styles.code}>
                            {token?.fee_schedule_key.replace(/(.{4})/g, "$1 ")}
                          </Typography.Text>
                        </Tooltip> :
                        <Typography.Text className={"text-gray"}>None</Typography.Text>
                    }
                  </div>
                  <Typography.Text className={token?.fee_schedule_key ? "text-green" : "text-gray"}>ED25519</Typography.Text>
                </div>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Pause  Key</Typography.Text></td>
              <td>
                <div className={styles.hash}>
                  <div>
                    {
                      token?.pause_key ?
                        <Tooltip title={"Copy to clipboard"}>
                          <Typography.Text
                            onClick={() => {
                              navigator.clipboard.writeText(`${token?.pause_key}`).then(() => {
                                message.success('Copied to clipboard')
                              })
                            }}
                            className={styles.code}>
                            {token?.pause_key.replace(/(.{4})/g, "$1 ")}
                          </Typography.Text>
                        </Tooltip> :
                        <Typography.Text className={"text-gray"}>None</Typography.Text>
                    }
                  </div>
                  <Typography.Text className={token?.pause_key ? "text-green" : "text-gray"}>ED25519</Typography.Text>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default TokenKey