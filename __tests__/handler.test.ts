import { hello } from '@functions/handler'


test('if hello handler returns statuscode 200', async () => {
  const response = await hello({})
  expect(response.statusCode).toEqual(200)
})

