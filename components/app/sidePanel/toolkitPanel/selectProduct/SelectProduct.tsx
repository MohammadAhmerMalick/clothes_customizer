import classNames from 'classnames'
import { TbRefresh } from 'react-icons/tb'
import { FC, useEffect } from 'react'

import S from './SelectProduct.module.scss'
import ImageAlignmentoptions from '../../../../common/ImageLayoutOptions/ImageLayoutOptions'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import {
  chengeProductsFetchedFlag,
  getProductsAction,
  selectProductAction,
} from '../../../../../store/slices/app/productSlice'
import { SIDE_PANEL_IMAGE_MAX_WIDTH } from '../../../../../utils/constants'
import CustomImage from '../../../../common/customImage/CustomImageInterface'
import LoadingCircle from '../../../../common/loading/LoadingCircle'
import IconButton from '../../../../common/buttons/iconButton/IconButton'
import { ProductsInterface } from '../../../../../ts/interface'

const SelectProduct: FC = () => {
  const dispatch = useAppDispatch()
  const { loading, fetched, data } = useAppSelector(
    (state) => state.productReducer
  )
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )

  const reFetchProducts = () => {
    dispatch(chengeProductsFetchedFlag(false))
  }

  useEffect(() => {
    if (!fetched) {
      dispatch(getProductsAction())
    }
  }, [fetched, data.allProducts, dispatch])

  const handleSelectProduct = (product: ProductsInterface) => {
    dispatch(selectProductAction(product))
  }

  return (
    <div className={S.selectProduct}>
      <div className={S.tools}>
        <IconButton
          Icon={TbRefresh}
          onClick={reFetchProducts}
          title="Refresh product list"
        />
        <ImageAlignmentoptions />
      </div>

      {loading ? (
        <LoadingCircle />
      ) : (
        data && (
          <div className={classNames(S.products, S[imageLayoutOption])}>
            {data.allProducts.map((product) => (
              <div key={product.id} className={S.imageContainer}>
                {product.front && (
                  <CustomImage
                    src={product.front.scaledLink}
                    alt="Product"
                    width={SIDE_PANEL_IMAGE_MAX_WIDTH}
                    height={SIDE_PANEL_IMAGE_MAX_WIDTH}
                    className={S.image}
                    onClick={() => handleSelectProduct(product)}
                  />
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}

export default SelectProduct
