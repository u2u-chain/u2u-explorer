import {Card, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import Image from "next/image";
import arrowOne from "@/assets/images/arrow.svg"
import arrowTwo from "@/assets/images/arrow-b.svg"
import styles from "./CryptoTransfers.module.css"

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
      <Typography.Text >
        {text}
      </Typography.Text>
    )
  },
  {
    title: 'Content',
    dataIndex: 'content',
    render: (content, _) => (
      <Typography.Text
        style={{
          display: "flex",
          alignItems: "center"
        }}
        className={styles.text}> {content.split(',')[0]}
        <Image className={styles.iconArrow} src={arrowOne} alt="arrow"/>
          {content.split(',')[1]}
        <Image className={styles.iconArrow} src={arrowTwo} alt="arrow"/>
          {content.split(',')[2]}
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
        <Typography.Text className={"text-size"}>
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
    id: "0.0.3229@1684221379.777571139",
    content: "0.0.3229,0.00000001,0.0.3230",
    time: "2:16:29.9069 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.3229@1684221379.777571139",
    content: "0.0.3229,0.00000001,0.0.3230",
    time: "2:16:29.9069 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.3229@1684221379.777571139",
    content: "0.0.3229,0.00000001,0.0.3230",
    time: "2:16:29.9069 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.3229@1684221379.777571139",
    content: "0.0.3229,0.00000001,0.0.3230",
    time: "2:16:29.9069 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.3229@1684221379.777571139",
    content: "0.0.3229,0.00000001,0.0.3230",
    time: "2:16:29.9069 PM May 16, 2023, GMT +7"
  }, {
    id: "0.0.3229@1684221379.777571139",
    content: "0.0.3229,0.00000001,0.0.3230",
    time: "2:16:29.9069 PM May 16, 2023, GMT +7"
  },
];

const CryptoTransfers = () => {
  return (
    <Card title={"Crypto Transfers"}>
      <Table
        columns={columns}
        dataSource={data as any}
        scroll={{ x: 992 }}
        pagination={{
          pageSize: 5,
        }}
      />
    </Card>
  )
}
export default CryptoTransfers