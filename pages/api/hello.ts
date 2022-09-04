// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const x = await axios.get('https://jsonplaceholder.typicode.com/posts')

  res.status(200).json(x.data)
}

export default handler
