import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import { Update } from 'node-telegram-bot-api'

import { getBeerString } from '@services/punk-api'
import { sendMessage } from '@services/bot-api'

export const messageEcho = async (ev: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const update: Update = JSON.parse(ev.body)
  const { message } = update

  // const { chat } = message
  // const text = message.text
  const beerString = await getBeerString(message)

  if (beerString) {
    sendMessage({
      ...message,
      text: beerString,
    })
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  }

  /*
  if ((Math.round(Math.random() * 99) + 1) < 99) {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    }
  }
  */

}
