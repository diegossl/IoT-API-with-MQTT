import PubSubConfig from '../../config/PubSub'
import { PubSub, Subscription } from '@google-cloud/pubsub'

class PubSubService {
  private client: PubSub | undefined

  public async connect () {
    this.client = await PubSubConfig.getClient()
  }

  public async createSubscription (subscriptionName: string, topicName: string) {
    await this.client?.topic(topicName).createSubscription(subscriptionName)
    console.log(`Subscription ${subscriptionName} created.`)
  }

  public listenForMessages (subscriptionName: string) {
    const subscription: Subscription | undefined = this.client?.subscription(subscriptionName)

    let messageCount = 0
    const messageHandler = (message: any) => {
      console.log(`Received message ${message.id}:`)
      console.log(`\tData: ${message.data}`)
      console.log(`\tAttributes: ${message.attributes}`)
      messageCount += 1

      message.ack()
    }
    subscription?.on('message', messageHandler)

    setTimeout(() => {
      subscription?.removeListener('message', messageHandler)
      console.log(`${messageCount} message(s) received.`)
    }, 60 * 1000)
  }

  public async deleteSubscription (subscriptionName: string) {
    await this.client?.subscription(subscriptionName).delete()
    console.log(`Subscription ${subscriptionName} deleted.`)
  }

  public async deleteTopic (topicName: string) {
    await this.client?.topic(topicName).delete()
    console.log(`Topic ${topicName} deleted.`)
  }
}

export default new PubSubService()
