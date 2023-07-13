import {Card, message, Tooltip, Typography} from "antd";
import styles from "./BlockDetail.module.css"
import clock from "@/assets/images/clock.svg"
import iIcon from "@/assets/images/icon-i.svg"
import Image from "next/image";
import {utils} from "@/utils";

interface BlockDetailProps {
  block: Block
}

const BlockDetail = ({block}: BlockDetailProps) => {

  return (
    <Card
      title={<span>Block #<span className={"text-green"}>{block?.number}</span></span>}
    >
      <div className={styles.blockTable}>
        <table className={"customTable"}>
          <tbody>
          <tr>
            <td>
              <div className={styles.dFlex}>
                <Tooltip
                  title={"Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block."}>
                  <Image width={22} src={iIcon} alt="time"/>
                </Tooltip>
                <Typography.Text>Block Number:</Typography.Text>
              </div>
            </td>
            <td>
              <div style={{display: "flex"}}>
                <b><Typography.Text>{block?.number} </Typography.Text></b>
                <div className={styles.groupActionBlock}>
                  <Tooltip title={"View previous block"}>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10">
                        <path fill="#20b486" fillRule="evenodd"
                              d="M2.358 5l3.357 3.358a.959.959 0 1 1-1.357 1.357L.502 5.859c-.076-.042-.153-.08-.217-.144A.949.949 0 0 1 .011 5a.949.949 0 0 1 .274-.715c.064-.064.142-.102.217-.145L4.358.285a.959.959 0 1 1 1.357 1.357L2.358 5z"></path>
                      </svg>
                    </div>
                  </Tooltip>
                  <Tooltip title={"View next block"}>
                    <div >
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10">
                        <path fill="#20b486" fillRule="evenodd"
                              d="M5.715 5.715c-.064.064-.141.102-.217.144L1.642 9.715A.959.959 0 1 1 .285 8.358L3.642 5 .285 1.642A.959.959 0 1 1 1.642.285L5.498 4.14c.075.043.153.081.217.145A.949.949 0 0 1 5.989 5a.949.949 0 0 1-.274.715z"></path>
                      </svg>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.dFlex}>
                <Tooltip
                  title={"The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves BNB value."}>
                  <Image width={22} src={iIcon} alt="time"/>
                </Tooltip>
                <Typography.Text>Transaction:</Typography.Text>
              </div>
            </td>
            <td>
              <Typography.Text>{block?.count} transaction</Typography.Text>
              {/*<Typography.Text> and </Typography.Text>*/}
              {/*<Tooltip title={"Click to view Internal Transactions"}><Button className={"text-size"} type={"default"} size={"small"}>122 contract internal transactions</Button></Tooltip>*/}
              {/*<Typography.Text> in this block.</Typography.Text>*/}
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.dFlex}>
                <Tooltip title={"The date and time at which a block is validated."}>
                  <Image width={22} src={iIcon} alt="time"/>
                </Tooltip>
                <Typography.Text>From Timestamp:</Typography.Text>
              </div>
            </td>
            <td>
              <div style={{display: "flex", alignItems: "center", gap: 8}}>
                <Image width={16} src={clock} alt="time"/>
                <Typography.Text className={"text-size"}>{utils.formatDate(block?.timestamp.from)}</Typography.Text>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.dFlex}>
                <Tooltip title={"The date and time at which a block is validated."}>
                  <Image width={22} src={iIcon} alt="time"/>
                </Tooltip>
                <Typography.Text>To Timestamp:</Typography.Text>
              </div>
            </td>
            <td>
              <div style={{display: "flex", alignItems: "center", gap: 8}}>
                <Image width={16} src={clock} alt="time"/>
                <Typography.Text className={"text-size"}>{utils.formatDate(block?.timestamp.to)}</Typography.Text>
              </div>
            </td>
          </tr>

          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"Validator who successfully include the block onto the blockchain."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Validated by:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <Link href={"#"}>*/}
          {/*      <Typography.Text className={"text-green"}>0xb218c5d6af1f979ac42bc68d98a5a0d796c6ab01</Typography.Text>*/}
          {/*    </Link> {""}*/}
          {/*    <Typography.Text>*/}
          {/*      (<b>Validator: Alan Turing</b>)*/}
          {/*    </Typography.Text>*/}
          {/*    <Typography.Text> in 3 secs</Typography.Text>*/}
          {/*  </td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"For each block, the miner is rewarded with a finite amount of BNB on top of the fees paid for all transactions in the block."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Block Reward:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td><Typography.Text><b>0.077948108769764192</b> U2U</Typography.Text> </td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Difficulty:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <Typography.Text>2</Typography.Text>*/}
          {/*  </td>*/}
          {/*</tr>*/}

          <tr>
            <td>
              <div className={styles.dFlex}>
                <Tooltip title={"Total difficulty of the chain until this block."}>
                  <Image width={22} src={iIcon} alt="time"/>
                </Tooltip>
                <Typography.Text>Size:</Typography.Text>
              </div>
            </td>
            <td>
              <Typography.Text>{block?.size} bytes</Typography.Text>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.dFlex}>
                <Tooltip title={"Total difficulty of the chain until this block."}>
                  <Image width={22} src={iIcon} alt="time"/>
                </Tooltip>
                <Typography.Text>Gas Used:</Typography.Text>
              </div>
            </td>
            <td>
              <Typography.Text>{block?.gas_used}</Typography.Text>
            </td>
          </tr>
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"Total gas limit provided by all transactions in the block."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Gas Limit:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <Typography.Text>138,363,668</Typography.Text>*/}
          {/*  </td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"Fees burnt by this block."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Fee Burnt:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <div style={{display: "flex", alignItems:"center", gap: 8}}>*/}
          {/*      <Image width={13} src={flame} alt="flame" />*/}
          {/*      <Typography.Text><b>0.077948108769764192</b> U2U</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"Any data that can be included by the miner in the block."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Extra Data:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <div className={styles.extraData}>*/}
          {/*      Hex: <Typography.Text>0xd883010115846765746888676f312e32302e31856c696e7</Typography.Text> <br/>*/}
          {/*      ExtraVanity :geth@go1.20.1@linux <br/>*/}
          {/*      SignedData : <Typography.Text>0x948e07c611e8a074cd59943fdcb3daf0cf69e25a879fccab</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*</tr>*/}
          <tr>
            <td>
              <div className={styles.dFlex}>
                <Tooltip title={"The hash of the block header of the current block."}>
                  <Image width={22} src={iIcon} alt="time"/>
                </Tooltip>
                <Typography.Text>Hash:</Typography.Text>
              </div>
            </td>
            <td>
              <div className={styles.hash}>
                <div>
                  <Tooltip title={"Copy to clipboard"}>
                    <Typography.Text
                      onClick={() => {
                        navigator.clipboard.writeText(`${block?.hash}`).then(() => {
                          message.success('Copied to clipboard')
                        })
                      }}
                      className={styles.code}>
                      {block?.hash.replace(/(.{4})/g, "$1 ")}
                    </Typography.Text>
                  </Tooltip>
                </div>
                <Typography.Text className={"text-red"}>SHA384</Typography.Text>
              </div>
            </td>
          </tr>
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"The hash of the block from which this block was generated, also known as its parent block."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Parent Hash:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <Link href={"#"}> <Typography.Text className={"text-green"}>0x0300e82da37926940836456ceec627206741ed346e82f81d16ebeb831de49c79</Typography.Text></Link>*/}
          {/*  </td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"The mechanism which Binance Javascript RLP encodes an empty string."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Sha3Uncles:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <Typography.Text>0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347</Typography.Text>*/}
          {/*  </td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <td>*/}
          {/*    <div className={styles.dFlex}>*/}
          {/*      <Tooltip title={"Block nonce is a value used during mining to demonstrate proof of work for a block."}>*/}
          {/*        <Image width={22} src={iIcon} alt="time" />*/}
          {/*      </Tooltip>*/}
          {/*      <Typography.Text>Nonce:</Typography.Text>*/}
          {/*    </div>*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <Typography.Text>0</Typography.Text>*/}
          {/*  </td>*/}
          {/*</tr>*/}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default BlockDetail