import { FC } from 'react'

import { useAppSelector } from '../../../store'

import S from './ToolkitPanel.module.scss'

const ToolkitPanel: FC = () => {
  const { toolkitPanelTitle } = useAppSelector(
    (state) => state.sidePanelReducer
  )

  return (
    <div className={S.toolkitPanel}>
      <p className={S.title}>{toolkitPanelTitle}</p>
    </div>
  )
}

export default ToolkitPanel
