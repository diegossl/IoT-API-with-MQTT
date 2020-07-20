import mqtt, { MqttClient } from 'mqtt'

export default {
  connect (): MqttClient {
    const client: MqttClient = mqtt.connect(process.env.MQTT_TEST)

    client.on('error', (err) => {
      console.log(err)
      client.end()
    })

    client.on('connect', () => {
      console.log('MQTT client connected')
    })

    return client
  }
}
