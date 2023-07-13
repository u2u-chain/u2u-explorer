import AppCard from "@/components/shared/AppCard";
import {Typography} from "antd";
import styles from "./Transfers.module.css"
import Link from "next/link";
import {utils} from "@/utils";

interface TransfersProps {
  transaction: Transaction,
}

const Transfers = ({transaction}: TransfersProps) => {
  let transfers = transaction?.transfers.filter((transfer: any, index: number) => {
    return index !== transaction?.transfers.length - 1
  })
  return (
    <AppCard
      title={"Transfers"}
    >

      <div className={styles.transferTable}>
        <Typography.Text className={styles.title}>
          U2U Transfer
        </Typography.Text>

          <div className={styles.tableTransfer}>
            {
              transaction?.transfers.length > 0 && transaction ? <table className={"customTable"}>
                  <tbody>
                  <tr>
                    <td><Typography.Text> Account</Typography.Text></td>
                    <td><Typography.Text>U2U Amount</Typography.Text></td>
                    <td><Typography.Text>Account</Typography.Text></td>
                  </tr>
                  <tr>
                    <td><Link href={"/accounts/0.0.3229"}><Typography.Text className="text-green"> {
                      transaction?.transfers.map((transfer: any, index) => {
                        return (
                          index === transaction.transfers.length - 1 && (
                            <Typography.Text className={"text-green"}>{transfer?.account}</Typography.Text>
                          )
                        )
                      })
                    }</Typography.Text></Link></td>
                    <td>
                      {
                        transaction?.transfers.map((transfer: any, index) => {
                          return (
                            index === transaction.transfers.length - 1 && (
                              <Typography.Text
                                className="text-red">{utils.convertAmount(transfer?.amount)} U2U</Typography.Text>
                            )
                          )
                        })
                      }

                    </td>
                    <td>
                      <ul className={styles.transfer}>
                        {
                          transfers.map((transfer: {
                            account: string,
                            amount: number,
                            is_approval: boolean
                          }, index: number) => (
                            <li key={index}>
                              <Link href={"/accounts/0.0.3229"}>
                                <Typography.Text
                                  className="text-green"
                                  style={{marginRight: 26}}>
                                  {/*{utils.convertAmount(transfer.amount)}*/}
                                  {transfer.account}
                                </Typography.Text></Link>
                              <Typography.Text>
                                {utils.convertAmount(transfer.amount)} U2U
                              </Typography.Text>
                              <Typography.Text style={{fontSize: "11.5px !important", margin: "0 18px"}}
                                               className={"text-green"}>
                                $0.0015
                              </Typography.Text>
                              <Typography.Text style={{fontSize: "11.5px !important"}}>
                                Transfer
                              </Typography.Text>
                            </li>
                          ))
                        }
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table> :
                <Typography.Text className={"text-gray"}>
                  None
                </Typography.Text>
            }
          </div>
      </div>


      <div style={{marginTop: 25}} className={styles.transferTable}>
        <Typography.Text className={styles.title}>
          NFT Transfer
        </Typography.Text>
        <div>
          <Typography.Text className={"text-gray"}>
            None
          </Typography.Text>
        </div>
      </div>

      <div style={{marginTop: 25}} className={styles.transferTable}>
        <Typography.Text className={styles.title}>
          Token Transfer
        </Typography.Text>
       <div>
         <Typography.Text className={"text-gray"}>
           None
         </Typography.Text>
       </div>
      </div>
    </AppCard>
  )
}

export default Transfers