import { FC, KeyboardEvent, ReactNode } from 'react'
import { FileWithPath } from 'react-dropzone'
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

export interface LinkInterface {
  originalLink?: string
  scaledLink?: string
}

export interface ProductsInterface {
  id: string
  front?: LinkInterface
  back?: LinkInterface
  left?: LinkInterface
  right?: LinkInterface
}

export interface ProductSliceInterface {
  loading: boolean
  data: {
    allProducts: ProductsInterface[]
    selectedProduct: ProductsInterface
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

export interface ProductSideThumbnailInterface {
  link: string | undefined
}

export interface CustomImageInterface {
  src: string | undefined
  height?: number
  width?: number
  alt: string
  placeholder?: string
}

export interface DropzoneInterface {
  selectFiles(acceptedFiles: File[]): void
}

export interface ButtonInterface {
  children: ReactNode
  onClick?(): void
  className?: string
  primary?: boolean
}

export interface SelectOptionInterface {
  label: string
  value: string
  isSelected?: boolean
}

export interface SelectInterface {
  label?: string
  externalLabel: boolean
  options: SelectOptionInterface[]
  onChange(option: SelectOptionInterface[]): void
  dropUp?: boolean
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

/* *********
  general
 ********* */

export interface FileWIthPathObject {
  id: number | string
  file: FileWithPath
  previewURL: string
  sideLabel?: string
}

export interface ImageNaturalDimensionInterface {
  naturalHeight: number
  naturalWidth: number
}
