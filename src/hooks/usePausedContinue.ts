import {useEffect, useMemo, useState} from "react";

interface usePausedContinueProps {
  onGetData: any,
  dependency?: any
}

export function usePausedContinue({onGetData, dependency}: usePausedContinueProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [paused, setPaused] = useState<boolean | undefined>(false)

  useEffect(() => {
    if (!paused) {
      setLoading(true)
      onGetData().finally(() => {
        setLoading(false)
      })
    }
    const interval = setInterval(() => {
      if (!paused) {
        onGetData()
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, dependency])

  const state = useMemo(() => {
    return {
      paused,
      loading,
    }
  }, [paused, loading])

  const handlers = useMemo(() => {
    return {
      handleToggle: () => {
        setPaused((prevState) => !prevState)
      },
      handlePaused: () => {
        setPaused(() => true)
      }
    }
  }, [])

  return [state, handlers] as const
}