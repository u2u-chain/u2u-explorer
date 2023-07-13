
import {ApiBaseService} from "@/services/base.service";

export class NetworkService extends ApiBaseService {
  async getNetworkNodes(query: {
    limit: number,
  }) {
    const {limit} = query
    const {data} = await this.httpClient.get(`network/nodes?limit=${limit}`)
    return data
  }

  async getNetworkStake() {
    const {data} = await this.httpClient.get('network/stake')
    return data
  }
}


export const nodeService = new NetworkService();