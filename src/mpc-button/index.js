import React from 'react'
import './mpc-styles.css'

let MPCButton = (props) => {
  return (
    <button onClick={props.handleButtonPress} className='mpc-button'>
      {props.pressed && <div className='mpc-button-dot' />}
    </button>
  )
}

export default MPCButton
