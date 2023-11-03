import React from 'react'
import ReactDOM from 'react-dom/client'
import Rout from './cpmponents/route/route'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rout/>
    </BrowserRouter>
  </React.StrictMode>,
)
