import { Request, Response } from 'express'
import MqttService from './services/MqttService'

export default {
  getMessage (request: Request, response: Response) {

  },

  registerSubscribed (request: Request, response: Response) {
    try {
      const topic: string | string[] = request.body.topic
      console.log(topic)
      MqttService.addSubscriber(topic)
      return response.status(200).send('Subscriber successfully registered')
    } catch (error) {
      return response.status(500).send('Internal system error')
    }
  },

  removeSubscribed (request: Request, response: Response) {
    try {
      const topic: string | string[] = request.body.topic
      MqttService.removeSubscriber(topic)
      return response.status(200).send('Subscriber removed successfully')
    } catch (error) {
      return response.status(500).send('Internal system error')
    }
  }
}
