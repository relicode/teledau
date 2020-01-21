import express, { json, Router } from 'express'

const {
  TEST_API_403_PATH,
  TEST_API_BASE_PATH,
  TEST_API_ECHO_PATH,
  TEST_SERVER_HOST,
  TEST_SERVER_KILL_PATH,
  TEST_SERVER_PORT,
  TEST_SERVER_STATUS_PATH,
} = process.env

const app = express()
const apiRouter = Router({ strict: true })

apiRouter.post(TEST_API_ECHO_PATH, (req, res) => {
  res.json(req.body)
})

apiRouter.post(TEST_API_403_PATH, (_req, res) => {
  res.status(403).json({ message: 'The server understood the request, but is refusing to authorize it.' })
})

app.use(TEST_API_BASE_PATH, json(), apiRouter)

app.get(TEST_SERVER_STATUS_PATH, (_req, res) => {
  res.status(200).send()
})

app.get(TEST_SERVER_KILL_PATH, async (_req, res) => {
  await res.status(200).send()
  console.log('Server shut down successfully')
  process.exit(0)
})

app.listen(TEST_SERVER_PORT)

console.log(`Test server running at ${TEST_SERVER_HOST}:${TEST_SERVER_PORT}`)
