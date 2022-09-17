import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/app">app</Link>
      <Link href="/">webiste</Link>
    </div>
  )
}

export default Home
