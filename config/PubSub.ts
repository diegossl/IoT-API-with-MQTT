import { PubSub } from '@google-cloud/pubsub'
import GoogleCredentials from '../GoogleCredentials.json'

class PubSubConfig {
  private static pubsub: PubSub

  private constructor () {}

  public static async getClient (): Promise<PubSub | undefined> {
    try {
      if (!this.pubsub) {
        this.pubsub = new PubSub({
          projectId: GoogleCredentials.project_id,
          credentials: GoogleCredentials
        })
      }
      return this.pubsub
    } catch (error) {
      console.log(error)
    }
  }
}

export default PubSubConfig
