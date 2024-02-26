import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiContext } from './context/apiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiContext>
      <App />
    </ApiContext>
  </React.StrictMode>,
)
