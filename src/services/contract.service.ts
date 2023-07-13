import {ApiBaseService} from "@/services/base.service";

export class ContractsService extends ApiBaseService {

  async getContracts(query: {
    limit: number,
    order: string,
  }) {
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/contracts?limit=${limit}&order=${order}`)
    return data
  }

  async getContract(contractId: string) {
    const {data} = await this.httpClient.get(`/contracts/${contractId}`)
    return data
  }

  async getRecentContracts(query: {
    limit: number,
    order: string,
  }) {
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/contracts/results?limit=${limit}&order=${order}`)
    return data
  }

}


export const contractService = new ContractsService();