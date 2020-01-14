import utils from 'aws-lambda-test-utils'
import { hello } from '@functions/handler'

const ev = utils.mockEventCreator.createAPIGatewayEvent({
  body: JSON.stringify({ update: { message: 'TEST MESSAGE' } }),
})

test('if hello handler returns statuscode 200', async () => {
  const response = await hello(ev)
  expect(response.statusCode).toEqual(200)
})

test('if hello handler returns body with truth of 42', async () => {
  const response = await hello(ev)
  expect(JSON.parse(response.body).truth).toEqual(42)
})
