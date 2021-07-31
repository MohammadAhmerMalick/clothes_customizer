import Svgs from '../../../icons/Svgs'

export default function HomeAction({ name, text }) {
  return (
    <>
      <Svgs id={name} />
      <p>{text}</p>
    </>
  )
}
