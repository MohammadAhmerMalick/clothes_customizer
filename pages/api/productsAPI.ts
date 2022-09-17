import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // use database for the links

  // this is static declaration
  const data = [
    {
      front: '/images/tShirts/1/front.png',
      back: '/images/tShirts/1/back.png',
      left: '/images/tShirts/1/left.png',
      right: '/images/tShirts/1/right.png',
    },
    {
      front: '/images/tShirts/2/front.png',
      back: '/images/tShirts/2/back.png',
      left: '/images/tShirts/2/left.png',
      right: '/images/tShirts/2/right.png',
    },
  ]

  return res.json(data)
}

export default handler
