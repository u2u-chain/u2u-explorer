import {ApiBaseService} from "@/services/base.service";

export class TopicService extends ApiBaseService {
  async getTopicMessages(query: {
    limit: number,
    order: string,
    topicId: string
  }) {
    const {limit, order, topicId} = query
    const {data} = await this.httpClient.get(`/topics/${topicId}/messages?limit=${limit}&order=${order}`)
    return data
  }

  async getMessageSubmitted(timestamp: string) {
    const {data} = await this.httpClient.get(`/topics/messages/${timestamp}`)
    return data
  }
}


export const topicService = new TopicService();