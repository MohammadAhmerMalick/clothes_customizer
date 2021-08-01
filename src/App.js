import { Provider } from 'react-redux'
import { store } from './redux/store'
import Editor from './components/Editor'
import { BrowserRouter as Router } from 'react-router-dom';
import _message from './components/_message'

function App() {
  return (
    <Provider store={store}>
      < _message />
      <Router>
        <div className='App'>
          <Editor />
        </div>
      </Router>
    </Provider>
  )
}

export default App
