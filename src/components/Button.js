import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, color, onAdd }) => {
  return (
    <button style={{ backgroundColor: color }} className='btn' onClick={onAdd}>
      {text}
    </button>
  )
}

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button
