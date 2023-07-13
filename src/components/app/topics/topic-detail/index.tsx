import {Table, Typography, Card} from "antd";
import {ColumnsType} from "antd/lib/table";
import {useRouter} from "next/router";
import {useState} from "react";
import {usePausedContinue} from "@/hooks/usePausedContinue";
import {topicService} from "@/services/topic.service";
import {utils} from "@/utils";
import PausedContinueButton from "@/components/shared/PausedContinueButton";

const columns: ColumnsType<TopicMessages> = [
  {
    title: 'Sequence #',
    render: (_, param) => (
      <Typography.Text>
        {param.sequence_number}
      </Typography.Text>
    )
  },
  {
    title: 'Time',
    render: (_, param) => (
      <Typography.Text className={"text-size"}>
        {(utils.formatDate(param.consensus_timestamp))}
      </Typography.Text>
    )
  },
  {
    title: 'Message',
    render: (_, param) => (
      <Typography.Text
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          maxWidth: "500px",
          textOverflow: "ellipsis",
          display: "inline-block",
        }}
      >
        {atob(param.message)}
      </Typography.Text>
    )
  },
];

const TopicDetail = () => {
  const router = useRouter()
  const [topicMessages, setTopicMessages] = useState<TopicMessages[]>([])

  const pageSize = 15
  const topicId = router.query.topicId as string

  const getTopicMessages = async () => {
    try {
      const query = {
        limit: pageSize,
        order: "desc",
        topicId: topicId
      }
      const res: any = await topicService.getTopicMessages(query)
      setTopicMessages(res.messages)
    } catch (e: any) {
      return
    }
  }

  const [{loading, paused}, {handleToggle}] = usePausedContinue({onGetData: getTopicMessages, dependency: topicId})

  return (
    <Card
      title={<span>Messages for Topic <span className={"text-green"}>{topicId}</span></span>}
      extra={
        <PausedContinueButton paused={paused} onToggle={handleToggle}/>
      }
    >
      <Table
        dataSource={topicMessages as any}
        columns={columns}
        scroll={{ x: 992 }}
        pagination={{
          pageSize
        }}
        onRow={(param) => ({
          onClick: () => router.push(`/transactions/${param.consensus_timestamp}`),
        })}
        loading={loading}
      />
    </Card>
  )
}

export default TopicDetail
