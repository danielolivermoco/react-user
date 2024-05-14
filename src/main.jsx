import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/Home/App.jsx'
import GlobalStyle from './globalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App /> <GlobalStyle />
  </>,
)

