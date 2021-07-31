import { Provider } from 'react-redux'
import { store } from './redux/store'
import Editor from './components/Editor'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Editor />
      </div>
    </Provider>
  )
}

export default App
