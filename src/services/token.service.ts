import {ApiBaseService} from "@/services/base.service";

export class TokenService extends ApiBaseService {
  async getTokens(query: {
    limit: number,
    order: string,
    type: string,
  }) {
    const {limit, order, type} = query
    const {data} = await this.httpClient.get(`/tokens?limit=${limit}&order=${order}&type=${type}`)
    return data
  }

  async getToken(tokenId) {
    const {data} = await this.httpClient.get(`/tokens/${tokenId}`)
    return data
  }

  async getNFTToken(query: {
    limit: number,
    order: string,
    serialNumber?: string,
    accountId?: string,
  },tokenId) {
    const {limit, order, serialNumber, accountId} = query
    const serialNumberValue = serialNumber ? `&serialnumber=${serialNumber}` : '';
    const accountIdValue = accountId ? `&account.id=${accountId}` : '';
    const {data} = await this.httpClient.get(`/tokens/${tokenId}/nfts?limit=${limit}&order=${order}${serialNumberValue}${accountIdValue}`)
    return data
  }
}


export const tokenService = new TokenService();