interface Block {
  count: number,
  hapi_version: string,
  hash: string,
  name: string,
  number: number,
  previous_hash: string,
  size: number,
  timestamp: {
    from: string,
    to: string
  },
  gas_used: number,
  logs_bloom: string
}