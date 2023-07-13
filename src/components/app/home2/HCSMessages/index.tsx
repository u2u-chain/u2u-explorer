import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";

interface CryptoTransfers {
  id: string;
  memo: string;
  time: string;
}

const columns: ColumnsType<CryptoTransfers> = [
  {
    title: 'Topic ID',
    dataIndex: 'id',
    render: (text, _) => (
      <Typography.Text>
        {text}
      </Typography.Text>
    )
  },
  {
    title: 'Memo',
    dataIndex: 'memo',
    render: (text, _) => (
      <Typography.Text className={"text-gray"}>
        {text}
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
        <Typography.Text className={" text-size"}>
          {firstString}
          <Typography.Text className={"text-gray text-size"}>
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
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.1693742",
    memo: "None",
    time: "3:31:50.3813 PM May 16, 2023, GMT +7"
  },
];

const HCSMessages = () => {
  return (
    <Card title={"HCS Messages"}>
      <Table
        columns={columns}
        dataSource={data as any}
        scroll={{ x: 514 }}
        pagination={{
          pageSize: 7,
        }}
      />
    </Card>
  )
}
export default HCSMessages