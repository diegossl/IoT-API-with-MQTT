import { Request, Response } from 'express'
import SubscriberService from './services/SubscriberService'

export default {
  async getMessages (request: Request, response: Response) {
    try {
      await SubscriberService.connect()
      const subscriptionName: string = request.params.subscriberName
      SubscriberService.listenForMessages(subscriptionName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  },

  async registerSubscribedAndTopic (request: Request, response: Response) {
    try {
      await SubscriberService.connect()
      const subscriptionName: string = request.body.subscriptionName
      const topicName: string = request.body.topicName
      await SubscriberService.createSubscription(subscriptionName, topicName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  },

  async removeSubscribed (request: Request, response: Response) {
    try {
      await SubscriberService.connect()
      const subscriptionName: string = request.body.subscriptionName
      await SubscriberService.deleteSubscription(subscriptionName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  },

  async removeTopic (request: Request, response: Response) {
    try {
      await SubscriberService.connect()
      const topicName: string = request.body.topicName
      await SubscriberService.deleteTopic(topicName)
      return response.status(200).send('OK')
    } catch (error) {
      return response.status(200).send('Internal system error')
    }
  }
}
