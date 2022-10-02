import classNames from 'classnames'
import { FC } from 'react'

import { LoadingCircleInterface } from '../../../ts/interface'

import S from './LoadingCircle.module.scss'

export const LoadingCircle: FC<LoadingCircleInterface> = ({ className }) => {
  return (
    <div className={classNames(S.loadingCircle, className)}>
      <svg viewBox="0 0 181.24 181.26">
        <path
          className={S.halfCircle}
          d="M7.56,90.63c0-45.87,37.19-83.06,83.06-83.06s83.06,37.19,83.06,83.06"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            from="0"
            to="360"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}

export default LoadingCircle
