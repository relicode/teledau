import { Message } from 'node-telegram-bot-api'

import config from '@utils/config'
import createAxiosInstance from '@utils/api'

export interface Beer {
  name: string;
  description: string;
}

const punkApi = createAxiosInstance(config.punkApiBaseURL)

export const beerTest = (text: string): boolean => /oil?spa.*kal(j|i|ij)aa/gi.test(text)

export const getBeerString = async (message: Message): Promise<string> => {
  if (!beerTest(message.text)) { return '' }
  const { data } = await punkApi.get('/beers/random')
  const beers: Beer[] = data
  const { name, description } = beers[0]
  return `**${name}**:\n${description}`
}
