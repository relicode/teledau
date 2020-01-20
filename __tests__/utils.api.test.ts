import createInstance from '@utils/api'

const {
  TEST_API_HOST,
  TEST_API_PORT,
  TEST_API_BASE_PATH,
  TEST_API_RESOURCE_PATH,
} = process.env

const BASE_URL = `${TEST_API_HOST}:${TEST_API_PORT}${TEST_API_BASE_PATH}`

test('if instance is created with BASE_URL and default options', () => {
  const instance = createInstance(BASE_URL, { timeout: 1000 })

  const { defaults } = instance
  expect(defaults.baseURL).toBe(BASE_URL)
  expect(defaults.xsrfCookieName).toBe('XSRF-TOKEN')
})

test('if requests are made to the proper path', async () => {
  const instance = createInstance(BASE_URL)
  const { data, status } = await instance.get(BASE_URL + TEST_API_RESOURCE_PATH)
  expect(data.ok).toBe(true)
  expect(status).toBe(200)
})

