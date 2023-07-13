interface Contract{
  "admin_key": string| null,
  "auto_renew_account": any,
  "auto_renew_period": number,
  "contract_id": string,
  "created_timestamp": string,
  "deleted": boolean,
  "evm_address": string,
  "expiration_timestamp": string,
  "file_id": string,
  "max_automatic_token_associations": number,
  "memo": string,
  "obtainer_id": string | null,
  "permanent_removal": any,
  "proxy_account_id": string | null,
  runtime_bytecode: string,
  bytecode: string,
  "timestamp": {
    "from": string,
    "to": string | null
  }
}

interface RecentContract {
  address: string,
  amount: number,
  bloom: string,
  call_result: string,
  contract_id: string,
  created_contract_ids: any[],
  error_message: any,
  from: string,
  function_parameters: string,
  gas_limit: number,
  gas_used: number,
  timestamp: string,
  to: string,
  hash: string
}