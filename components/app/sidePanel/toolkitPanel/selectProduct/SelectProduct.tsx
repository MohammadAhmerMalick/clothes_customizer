import classNames from 'classnames'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { BiGridAlt } from 'react-icons/bi'
import { IoMdSquareOutline } from 'react-icons/io'

import S from './SelectProduct.module.scss'
import { getProducts } from '../../../../../network/apiCalls'
import IconButton from '../../../../common/buttons/IconButton'

const SelectProduct: FC = () => {
  const [itemPerColumn, setItemPerColumn] = useState<'single' | 'double'>(
    'single'
  )

  const [image, setImage] = useState({
    selectedSide: '',
    selectedImage: {
      front: '',
      back: '',
      left: '',
      right: '',
    },
    data: [
      {
        front: '',
        back: '',
        left: '',
        right: '',
      },
    ],
  })

  const x = async () => {
    try {
      const data = await getProducts()

      setImage((oldState) => ({
        ...oldState,
        selectedSide: data[0].front,
        selectedImage: data[0],
        data,
      }))
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    x()
  }, [])

  return (
    <div className={S.selectProduct}>
      <div className={S.alignmentContainer}>
        <IconButton
          title="single"
          className={classNames(S.button)}
          isActive={itemPerColumn === 'single'}
          onClick={() => setItemPerColumn('single')}
          Icon={IoMdSquareOutline}
          IconClassName={S.icon}
        />
        <IconButton
          title="double"
          className={classNames(S.button)}
          isActive={itemPerColumn === 'double'}
          onClick={() => setItemPerColumn('double')}
          Icon={BiGridAlt}
          IconClassName={S.icon}
        />
      </div>

      <div className={classNames(S.products, S[itemPerColumn])}>
        {image.data.map((product) => (
          <div key={product.front}>
            <Image src={product.front} alt="Product" width={400} height={400} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectProduct
