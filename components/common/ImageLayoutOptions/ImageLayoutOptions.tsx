import { FC } from 'react'
import classNames from 'classnames'
import { BiGridAlt } from 'react-icons/bi'
import { IoMdSquareOutline } from 'react-icons/io'

import S from './ImageLayoutOptions.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setImageLayoutOption } from '../../../store/slices/app/sidePanelSlice'
import { sidePanelSliceInterface } from '../../../ts/interface'
import IconButton from '../buttons/IconButton'

const ImageAlignmentoptions: FC = () => {
  const dispatch = useAppDispatch()
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )

  const setValue = (value: sidePanelSliceInterface['imageLayoutOption']) => {
    dispatch(setImageLayoutOption(value))
  }

  return (
    <div className={S.imageAlignmentoptions}>
      <IconButton
        title="Single"
        className={classNames(S.button)}
        isActive={imageLayoutOption === 'single'}
        onClick={() => setValue('single')}
        Icon={IoMdSquareOutline}
        IconClassName={S.icon}
      />
      <IconButton
        title="Double"
        className={classNames(S.button)}
        isActive={imageLayoutOption === 'double'}
        onClick={() => setValue('double')}
        Icon={BiGridAlt}
        IconClassName={S.icon}
      />
    </div>
  )
}
export default ImageAlignmentoptions
