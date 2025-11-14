import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'                     // <-- this line MUST exist
import VyomGarudLanding from './VyomGarudLanding.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VyomGarudLanding />
  </React.StrictMode>
)
