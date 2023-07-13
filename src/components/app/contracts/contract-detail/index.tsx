import AppCard from "@/components/shared/AppCard";
import {Col, Row, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {contractService} from "@/services/contract.service";
import {utils} from "@/utils";
import styles from "./ContractDetail.module.css"

const ContractDetail = () => {
  const router = useRouter()
  const {width} = useWindowSize()
  const [contract, setContract] = useState<Contract | undefined>()

  const isDesktop = width < 992
  const contractId = router.query.contractId as string

  useEffect(() => {
    const getContract = async () => {
      try {
        const res: any = await contractService.getContract(contractId)
        setContract(res)
      } catch (e: any) {
        return
      }
    }
    if (contractId) getContract()
  }, [contractId])

  return (
    <AppCard
      title={"Contract"}
      subtitle={{
        id: `${contract?.contract_id}`,
        name: "Contract",
        subKey: "mzhhw",
        evmAddress: `${contract?.evm_address}`
      }}
    >
      {!contract && <div className={styles.notFound}>
          <Typography.Title>Contract with ID {contractId} was not found</Typography.Title>
      </div>}
      <Row gutter={24}>
        <Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Balance</Typography.Text></td>
              <td>
                {contract ?
                  <Typography.Text> {utils.convertAmount(0)} U2U
                    {/*<Typography.Text style={{fontSize: 11, color: "var(--green)"}}>$2,398.0984</Typography.Text>*/}
                  </Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Admin Key</Typography.Text></td>
              <td>
                {contract?.admin_key ?
                  <Typography.Text>{contract?.admin_key}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Memo</Typography.Text></td>
              <td>
                {contract?.memo ?
                  <Typography.Text>{contract?.memo}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Create Transaction</Typography.Text></td>
              <td>
                {
                  contract?.contract_id && contract?.created_timestamp ?
                    <Typography.Text>{contract?.contract_id}@{contract?.created_timestamp}</Typography.Text> :
                    <Typography.Text className={"text-gray"}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Expires at</Typography.Text></td>
              <td><Typography.Text>
                {contract?.expiration_timestamp ?
                  <Typography.Text>{utils.formatDate(contract?.expiration_timestamp)}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </Typography.Text></td>
            </tr>
            <tr>
              <td><Typography.Text>Auto Renew Period</Typography.Text></td>
              <td>
                {contract?.auto_renew_period ?
                  <Typography.Text><b>90</b> days</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}

              </td>
            </tr>
            <tr>
              <td><Typography.Text>Auto Renew Account</Typography.Text></td>
              <td>
                {contract?.auto_renew_account ?
                  <Typography.Text >{contract?.auto_renew_account}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Max. Auto. Association</Typography.Text></td>
              <td>
                {contract?.max_automatic_token_associations !== undefined ?
                  <Typography.Text >{contract?.max_automatic_token_associations}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Runtime Bytecode</Typography.Text></td>
              <td>
                <div
                  style={{
                    maxHeight: 100,
                    overflowY: "auto"
                  }}
                >
                  {contract?.runtime_bytecode ?
                    <Typography.Text >{contract?.runtime_bytecode}</Typography.Text> :
                    <Typography.Text className={"text-gray"}>None</Typography.Text>}
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
              <td><Typography.Text>Obtainer</Typography.Text></td>
              <td>
                 {contract?.obtainer_id ?
                    <Typography.Text >{contract?.obtainer_id}</Typography.Text> :
                    <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Proxy Account</Typography.Text></td>
              <td>
                 {contract?.proxy_account_id ?
                    <Typography.Text >{contract?.proxy_account_id}</Typography.Text> :
                    <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Valid from</Typography.Text></td>
              <td>
                 {contract?.timestamp.from ?
                    <Typography.Text >{utils.formatDate(contract?.timestamp.from)}</Typography.Text> :
                    <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Valid until</Typography.Text></td>
              <td>
                {contract?.timestamp.to ?
                  <Typography.Text >{utils.formatDate(contract?.timestamp.to)}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>File</Typography.Text></td>
              <td>
                {contract?.file_id ?
                  <Typography.Text >{contract?.file_id}</Typography.Text> :
                  <Typography.Text className={"text-gray"}>None</Typography.Text>}
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>

    </AppCard>
  )
}

export default ContractDetail