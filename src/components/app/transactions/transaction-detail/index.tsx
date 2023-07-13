import AppCard from "@/components/shared/AppCard";
import {Col, message, Row, Tooltip, Typography} from "antd";
import {useWindowSize} from "@/hooks/useWindowSize";
import Link from "next/link";
import {useEffect, useState} from "react";
import {utils} from "@/utils";
import {blockService} from "@/services/block.service";
import {TransactionTypes} from "@/configs/apps.config";
import styles from "./TransactionDetail.module.css"

interface TransactionDetailProps {
  transaction: Transaction,
  status: boolean
}

const TransactionDetail = ({transaction, status}: TransactionDetailProps) => {
  const {width} = useWindowSize()
  const [block, setBlock] = useState<Block | undefined>()
  const isDesktop = width < 992

  useEffect(() => {
    const getBlock = async () => {
      try {
        const query = {
          limit: 1,
          order: "asc",
        }
        const consensusTimestamp = transaction?.consensus_timestamp
        const res: any = await blockService.getBlockByTimestamp(query, consensusTimestamp)
        setBlock(res.blocks[0])
      } catch (e: any) {
        return
      }
    }

    if (transaction) {
      getBlock()
    }
  }, [transaction])

  const type = TransactionTypes.map((item) => {
    if(transaction?.name === item.value) return item.name })

  return (
    <AppCard
      title={transaction ? `Transaction ${transaction?.node}@${transaction?.valid_start_timestamp}` : 'Transaction'}
      status={status ? 'Success' : "Failed"}
    >
      <Row gutter={24}>
        <Col xs={24} lg={12} style={{borderRight: isDesktop ? "" : "1px solid var(--border)"}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Type</Typography.Text></td>
              <td>
                {transaction?.name ?
                  <Typography.Text style={{textTransform: "uppercase"}}>{type}</Typography.Text> :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>}
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Consensus at</Typography.Text></td>
              <td>
                {transaction?.consensus_timestamp ?
                  <Typography>
                    {(utils.formatDate(transaction?.consensus_timestamp))}
                  </Typography> :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Block</Typography.Text></td>
              <td>
                {block?.number ?
                  <Link href={"/"}><Typography.Text className={"text-green"}>{block?.number}</Typography.Text></Link> :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Node Submitted To</Typography.Text></td>
              <td>
                {transaction?.node ?
                  <Typography.Text className={"text-red"}>{transaction?.node} {""}
                    {/*<Typography.Text style={{color: "var(--green)", fontSize: "11.5px !important"}}>Hosted for Standard*/}
                    {/*  Bank | Warsaw, Poland</Typography.Text>*/}
                  </Typography.Text> :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Memo</Typography.Text></td>
              <td>{
                transaction?.memo_base64 ?
                  <Typography.Text>{atob(transaction?.memo_base64)}</Typography.Text> :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>
              }</td>
            </tr>
            <tr>
              <td><Typography.Text>Transaction Hash</Typography.Text></td>
              <td>
                {
                  <div style={{display: "flex", gap: 8}}>
                    <Tooltip title={"Copy to clipboard"}>
                      <Typography.Text className={styles.code} onClick={() => {
                        navigator.clipboard.writeText(`${block?.hash}`).then(() => {
                          message.success('Copied to clipboard')
                        })
                      }}>
                        7d85 45b9 dcd6 ab08 780e ad5e 82c0 f4da 4c10 781f 35c9 d357 e5bb 8088 8f48 0659 e6aa 1a32 a3f7
                        38da 06a8 afd7 a0b3 12df
                      </Typography.Text>
                    </Tooltip>
                  </div>
                }
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={24} lg={12} style={{borderTop: isDesktop ? "1px solid var(--border)" : ""}}>
          <table className={"customTable"}>
            <tbody>
            <tr>
              <td><Typography.Text>Payer Account</Typography.Text></td>
              <td>
                {
                  transaction?.transfers.length > 0 ?
                    transaction?.transfers.map((transfer: {
                      account: string,
                      amount: number,
                      is_approval: boolean
                    }, index: number) => (
                      <>
                        <Link key={index} href={"/accounts/0.0.3229"}>
                          <Typography.Text className={"text-green"}>{transfer.account} </Typography.Text>
                        </Link>
                        {index !== transaction.transfers.length - 1 && (
                          <Typography.Text className={"text-green"}>, </Typography.Text>
                        )}
                      </>
                    )) :
                    <Typography.Text className={'text-gray'}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Charged Fee</Typography.Text></td>
              <td>
                {transaction?.charged_tx_fee !== undefined ?
                  <Typography.Text>{utils.convertAmount(transaction?.charged_tx_fee)} U2U {""}
                    {/*<Typography.Text style={{color: "var(--green)", fontSize: "11.5px !important"}}>$0.0015</Typography.Text>*/}
                  </Typography.Text> :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Max fee</Typography.Text></td>
              <td>
                {

                  transaction?.charged_tx_fee !== undefined ?
                    <Typography.Text>{utils.convertAmount(transaction?.max_fee)} U2U {""}
                      {/*<Typography.Text style={{color: "var(--green)", fontSize: "11.5px !important"}}>$0.0015</Typography.Text>*/}
                    </Typography.Text> :
                    <Typography.Text className={'text-gray'}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Valid Duration</Typography.Text></td>
              <td>
                {transaction?.valid_duration_seconds ?
                  <Typography.Text>{Number(transaction?.valid_duration_seconds )/ 60} min</Typography.Text>
                  :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>
                }

              </td>
            </tr>
            <tr>
              <td>
                <Typography.Text>Nonce</Typography.Text>
              </td>
              <td>

                {transaction?.nonce ?
                  <Typography.Text>{transaction?.nonce}</Typography.Text>
                  :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>
                }
              </td>
            </tr>
            <tr>
              <td><Typography.Text>Scheduled</Typography.Text></td>
              <td>
                {transaction?.scheduled !== undefined ?
                  transaction?.scheduled ? <Typography.Text className={"text-green"}>True</Typography.Text> :
                    <Typography.Text className={"text-red"}>False</Typography.Text> :
                  <Typography.Text className={'text-gray'}>None</Typography.Text>}
              </td>
            </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </AppCard>
  )
}

export default TransactionDetail
