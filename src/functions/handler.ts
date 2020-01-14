import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import { Update } from 'node-telegram-bot-api'
import axios from 'axios'


const BASE_URL = `https://api.telegram.org/bot${process.env.BOT_ID}:${process.env.TOKEN}/`
BASE_URL

export const messageEcho = async (ev: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const update: Update = JSON.parse(ev.body)
  const { message } = update

  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        chat_id: message.chat.id, // eslint-disable-line @typescript-eslint/camelcase
        text: message.text,
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    }
  } catch (e) {
    console.error(e)
    const { data } = await axios.get('https://api.telegram.org/bot919272248:AAEWSU64VyVAZ9EIozKvICRe58ouKaMFN3k/getMe')
    console.log(data)
    return {
      statusCode: 500,
      body: JSON.stringify({ e }),
    }
  }
}
