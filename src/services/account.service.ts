import {ApiBaseService} from "@/services/base.service";

export class AccountService extends ApiBaseService {
  async getAccounts(query: {
    limit: number,
    order: string,
  }) {
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/accounts?limit=${limit}&order=${order}`)
    return data
  }

  async getAccount(accountId: string) {
    const {data} = await this.httpClient.get(`/accounts/${accountId}`)
    return data
  }

  async getCryptoAllowances(query: {
    limit: number,
    order: string,
  }, accountId: string){
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/accounts/${accountId}/allowances/crypto?limit=${limit}&order=${order}`)
    return data
  }


  async getTokenAllowances(query: {
    limit: number,
    order: string,
  }, accountId: string){
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/accounts/${accountId}/allowances/tokens?limit=${limit}&order=${order}`)
    return data
  }

  async getRecentStakingRewards(query: {
    limit: number,
    order: string,
  }, accountId: string){
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/accounts/${accountId}/rewards?limit=${limit}&order=${order}`)
    return data
  }
}


export const accountService = new AccountService();