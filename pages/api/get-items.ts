import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_r1ojddINsQrfD8OVvAQ14UkCEqXrn7iBv4gF6EzBwas',
})

const databaseId = '764487c20f6648bc986e01563bdd8df8'

async function getItems() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,

      sorts: [
        {
          property: 'price',
          direction: 'ascending',
        },
      ],
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await getItems()
    res.status(200).json({ items: response?.results, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed ` })
  }
}
