import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";

interface CryptoTransfers {
  id: string;
  content: string;
  time: string;
}

const columns: ColumnsType<CryptoTransfers> = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (text, _) => (
      <Typography.Text>
        {text}
      </Typography.Text>
    )
  },
  {
    title: 'Content',
    dataIndex: 'content',
    render: (text, _) => (
      <Typography.Text>
        Contract ID: <Typography.Text className={'text-green'}>{text}</Typography.Text>
      </Typography.Text>
    )
  },
  {
    title: 'Time',
    dataIndex: 'time',
    render: (time, _) => {
      const regex = /(\d+:\d+:)(\d+\.\d+ [APM]+)(.+)/;
      const [, firstString, secondString, thirdString] = time.match(regex);
      
      return (
        <Typography.Text className={'text-size'}>
          {firstString}
          <Typography.Text className={"text-size text-gray"}>
            {secondString} {" "}
          </Typography.Text>
          {thirdString}
        </Typography.Text>
      )
    }
  },
];

const data: CryptoTransfers[] = [
  {
    id: "0.0.1425322@1684225894.452026639",
    content: "0.0.359",
    time: "3:31:59.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1425322@1684225894.452026639",
    content: "0.0.359",
    time: "3:31:59.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1425322@1684225894.452026639",
    content: "0.0.359",
    time: "3:31:59.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1425322@1684225894.452026639",
    content: "0.0.359",
    time: "3:31:59.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1425322@1684225894.452026639",
    content: "0.0.359",
    time: "3:31:59.3813 PM May 16, 2023, GMT +7"
  }
];

const SmartContractCalls = () => {
  return (
    <Card title={"Smart Contract Calls"}>
      <Table
        columns={columns}
        dataSource={data as any}
        scroll={{ x: 514 }}
        pagination={{
          pageSize: 5,
        }}
      />
    </Card>
  )
}
export default SmartContractCalls