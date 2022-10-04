import { FC } from 'react'

import S from './DesignArea.module.scss'
import ProductShowcase from './productShowcase/ProductShowcase'
import ProductSides from './productSides/ProductSides'

const DesignArea: FC = () => {
  return (
    <div className={S.designArea}>
      <ProductShowcase />
      <ProductSides />
    </div>
  )
}

export default DesignArea
