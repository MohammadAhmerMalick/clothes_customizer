import { ReactNode } from 'react'
import { ThemeModes } from './enum'

export interface LayoutProps {
  children: ReactNode
}

// slices
export interface UIInterface {
  theme: ThemeModes.LIGHT | ThemeModes.DARK
}
