interface Account {
  account: string,
  alias: any,
  auto_renew_period: number,
  balance: {
    balance: number,
    timestamp: string,
    tokens: any[]
  },
  created_timestamp: string,
  decline_reward: boolean,
  deleted: boolean,
  ethereum_nonce: number,
  evm_address: string,
  expiry_timestamp: string,
  key: {
    _type: string,
    key: string
  },
  max_automatic_token_associations: number,
  memo: string,
  pending_reward: number,
  receiver_sig_required: boolean,
  staked_account_id: string | null,
  staked_node_id: string | null,
  stake_period_start: string | null
}