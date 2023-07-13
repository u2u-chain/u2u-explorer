import {Card, Typography} from "antd";
import styles from "./MessageSubmitted.module.css"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {topicService} from "@/services/topic.service";

const MessageSubmitted = () => {
  const router = useRouter()
  const [messageSubmitted, setMessageSubmitted] = useState<TopicMessages | undefined>()

  const timestamp = router.query.transactionId as string

  useEffect(() => {
    const getMessageSubmitted = async () => {
      try {
        const res: any = await topicService.getMessageSubmitted(timestamp)
        setMessageSubmitted(res)
      } catch (e: any) {
        return
      }
    }
    if (timestamp) getMessageSubmitted()
  }, [timestamp])

  return (
    <>
      {
        messageSubmitted ?
          <Card
            title={"Message Submitted"}
          >
            <div className={styles.wrapper}>
              <div>
                <Typography.Text className={styles.title}>Sequence Number</Typography.Text>
                <Typography.Text className={styles.content}>{messageSubmitted?.sequence_number}</Typography.Text>
              </div>

              <div>
                <Typography.Text className={styles.title}>Message</Typography.Text>
                <div className={styles.message}>
                  <Typography.Text className={"text-gray"}>None</Typography.Text>
                  <Typography.Text>{messageSubmitted?.message}</Typography.Text>
                </div>
              </div>

              <div>
                <Typography.Text className={styles.title}>Running Hash Version</Typography.Text>
                <Typography.Text style={{fontFamily: "var(--font_code)"}}  className={styles.content}>{messageSubmitted?.running_hash_version}</Typography.Text>
              </div>

              <div>
                <Typography.Text className={styles.title}>Running Hash</Typography.Text>
                <Typography.Text
                  style={{fontFamily: "var(--font_code)"}}
                  className={styles.content}>{messageSubmitted?.running_hash}</Typography.Text>
              </div>
            </div>
          </Card>
          :
          null
      }</>

  )
}

export default MessageSubmitted