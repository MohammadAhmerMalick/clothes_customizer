import { FC } from 'react'

import S from './Button.module.scss'
import { ButtonInterface } from '../../../ts/interface'

const Button: FC<ButtonInterface> = ({ label, onClick }) => {
  const handleOnclick = () => {
    if (!onClick) return

    onClick()
  }

  return (
    <div className={S.buttonContainer}>
      <button type="button" onClick={handleOnclick} className={S.button}>
        {label}
      </button>
    </div>
  )
}

export default Button
