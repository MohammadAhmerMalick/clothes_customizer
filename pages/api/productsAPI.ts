import { addDoc, collection, getDoc, doc, getDocs } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
import { firestoreDB } from '../../config/firebaseConfig'

// const uploadObDb = async () => {
//   const docRef = await addDoc(collection(firestoreDB, 'products'), {
//     t_shirts: {
//       front:
//         'https://res.cloudinary.com/dnu2o9j8f/image/upload/v1663787501/clothes_customizer/products/t_shirts/1/front_iazrlc.png',
//     },
//   })

//   console.log({ docRef })
// }

interface Link {
  originalLink?: string
  scaledLink?: string
}

interface Product {
  id: string
  front?: Link
  back?: Link
  left?: Link
  right?: Link
}

const scaleCloudinaryImage = (link: string, width: number): Link => ({
  originalLink: link,
  scaledLink: `${
    link.split('image/upload/')[0]
  }image/upload/c_scale,w_${width}/${link.split('image/upload/')[1]}`,
})

const getProducts = async () => {
  const products = await getDocs(collection(firestoreDB, 'products'))
  const result: any = []

  products.forEach((item) => {
    const product: Product = { id: '' }

    product.id = item.id

    Object.keys(item.data().t_shirts).forEach((key) => {
      const scaledImageLInk = scaleCloudinaryImage(
        item.data().t_shirts[key],
        305
      )
      console.log({ scaledImageLInk })

      product.front = scaledImageLInk
    })

    result.push(product)
  })

  // console.log({ result })
  return result
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // use database for the links

  // this is static declaration

  let pr: any = ''
  try {
    // uploadObDb()
    const p = await getProducts()
    // console.log({ p })
    pr = p
  } catch (e) {
    console.error('Error adding document: ', e)
  }

  // const data = [
  //   {
  //     front: '/images/tShirts/1/front.png',
  //     back: '/images/tShirts/1/back.png',
  //     left: '/images/tShirts/1/left.png',
  //     right: '/images/tShirts/1/right.png',
  //   },
  //   {
  //     front: '/images/tShirts/2/front.png',
  //     back: '/images/tShirts/2/back.png',
  //     left: '/images/tShirts/2/left.png',
  //     right: '/images/tShirts/2/right.png',
  //     pr,
  //   },
  // ]

  // return res.json(data)
  return res.json(pr)
}

export default handler
