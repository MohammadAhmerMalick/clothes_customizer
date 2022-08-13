import { FC } from 'react'

import Header from '../app/Header'
import Sidepanel from '../app/Sidepanel'
import { LayoutProps } from '../../ts/interface'

const AppLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidepanel />

      {children}
    </>
  )
}

export default AppLayout
