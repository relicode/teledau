const { BOT_ID, BOT_TOKEN, BOT_API_BASE_URL, PUNK_API_BASE_URL } = process.env

export default {
  bot: {
    id: BOT_ID,
    token: BOT_TOKEN,
    baseURL: `${BOT_API_BASE_URL}/${BOT_ID}:${BOT_TOKEN}`,
  },
  punkApiBaseURL: PUNK_API_BASE_URL,
}

