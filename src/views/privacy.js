import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './privacy.css'

const Privacy = (props) => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy - Josephine</title>
        <meta property="og:title" content="Privacy - Josephine" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b379a5ac-1043-4914-a29c-80b046c82f52/4d14a1e1-5919-4f89-8186-ed4df50ea2d0?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Header" className="privacy-header">
        <Link to="/" className="privacy-navlink1">
          <img
            alt="image"
            src="/s%C3%A6son-200h.png"
            className="privacy-logo"
          />
        </Link>
        <div className="privacy-social-media">
          <a
            href="https://www.linkedin.com/company/saeson/"
            target="_blank"
            rel="noreferrer noopener"
            className="privacy-link"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="privacy-icon1">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </a>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="privacy-instagram"
          >
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="privacy-whats-app"
          >
            <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
          </svg>
        </div>
      </header>
      <div className="privacy-hero">
        <span className="privacy-text10">
          <span className="privacy-text11">Sæson Privacy Policy</span>
          <br className="privacy-text12"></br>
          <span>
            At Sæson, we are committed to protecting the privacy of our users
            and ensuring the confidentiality of their personal information. This
            Privacy Policy outlines our commitment to privacy and how we handle
            personal information.
          </span>
          <br className="privacy-text14"></br>
          <br className="privacy-text15"></br>
          <span className="privacy-text16">Information Collection</span>
          <br className="privacy-text17"></br>
          <span>
            We do not collect any personal information from you when you use our
            website.
          </span>
          <br className="privacy-text19"></br>
          <br className="privacy-text20"></br>
          <span className="privacy-text21">Use of Personal Information</span>
          <br className="privacy-text22"></br>
          <span>
            As we do not collect any personal information, we do not use it for
            any purpose.
          </span>
          <br className="privacy-text24"></br>
          <br className="privacy-text25"></br>
          <span className="privacy-text26">Data Storage</span>
          <br className="privacy-text27"></br>
          <span>
            As we do not collect any personal information, we do not store it on
            our servers or any other storage device.
          </span>
          <br className="privacy-text29"></br>
          <br className="privacy-text30"></br>
          <span className="privacy-text31">Sharing Personal Information</span>
          <br className="privacy-text32"></br>
          <span>
            As we do not collect any personal information, we do not share it
            with any third-party service providers.
          </span>
          <br className="privacy-text34"></br>
          <br className="privacy-text35"></br>
          <span className="privacy-text36">Data Retention</span>
          <br className="privacy-text37"></br>
          <span>
            As we do not collect any personal information, we do not retain it.
          </span>
          <br className="privacy-text39"></br>
          <br className="privacy-text40"></br>
          <span className="privacy-text41">Your Rights</span>
          <br className="privacy-text42"></br>
          <span>
            As we do not collect any personal information, you do not have any
            rights under the General Data Protection Regulation (GDPR) with
            respect to your personal information.
          </span>
          <br className="privacy-text44"></br>
          <br className="privacy-text45"></br>
          <span className="privacy-text46">Changes to the Privacy Policy</span>
          <br className="privacy-text47"></br>
          <span>
            Although we do not collect any personal information, we reserve the
            right to update this Privacy Policy from time to time. Any updates
            will be posted on our website.
          </span>
          <br className="privacy-text49"></br>
          <br className="privacy-text50"></br>
          <span className="privacy-text51">Sæson Terms of Service</span>
          <br className="privacy-text52"></br>
          <span>
            The following terms and conditions govern all use of the Sæson
            website and all content, services, and products available at or
            through the website (taken together, the Website). The Website is
            owned and operated by Sæson. By accessing or using any part of the
            website, you agree to become bound by these terms and conditions. If
            you do not agree to all the terms and conditions, then you may not
            access the Website or use any services.
          </span>
          <br className="privacy-text54"></br>
          <br className="privacy-text55"></br>
          <span className="privacy-text56">Sæson Cookie Policy</span>
          <br className="privacy-text57"></br>
          <span>
            A cookie is a small text file that is stored on a user&apos;s
            computer or mobile device when they visit a website. Sæson does not
            use any cookies on our website.
          </span>
          <br className="privacy-text59"></br>
          <br className="privacy-text60"></br>
          <span className="privacy-text61">Sæson Disclaimer</span>
          <br className="privacy-text62"></br>
          <span>
            The information contained on the Sæson website is for general
            information purposes only. While we strive to keep the information
            up to date and correct, we make no representations or warranties of
            any kind, express or implied, about the completeness, accuracy,
            reliability, suitability or availability with respect to the website
            or the information, products, services, or related graphics
            contained on the website for any purpose. Any reliance you place on
            such information is therefore strictly at your own risk.
          </span>
          <br className="privacy-text64"></br>
          <br className="privacy-text65"></br>
          <span>
            If you have any questions or concerns about our Privacy Policy or
            our website, please do not hesitate to contact us.
          </span>
        </span>
        <a
          href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIsF669NqaLVo="
          target="_blank"
          rel="noreferrer noopener"
          className="privacy-button"
        >
          <span>
            <span>Enquiries</span>
            <span> 🥕</span>
          </span>
        </a>
      </div>
      <footer className="privacy-footer">
        <span className="privacy-text70">
          © 2023 SÆson dining. All Rights Reserved. VAT 43781979.
        </span>
        <Link to="/" className="privacy-navlink2">
          HOME
        </Link>
      </footer>
    </div>
  )
}

export default Privacy
