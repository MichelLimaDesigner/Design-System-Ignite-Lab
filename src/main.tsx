import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const icons = {
  proposta: {
    name: 'prostata',
    url: 'asdasdasd'
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
