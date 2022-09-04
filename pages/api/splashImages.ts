import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchUnSplashImages } from '../../network/axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetchUnSplashImages(req.query.keyword as string)
  res.status(200).json(response)
}

export default handler
