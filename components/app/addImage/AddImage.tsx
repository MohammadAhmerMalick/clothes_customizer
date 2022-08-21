import Image from 'next/image'
import classNames from 'classnames'
import { RiSearch2Line } from 'react-icons/ri'
import { FC, KeyboardEvent, useState } from 'react'
import { IoMdSquareOutline } from 'react-icons/io'
import { BiGridAlt } from 'react-icons/bi'

import S from './AddImage.module.scss'
import CAT from '../../../assets/images/cat.avif'
import Input from '../../common/inputs/Input'
import IconButton from '../../common/buttons/IconButton'

const AddImage: FC = () => {
  const [keyword, setKeyword] = useState('')

  const [itemPerColumn, setItemPerColumn] = useState<'single' | 'double'>(
    'single'
  )

  const handleChange = (value: string) => {
    setKeyword(value)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') console.log({ e: e.key })
  }

  console.log({ keyword })

  return (
    <div className={S.addImage}>
      <Input
        type="text"
        placeholder="Keyword"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        Icon={RiSearch2Line}
      />

      <div className={S.alignmentContainer}>
        <IconButton
          title="single"
          className={classNames(S.button, {
            [S.active]: itemPerColumn === 'single',
          })}
          onClick={() => setItemPerColumn('single')}
        >
          <IoMdSquareOutline className={S.icon} />
        </IconButton>
        <IconButton
          title="double"
          className={classNames(S.button, {
            [S.active]: itemPerColumn === 'double',
          })}
          onClick={() => setItemPerColumn('double')}
        >
          <BiGridAlt className={S.icon} />
        </IconButton>
      </div>

      <div className={classNames(S.imageContainer, S[itemPerColumn])}>
        {[1, 2, 3, 4].map((value) => (
          <Image key={value} src={CAT} alt="cat" />
        ))}
      </div>
    </div>
  )
}

export default AddImage
