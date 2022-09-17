import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchUnSplashImages } from '../../network/axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.keyword)
    return res.status(400).json({
      error: 'keyword prop missing',
      message: 'Please write keyword to search',
    })

  if (typeof req.query.keyword !== 'string')
    return res.status(400).json({
      error: 'prop type must be string',
      message: 'invalid input',
    })

  try {
    const response = await fetchUnSplashImages(req.query.keyword)

    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      error,
      message: 'Something went wrong',
    })
  }
}

export default handler
