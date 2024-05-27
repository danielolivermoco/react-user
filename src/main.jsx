import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyle'
import MyRoutes from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes /> <GlobalStyle />
  </React.StrictMode>,
)

