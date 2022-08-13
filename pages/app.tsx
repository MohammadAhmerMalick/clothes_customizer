import { NextPage } from 'next'
import { AppDispatch, useAppDispatch, useAppSelector } from '../store'
import { increment } from '../store/counterSlice'

const App: NextPage = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const state1 = useAppSelector((state) => state)

  console.log(state1)

  return (
    <div>
      <button type="button" onClick={() => dispatch(increment())}>
        increment
      </button>
    </div>
  )
}

export default App
