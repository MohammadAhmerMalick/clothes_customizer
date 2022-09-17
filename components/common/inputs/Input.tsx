import { ChangeEvent, FC } from 'react'
import classNames from 'classnames'

import S from './Input.module.scss'
import { InputInterface } from '../../../ts/interface'

const Input: FC<InputInterface> = ({
  type,
  className,
  placeholder,
  onChange,
  onKeyDown,
  Icon,
}) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement
    if (onChange) onChange(target.value)
  }

  return (
    <div className={S.inputContainer}>
      {Icon && <Icon className={S.icon} />}
      <input
        className={classNames(S.input, className, { [S.withIcon]: Icon })}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

export default Input
