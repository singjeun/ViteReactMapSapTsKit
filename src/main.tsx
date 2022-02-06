import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'
import Routers from "./routers";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
)
