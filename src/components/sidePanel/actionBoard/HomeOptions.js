import Svgs from '../../../icons/Svgs'

export default function HomeOptions({ name, text }) {
  return (
    <>
      <Svgs id={name} />
      <p>{text}</p>
    </>
  )
}
