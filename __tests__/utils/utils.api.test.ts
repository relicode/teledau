import createInstance from '@utils/api'

const {
  TEST_API_403_PATH,
  TEST_API_BASE_PATH,
  TEST_API_ECHO_PATH,
  TEST_SERVER_HOST,
  TEST_SERVER_PORT,
  TEST_SERVER_STATUS_PATH,
} = process.env

const BASE_URL = `${TEST_SERVER_HOST}:${TEST_SERVER_PORT}`
const API_URL = `${BASE_URL}${TEST_API_BASE_PATH}`

test('if instance is created with BASE_URL and default options', () => {
  const instance = createInstance(BASE_URL, { timeout: 1000 })
  const { defaults } = instance
  expect(defaults.baseURL).toBe(BASE_URL)
  expect(defaults.xsrfCookieName).toBe('XSRF-TOKEN')
  expect(defaults.timeout).toBe(1000)
})

test('if server gives proper status code for being up', async () => {
  const instance = createInstance(BASE_URL)
  const { status } = await instance.get(BASE_URL + TEST_SERVER_STATUS_PATH)
  expect(status).toBe(200)
})

test('if api gives proper echo response', async () => {
  const instance = createInstance(API_URL)
  const payload = { key: 'value' }
  const { data } = await instance.post(TEST_API_ECHO_PATH, payload)
  expect(data).toEqual(payload)
})

test('if api handels erroneus status code', async () => {
  const instance = createInstance(API_URL)
  const payload = { key: 'value' }
  try {
    const { data } = await instance.post(TEST_API_403_PATH, payload)
    data
  } catch (e) {
    const { status } = e.response
    expect(status).toEqual(403)
  }
})
