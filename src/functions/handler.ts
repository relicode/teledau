import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import { Update } from 'node-telegram-bot-api'
import axios from 'axios'

const PUNK_API = 'https://api.punkapi.com/v2/beers/random'
const MAGIC_WORD_BEER = 'OISPA KALJAA'
const { BASE_URL } = process.env

export const messageEcho = async (ev: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const update: Update = JSON.parse(ev.body)
  const { message } = update

  if (message.text.toUpperCase().includes(MAGIC_WORD_BEER)) {
    const { data } = await axios.get(PUNK_API)
    const { name, description } = data[0]

    const response = await axios.get(BASE_URL + 'sendMessage', {
      params: {
        chat_id: message.chat.id, // eslint-disable-line @typescript-eslint/camelcase
        text: `${name}: ${description}`,
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ data: response.data }),
    }
  }

  if ((Math.round(Math.random() * 99) + 1) < 99) {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    }
  }

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
