import { addDoc, collection, getDoc, doc, getDocs } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
import { firestoreDB } from '../../config/firebaseConfig'
import { ProductsInterface } from '../../ts/interface'
import { scaleCloudinaryImage } from '../../utils/utilsFunctions'
import { SIDE_PANEL_IMAGE_MAX_WIDTH } from '../../utils/constants'

// const uploadObDb = async () => {
//   const docRef = await addDoc(collection(firestoreDB, 'products'), {
//     t_shirts: {
//       front:
//         'https://res.cloudinary.com/dnu2o9j8f/image/upload/v1663787501/clothes_customizer/products/t_shirts/1/front_iazrlc.png',
//     },
//   })

//   console.log({ docRef })
// }

const getProducts = async () => {
  const data: ProductsInterface[] = []

  // get products list from firebase
  const products = await getDocs(collection(firestoreDB, 'products'))
  // console.log({ products })

  // console.log({ l: products.forEach.length })
  // console.log({ d: products.docs })
  // console.log({ m: products.metadata })
  // console.log({ q: products.query })
  // console.log({ s: products.size })

  if (!products.size) {
    return { data, message: 'No product found' }
  }

  products.forEach((item) => {
    const product: ProductsInterface = { id: item.id }

    // Object.keys(item.data().t_shirt).forEach((key) => {
    Object.keys(item.data().t_shirts).forEach((key) => {
      // scale the image
      const scaledImageLInk = scaleCloudinaryImage(
        item.data().t_shirts[key],
        SIDE_PANEL_IMAGE_MAX_WIDTH
      )

      // testing by only front
      product.front = scaledImageLInk
    })

    data.push(product)
  })
  return data
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getProducts()
    return res.json({ data })
  } catch (error) {
    console.log({ getProductsError: error })
    return res.json({
      data: { message: 'Unable to get products at this moment', data: [] },
    })
  }
}

export default handler

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
