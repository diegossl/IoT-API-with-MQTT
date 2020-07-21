import mqtt, { MqttClient } from 'mqtt'

class Mqtt {
  private static instance: Mqtt

  private constructor () { }

  public static getInstance (): Mqtt {
    if (!this.instance) {
      this.instance = new Mqtt()
    }
    return this.instance
  }

  public connect (): MqttClient | undefined {
    const urlConnection: string | undefined = process.env.MQTT_TEST
    console.log(urlConnection)
    if (urlConnection) {
      const client: MqttClient = mqtt.connect(urlConnection)

      client.on('error', (err) => {
        console.log(err)
        client.end()
      })

      client.on('connect', () => {
        console.log('MQTT client connected')
      })
      return client
    }
    return undefined
  }
}

export default Mqtt.getInstance()
