import {ApiBaseService} from "@/services/base.service";

export class BlockService extends ApiBaseService {
  async getBlocks(query: {
    limit: number,
    order: string,
  }) {
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/blocks?limit=${limit}&order=${order}`)
    return data
  }

  async getBlockByTimestamp(query: {
    limit: number,
    order: string,
  }, timestamp: string) {
    const {limit, order} = query
    const {data} = await this.httpClient.get(`/blocks?limit=${limit}&order=${order}&timestamp=gte:${timestamp}`)
    return data
  }

  async getBlockByNumber(number: string) {
    const {data} = await this.httpClient.get(`/blocks/${number}`)
    return data
  }
}


export const blockService = new BlockService();