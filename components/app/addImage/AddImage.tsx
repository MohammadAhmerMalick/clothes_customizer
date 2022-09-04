import Image from 'next/image'
import classNames from 'classnames'
import { RiSearch2Line } from 'react-icons/ri'
import { FC, KeyboardEvent, useState } from 'react'
import { IoMdSquareOutline } from 'react-icons/io'
import { BiGridAlt } from 'react-icons/bi'

import S from './AddImage.module.scss'
import CAT_2 from '../../../assets/images/cat_2.jpg'
import Input from '../../common/inputs/Input'
import IconButton from '../../common/buttons/IconButton'
import { fetchUnSplashImages } from '../../../network/axios'
import { getImages } from '../../../network/apiCalls'

const AddImage: FC = () => {
  const [keyword, setKeyword] = useState('')
  const [images, setImages] = useState([
    {
      id: 'ZRFztIxiy3M',
      urls: {
        raw: 'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixid=MnwyNTA1ODZ8MHwxfHNlYXJjaHwxfHxzYWR8ZW58MHx8fHwxNjYxNjExODk5&ixlib=rb-1.2.1',
        full: 'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNTA1ODZ8MHwxfHNlYXJjaHwxfHxzYWR8ZW58MHx8fHwxNjYxNjExODk5&ixlib=rb-1.2.1&q=80',
        regular:
          'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA1ODZ8MHwxfHNlYXJjaHwxfHxzYWR8ZW58MHx8fHwxNjYxNjExODk5&ixlib=rb-1.2.1&q=80&w=1080',
        small:
          // 'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA1ODZ8MHwxfHNlYXJjaHwxfHxzYWR8ZW58MHx8fHwxNjYxNjExODk5&ixlib=rb-1.2.1&q=80&w=400',
          CAT_2,
        thumb:
          'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA1ODZ8MHwxfHNlYXJjaHwxfHxzYWR8ZW58MHx8fHwxNjYxNjExODk5&ixlib=rb-1.2.1&q=80&w=200',
        small_s3:
          'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1535890696255-dd5bcd79e6df',
      },
      width: 2848,
      height: 4288,
      color: '#a6d9d9',
    },
  ])

  const [itemPerColumn, setItemPerColumn] = useState<'single' | 'double'>(
    'single'
  )

  const handleChange = (value: string) => {
    setKeyword(value)
  }

  const handleKeyDown = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      try {
        const res = await getImages(keyword)
        setImages(res)
      } catch (error) {
        console.log({ error })
      }
    }
  }

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
        {images.map((image) => (
          <div key={image.id} className={S.image}>
            <div
              className={S.imageBox}
              style={{ backgroundColor: image.color }}
            >
              <Image
                src={image.urls.small}
                alt="cat"
                width={image.width / (image.width / 400)}
                height={image.height / (image.width / 400)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddImage
