import AppCard from "@/components/shared/AppCard";
import {Col, Row, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import {utils} from "@/utils";

const TokenDetail = ({token}: {token: Token}) => {
  const {width} = useWindowSize()

  const isDesktop = width < 992

  return (
    <AppCard
      title={"Fungible Token"}
      subtitle={{
        id: `${token?.token_id}`,
        name: "Token",
        subKey: "xosbo",
        evmAddress: "0x0000000000000000000000000000000000242f43"
      }}
    >
      <Row gutter={24} >
        <Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Name</Typography.Text></td>
              <td><Typography.Text>{token?.name}</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Symbol</Typography.Text></td>
              <td>
                <Typography.Text>{token?.symbol}</Typography.Text>
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Memo</Typography.Text></td>
              <td><Typography.Text className={"text-gray"}>None</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Expires at</Typography.Text></td>
              <td>
                {token?.expiry_timestamp &&
                    <Typography.Text>
                      {utils.formatDate(token?.expiry_timestamp)}
                    </Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Auto Renew Period</Typography.Text></td>
              <td>
                {token?.auto_renew_period ?
                  <Typography.Text className={"text-gray"}>{token.auto_renew_period}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>Not yet enabled</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Auto Renew Account</Typography.Text></td>
              <td>
                {token?.auto_renew_account ?
                  <Typography.Text className={"text-gray"}>{token.auto_renew_account}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>Not yet enabled</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Freeze Default</Typography.Text></td>
              <td>
                {token?.freeze_default ?
                  <Typography.Text className={"text-green"}>True</Typography.Text> :
                  <Typography.Text className={"text-red"}>False</Typography.Text>

                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Pause Status</Typography.Text></td>
              <td>
                {token?.pause_status ?
                  <Typography.Text>Applicable</Typography.Text> :
                  <Typography.Text className={"text-gray"}>Not applicable</Typography.Text>
                }

              </td>
            </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={24} lg={12} style={{borderTop: isDesktop ? "1px solid var(--border)": ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Treasury Account</Typography.Text></td>
              <td><Typography.Text>{token?.treasury_account_id}</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Created at</Typography.Text></td>
              <td>
                {token?.created_timestamp &&
                    <Typography.Text>
                      {utils.formatDate(token?.created_timestamp)}
                    </Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Modified at</Typography.Text></td>
              <td>
                {token?.modified_timestamp &&
                    <Typography.Text>
                      {utils.formatDate(token?.modified_timestamp)}
                    </Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Total Supply</Typography.Text></td>
              <td><Typography.Text>{token?.total_supply}</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Initial Supply</Typography.Text></td>
              <td><Typography.Text>{token?.initial_supply}</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Max Supply</Typography.Text></td>
              <td><Typography.Text className={"text-gray"}>Infinite</Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Decimals</Typography.Text></td>
              <td><Typography.Text >{token?.decimals}</Typography.Text></td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default TokenDetail