import React from 'react'

import PropTypes from 'prop-types'

import Branding from './branding'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-information">
        <div className="footer-content">
          <div className="footer-header">
            <Branding></Branding>
          </div>
          <div className="footer-contact-list">
            <div className="footer-contact1">
              <span className="footer-text10">{props.text1}</span>
            </div>
            <div className="footer-contact2">
              <span className="footer-text11">{props.text21}</span>
            </div>
          </div>
        </div>
        <span className="footer-copyright">{props.copyright}</span>
      </div>
      <div className="footer-links">
        <div className="footer-column1">
          <span className="link">{props.text}</span>
          <span className="link">{props.text2}</span>
          <span className="link">{props.text3}</span>
          <span className="link">{props.text5}</span>
        </div>
        <div className="footer-column2">
          <span className="link">{props.text6}</span>
          <span className="link">{props.text7}</span>
          <span className="link">{props.text8}</span>
          <span className="link">{props.text9}</span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text5: 'Contact',
  text9: 'Facebook',
  copyright: '©2023 Sæson. All Rights Reserved.',
  text: 'About',
  text3: 'Membership',
  text1: 'dining@saeson.co',
  text8: 'Twitter',
  text6: 'Linkedin',
  text2: 'Events',
  text21: '+45 00 00 00 00',
  text7: 'Instagram',
}

Footer.propTypes = {
  text5: PropTypes.string,
  text9: PropTypes.string,
  copyright: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text8: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  text7: PropTypes.string,
}

export default Footer
