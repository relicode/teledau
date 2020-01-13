import {  APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'

import truth from '@utils/math'


export const hello = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ truth }),
  }
}
