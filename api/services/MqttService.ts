import MqttConfig from '../../config/mqtt'
import { MqttClient } from 'mqtt'

class MqttService {
  private client: MqttClient | undefined

  public constructor () {
    this.client = MqttConfig.connect()
  }

  private validateClient (): boolean {
    if (this.client) {
      return true
    }
    return false
  }

  public addSubscriber (topic: string | string[]): boolean {
    if (this.validateClient()) {
      this.client?.subscribe(topic)
      return true
    }
    return false
  }

  public removeSubscriber (topic: string | string[]): boolean {
    if (this.validateClient()) {
      this.client?.unsubscribe(topic)
      return true
    }
    return false
  }

  public getMessage () {
    if (this.validateClient()) {
      this.client?.on('message', (topic, message) => {
        console.log('Message received')
        console.log(`Topic: ${topic}`)
        console.log(`Message: ${message.toString()}`)
      })
    }
  }
}

export default new MqttService()
