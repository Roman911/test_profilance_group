import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import moment from 'moment'
import 'moment/locale/ru'

import store from './redux/store'

moment.locale('ru')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
