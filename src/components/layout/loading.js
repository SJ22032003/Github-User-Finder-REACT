import React from 'react'
import Spinner from '../assets/loader.svg'
function loading() {
    const loadingSpinner = {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
  return (
      <div style={loadingSpinner}>
          <img src={Spinner} alt=" loading" />
      </div>
  )
}

export default loading