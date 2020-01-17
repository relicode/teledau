import { AxiosResponse } from 'axios'
import { Message } from 'node-telegram-bot-api'

import config from '@utils/config'
import createAxiosInstance from '@utils/api'


const botApi = createAxiosInstance(config.bot.baseURL)

export const sendMessage = async (message: Message): Promise<AxiosResponse> => (
  await botApi.get('/sendMessage', {
    params: {
      chat_id: message.chat.id, // eslint-disable-line @typescript-eslint/camelcase
      text: message.text,
    },
  })
)

