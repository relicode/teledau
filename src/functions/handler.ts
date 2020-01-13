import { /*APIGatewayProxyHandler,*/ APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'

import truth from '@utils/math'


export const hello/*: APIGatewayProxyHandler*/ = async (event): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Truth: ${truth}`,
      input: event,
    }, null, 2),
  }
}
