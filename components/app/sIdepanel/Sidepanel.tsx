import { FC } from 'react'

import S from './Sidepanel.module.scss'
import ToolkitOptions from '../toolkitOptions/ToolkitOptions'

const Sidepanel: FC = () => {
  return (
    <aside className={S.sidepanel}>
      <ToolkitOptions />
    </aside>
  )
}

export default Sidepanel
