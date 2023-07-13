import {Button} from "antd";
import {CaretRightOutlined, PauseOutlined} from "@ant-design/icons";

interface PausedContinueButton {
  paused: boolean | undefined,
  onToggle: any
}

export default function PausedContinueButton({paused, onToggle}: PausedContinueButton){
  return (
    <div className={"d-flex flex-row flex-align"}>
      {/*<Typography.Text className={styles.refreshPaused}>*/}
      {/*  REFRESH PAUSED*/}
      {/*</Typography.Text>*/}
      <Button
        className={"d-flex justify-center flex-align"}
        type={"primary"}
        size={"small"}
        onClick={onToggle}
        icon={
          paused ? <CaretRightOutlined style={{ fontSize: '130%'}}/>
            : <PauseOutlined style={{ fontSize: '110%'}}/>
        }
      />
    </div>
  )
}