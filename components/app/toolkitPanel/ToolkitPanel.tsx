import { FC } from 'react'

import { useAppSelector } from '../../../store'
import { ToolkitOptionsList } from '../../../ts/enum'
import AddImage from '../addImage/AddImage'
import SelectProduct from '../selectProduct/SelectProduct'

import S from './ToolkitPanel.module.scss'

const ToolkitPanel: FC = () => {
  const { selected } = useAppSelector((state) => state.sidePanelReducer)

  return (
    <div className={S.toolkitPanel}>
      <p className={S.title}>{selected}</p>

      {selected === ToolkitOptionsList.ADD_IMAGE && <AddImage />}
      {selected === ToolkitOptionsList.SELECT_PRODUCT && <SelectProduct />}
    </div>
  )
}

export default ToolkitPanel
