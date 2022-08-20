import { FC } from 'react'

import S from './Side_Panel.module.scss'
import ToolkitOptions from '../toolkitOptions/ToolkitOptions'
import ToolkitPanel from '../toolkitPanel/ToolkitPanel'

const SidePanel: FC = () => {
  return (
    <aside className={S.sidePanel}>
      <ToolkitOptions />
      <ToolkitPanel />
    </aside>
  )
}

export default SidePanel
