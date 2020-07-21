import mqtt, { MqttClient } from 'mqtt'

export default {
  connect (): MqttClient | undefined {
    const urlConnection: string | undefined = process.env.MQTT_TEST
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
