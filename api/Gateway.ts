import { Request, Response } from 'express'
import PubSubService from './services/PubSubService'

export default {
  async getMessages (request: Request, response: Response) {
    try {
      await PubSubService.connect()
      const subscriptionName: string = request.params.subscriberName
      PubSubService.listenForMessages(subscriptionName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  },

  async registerSubscribedAndTopic (request: Request, response: Response) {
    try {
      await PubSubService.connect()
      const subscriptionName: string = request.body.subscriptionName
      const topicName: string = request.body.topicName
      await PubSubService.createSubscription(subscriptionName, topicName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  },

  async removeSubscribed (request: Request, response: Response) {
    try {
      await PubSubService.connect()
      const subscriptionName: string = request.body.subscriptionName
      await PubSubService.deleteSubscription(subscriptionName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  },

  async removeTopic (request: Request, response: Response) {
    try {
      await PubSubService.connect()
      const topicName: string = request.body.topicName
      await PubSubService.deleteTopic(topicName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  }
}
