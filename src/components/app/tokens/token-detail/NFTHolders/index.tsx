import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {tokenService} from "@/services/token.service";
import {utils} from "@/utils";

const columns: ColumnsType<NFTToken> = [
  {
    title: 'Serial #',
    render: (_, param) => (
      <Typography.Text className={"text-green"}>{param.serial_number}</Typography.Text>
    )
  },
  {
    title: 'Account ID',
    render: (_, param) => (
      <Link href={`/accounts/${param.account_id}`}><Typography.Text
        className={"text-green"}>{param.account_id}</Typography.Text></Link>
    )
  },
  {
    title: 'Deleted',
    render: (_, param) => {
      return (
        param.deleted ?
          <Typography.Text className={"text-green"}>True</Typography.Text> :
          <Typography.Text className={"text-red"}>False</Typography.Text>
      )
    }
  },
  {
    title: 'Modification Time',
    dataIndex: 'modificationTime',
    render: (_, param) => (
      <Typography.Text>{utils.formatDate(param.modified_timestamp)}</Typography.Text>
    )
  },
  {
    title: 'Metadata',
    dataIndex: 'metaData',
    render:(_, param) => (
      <Typography.Text className={"text-gray"}>{param.metadata}</Typography.Text>
    )
  },
];

const NFTHolders = () => {
  const router = useRouter()
  const tokenId = router.query.tokenId as string
  const [ntfTokens, setNftTokens] = useState<NFTToken[]>([])

  const pageSize = 10
  useEffect(() => {
    const getNftToken = async () => {
      try {
        const query = {
          limit: pageSize,
          order: "desc",
        }
        const res: any = await tokenService.getNFTToken(query, tokenId)
        setNftTokens(res.nfts)
      } catch (e: any) {
        return
      }
    }
    if (tokenId) getNftToken()

  }, [tokenId])

  return (
    <Card
      title={"NFT Holders"}
    >
      <Table
        dataSource={ntfTokens as any}
        columns={columns}
        pagination={{
          pageSize: pageSize,
        }}
        scroll={{ x: 992 }}
      />
    </Card>
  )
}

export default NFTHolders