import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text1">{props.text}</span>
      <span className="navigation-links-text2">{props.text1}</span>
      <span className="navigation-links-text3">{props.text2}</span>
      <span className="navigation-links-text4">{props.text3}</span>
      <span className="navigation-links-text5">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'About',
  text4: 'Blog',
  rootClassName: '',
  text2: 'Pricing',
  text3: 'Team',
  text1: 'Features',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
