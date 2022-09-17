import { FC, KeyboardEvent, ReactNode } from 'react'
import { IconType } from 'react-icons'

import {
  ImageAlignmentoptionsEnum,
  ProductsSidesEnum,
  ThemeColorsEnum,
  ToolkitOptionsListEnum,
} from './enum'

/* *********
   states
  ********* */

/* *********
   slices
  ********* */

export interface UISliceInterface {
  themeColor: ThemeColorsEnum
}

export interface SidePanelSliceInterface {
  selected: ToolkitOptionsListEnum
  imageLayoutOption: ImageAlignmentoptionsEnum
}

export interface SearchesSliceInterface {
  unSplashImages: {
    loading: boolean
    data: {
      id: string
      urls: {
        raw: string
        full: string
        regular: string
        small: string
        thumb: string
        small_s3: string
      }
      width: number
      height: number
      color: string
    }[]
    error: object
  }
}

interface AllProductsInterface {
  front: string
  back: string
  left: string
  right: string
}

export interface ProductSliceInterface {
  loading: boolean
  data: {
    allProducts: AllProductsInterface[]
    selectedProduct: AllProductsInterface
    selectedSide: ProductsSidesEnum
  }
  error: object
}

// toolkitOption
export interface ToolkitOptionButtonInterface {
  title: string
  Icon: IconType
}

/* *********
  COMPONENTS
 ********* */

export interface LayoutProps {
  children: ReactNode
}

export interface InputInterface {
  type: 'text' | 'email'
  className?: string
  placeholder?: string
  onChange?(value: string): void
  onKeyDown?(e: KeyboardEvent): void
  Icon?: IconType
}

export interface LoadingCircleInterface {
  className?: string
}

export interface IconButtonInterface {
  title?: string
  className?: string
  onClick?(title?: string): void
  Icon: IconType | FC<LoadingCircleInterface>
  isActive?: boolean
  IconClassName?: string
}

/* *********
  Utils
 ********* */

export interface ToasterInterface {
  success: (message: string) => void
  error: (message: string) => void
  info: (message: string) => void
  warn: (message: string) => void
}
