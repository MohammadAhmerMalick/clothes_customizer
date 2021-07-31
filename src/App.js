import { Provider } from 'react-redux'
import { store } from './redux/store'
import Editor from './components/Editor'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Editor />
        </div>
      </Router>
    </Provider>
  )
}

export default App
