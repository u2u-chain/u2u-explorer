import {ApiBaseService} from "@/services/base.service";

export class TransactionService extends ApiBaseService {
  async getTransactions(query?: {
    limit: number,
    order?: string,
    transactionType?: string
    timestamp?: string,
    result?: string,
    optionalFiltering?: string
  }, linksNext?: any) {
    const {limit, order, transactionType, timestamp, result, optionalFiltering} = query
    const transactionTypeValue = transactionType ? `&transactiontype=${transactionType}` : '';
    const timestampValue = timestamp ? `&timestamp=${optionalFiltering}:${timestamp}` : '';
    const resultValue = result ? `&result=${result}` : '';
    let url = ""
    if (!linksNext) {
      url = `/transactions?limit=${limit}&order=${order}${transactionTypeValue}${timestampValue}${resultValue}`
    } else {
      url = linksNext.split("/api/v1")[1]
    }
    const {data} = await this.httpClient.get(url)
    return data
  }

  async getTransaction(timestamp: string) {
    const {data} = await this.httpClient.get(`/transactions?timestamp=${timestamp}`)
    return data
  }

}


export const transactionService = new TransactionService();