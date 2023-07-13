interface NetworkNode {
  description: string,
  file_id: string,
  max_stake: number,
  memo: string,
  min_stake: number,
  node_id: number,
  node_account_id: string,
  node_cert_hash: string,
  public_key: string,
  reward_rate_start: number,
  service_endpoints: {
    ip_address_v4: string,
    port: number
  }[],
  stake: number,
  stake_not_rewarded: number,
  stake_rewarded: number,
  staking_period: {
    from: string,
    to: string
  },
  timestamp: {
    from: string,
    to: string | null
  }
}

interface NetworkStake {
  max_staking_reward_rate_per_hbar: number,
  node_reward_fee_fraction: number,
  stake_total: number,
  staking_period: {
    from: string,
    to: string
  },
  staking_period_duration: number,
  staking_periods_stored: number,
  staking_reward_fee_fraction: number,
  staking_reward_rate: number,
  staking_start_threshold: number
}


