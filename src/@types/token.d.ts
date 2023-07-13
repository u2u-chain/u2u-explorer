interface Token {
  admin_key: string,
  auto_renew_account: any,
  auto_renew_period: any,
  created_timestamp: string,
  decimals: number,
  expiry_timestamp: string,
  freeze_default: any,
  fee_schedule_key: string,
  freeze_key: string,
  initial_supply: any,
  kyc_key: string,
  modified_timestamp: string,
  name: string,
  supply_key: string,
  symbol: any,
  token_id: string,
  total_supply: any,
  treasury_account_id: string,
  type: string,
  wipe_key: string,
  custom_fees: any,
  pause_key: string,
  pause_status: boolean
}

interface NFTToken {
  account_id: string,
  created_timestamp: string,
  deleted: boolean,
  metadata: any,
  modified_timestamp: string,
  serial_number: string,
  token_id: string
}