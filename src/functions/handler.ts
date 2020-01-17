import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import { Update } from 'node-telegram-bot-api'
import axios from 'axios'


const { BASE_URL } = process.env

export const messageEcho = async (ev: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const update: Update = JSON.parse(ev.body)
  const { message } = update

  try {
    const { statusCode, data } = await axios.get(BASE_URL + 'sendMessage', {
      params: {
        chat_id: message.chat.id, // eslint-disable-line @typescript-eslint/camelcase
        text: message.text,
      },
    })
    return {
      statusCode,
      body: JSON.stringify({ data }),
    }
  } catch (e) {
    return {
      statusCode: e.statusCode,
      body: JSON.stringify({ e }),
    }
  }
}
