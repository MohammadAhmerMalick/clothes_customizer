import { FC } from 'react'

import S from './DesignArea.module.scss'
import ProductShowcase from './productShowcase/ProductShowcase'

const DesignArea: FC = () => {
  return (
    <div className={S.designArea}>
      <ProductShowcase />
    </div>
  )
}

export default DesignArea
