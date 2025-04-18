import React from 'react'

import PropTypes from 'prop-types'

import './branding.css'

const Branding = (props) => {
  return (
    <div className="branding-branding">
      <span className="branding-text1">{props.text}</span>
      <span className="branding-text2">{props.text1}</span>
    </div>
  )
}

Branding.defaultProps = {
  text: 'Sæson',
  text1: 'Dining',
}

Branding.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Branding
