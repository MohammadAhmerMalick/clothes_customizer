import { FC } from 'react'

import S from './ToolkitPanel.module.scss'
import { useAppSelector } from '../../../../store'
import { ToolkitOptionsListEnum } from '../../../../ts/enum'
import AddImage from './addImage/AddImage'
import UploadImage from './uploadImage/UploadImage'
import SelectProduct from './selectProduct/SelectProduct'

const ToolkitPanel: FC = () => {
  const { selected } = useAppSelector((state) => state.sidePanelReducer)

  return (
    <div className={S.toolkitPanel}>
      <p className={S.title}>{selected}</p>

      {selected === ToolkitOptionsListEnum.ADD_IMAGE && <AddImage />}
      {selected === ToolkitOptionsListEnum.UPLOAD_IMAGE && <UploadImage />}
      {selected === ToolkitOptionsListEnum.SELECT_PRODUCT && <SelectProduct />}
    </div>
  )
}

export default ToolkitPanel
