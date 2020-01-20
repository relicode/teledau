import * as http from 'http'


const {
  TEST_API_HOST,
  TEST_API_PORT,
  TEST_API_BASE_PATH,
  TEST_API_RESOURCE_PATH,
} = process.env

console.log(`Test API running at ${TEST_API_HOST}:${TEST_API_PORT}${TEST_API_BASE_PATH}`)

http.createServer((req, res) => {
  const { url } = req
  
  if (url === '/stop') { process.exit(0) }

  if (url === `${TEST_API_BASE_PATH}${TEST_API_RESOURCE_PATH}`) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ ok: true }))
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ ok: false }))
  }
  res.end()
}).listen(TEST_API_PORT)

