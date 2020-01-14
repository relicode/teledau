import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import { Update } from 'node-telegram-bot-api'


export const messageEcho = async (ev: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(ev.body)
  const { update }: { update: Update } = body
  const { message } = update

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  }
}
