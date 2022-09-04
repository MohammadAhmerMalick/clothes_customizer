import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import { LoadingCircleInterface } from '../../../ts/interface'

import S from './LoadingCircle.module.scss'

export const LoadingCircle: FC<LoadingCircleInterface> = ({ className }) => {
  return (
    <div className={classNames(S.loadingCircle, className)}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <path
          fill="#fff"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}

export default LoadingCircle
