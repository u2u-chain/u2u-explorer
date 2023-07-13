interface Transaction {
  bytes: any,
  charged_tx_fee: number,
  consensus_timestamp: string,
  entity_id: any,
  max_fee: string,
  memo_base64: string,
  name: string,
  node: string,
  nonce: number,
  parent_consensus_timestamp: any,
  result: string,
  scheduled: boolean,
  staking_reward_transfers: any[],
  transaction_hash: string,
  transaction_id: string,
  transfers: {
    account: string,
    amount: number,
    is_approval: boolean
  }[],
  valid_duration_seconds: string,
  valid_start_timestamp: string
}