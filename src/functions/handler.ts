import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import { Update } from 'node-telegram-bot-api'

import truth from '@utils/math'


export const hello = async (ev: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(ev.body)
  const { update }: { update: Update } = body
  console.log(JSON.stringify(update, null, 2))

  return {
    statusCode: 200,
    body: JSON.stringify({ truth }),
  }
}
