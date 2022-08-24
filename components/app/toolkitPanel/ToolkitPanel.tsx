import { FC } from 'react'

import { useAppSelector } from '../../../store'
import { ToolkitOptionsList } from '../../../ts/enum'
import AddImage from '../addImage/AddImage'

import S from './ToolkitPanel.module.scss'

const ToolkitPanel: FC = () => {
  const { selected } = useAppSelector((state) => state.sidePanelReducer)

  return (
    <div className={S.toolkitPanel}>
      <p className={S.title}>{selected}</p>

      {selected === ToolkitOptionsList.ADD_IMAGE && <AddImage />}
    </div>
  )
}

export default ToolkitPanel
