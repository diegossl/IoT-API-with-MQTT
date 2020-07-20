import MqttConfig from '../../config/mqtt'
import { MqttClient } from 'mqtt'

class MqttService {
  private client: MqttClient

  constructor () {
    this.client = MqttConfig.connect()
  }

  addSubscriber (topic: string | string[]) {
    this.client.subscribe(topic)
  }

  removeSubscriber (topic: string | string[]) {
    this.client.unsubscribe(topic)
  }

  getMessage () {
    this.client.on('message', (topic, message) => {
      console.log('Message received')
      console.log(`Topic: ${topic}`)
      console.log(`Message: ${message.toString()}`)
    })
  }
}

export default new MqttService()
