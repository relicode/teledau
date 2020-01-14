import utils from 'aws-lambda-test-utils'
import { messageEcho } from '@functions/handler'


const TEST_MESSAGE = 'test message'

const ev = utils.mockEventCreator.createAPIGatewayEvent({
  body: JSON.stringify({ update: { message: TEST_MESSAGE } }),
})

test('if messageEcho handler returns statuscode 200', async () => {
  const response = await messageEcho(ev)
  expect(response.statusCode).toEqual(200)
})

test('if messageEcho handler returns body with truth of 42', async () => {
  const response = await messageEcho(ev)
  expect(JSON.parse(response.body).message).toEqual(TEST_MESSAGE)
})
