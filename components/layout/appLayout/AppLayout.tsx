import { FC } from 'react'

import S from './AppLayout.module.scss'
import Sidepanel from '../../app/sIdepanel/Sidepanel'
import { LayoutProps } from '../../../ts/interface'

const AppLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className={S.appLayout}>
      <Sidepanel />
      {children}
    </main>
  )
}

export default AppLayout
