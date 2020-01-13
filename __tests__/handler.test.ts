import { hello } from '@functions/handler'

test('if hello handler returns statuscode 200', async () => {
  const response = await hello()
  expect(response.statusCode).toEqual(200)
})

test('if hello handler returns body with truth of 42', async () => {
  const response = await hello()
  expect(JSON.parse(response.body).truth).toEqual(42)
})
