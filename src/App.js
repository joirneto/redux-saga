import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import reducers from './reducers/index'
import Info from './components/Info'
import UserAgent from './components/UserAgent'
import createSagaMiddleware from '@redux-saga/core'
import indexSaga from './sagas/index'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(applyMiddleware(logger, sagaMiddleware))
)

sagaMiddleware.run(indexSaga)


const App = () =>{
  return (
    <Provider store = {store}>
      <div className="App">
        REDUX SAGA
      </div>
      <Info/>
      <UserAgent/>
    </Provider>
  )
}

export default App;
