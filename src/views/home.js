import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Josephine</title>
        <meta property="og:title" content="Josephine" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b379a5ac-1043-4914-a29c-80b046c82f52/4d14a1e1-5919-4f89-8186-ed4df50ea2d0?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Header" className="home-header">
        <Link to="/" className="home-navlink1">
          <img alt="image" src="/s%C3%A6son-200h.png" className="home-logo" />
        </Link>
        <div className="home-social-media">
          <a
            href="https://www.linkedin.com/company/saeson/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-linked-in"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/saesondining/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-instagram"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-whats-app">
            <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
          </svg>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container2">
          <div className="home-container3">
            <h1 className="home-text10">
              <span>Vegetarian</span>
              <br></br>
            </h1>
            <h1 className="home-text13">
              <span>Catering &amp; </span>
              <br></br>
            </h1>
            <h1 className="home-text16">Private Dining</h1>
            <span className="home-text17">
              <span>
                At Sæson, we are passionate about tailored vegetarian catering
                &amp; private dining.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                We respect our ingredients, our suppliers, and our guests. Sæson
                is committed to providing an inclusive, welcoming atmosphere for
                all.
              </span>
              <br></br>
              <br></br>
              <span>
                Every dish takes pride in presenting only the highest-quality
                vegetarian cuisine.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-container4">
            <img
              alt="image"
              src="/image-from-rawpixel-id-11324960-png-600w.png"
              className="home-image"
            />
          </div>
        </div>
      </div>
      <div className="home-container5">
        <div className="home-container6">
          <Script
            html={`<script type="text/javascript" src="https://static.qwary.com/resources/sdk/qwary.sdk.v3.js"> </script>
<script>
window.qwarySettings = {
surveyId : '3Y6A066rNaDrV17TDvQBN6VHVe0P5jrX4A5rkh2LtZo=',
popupHeight : '500px',
popupWidth : '650px',
layout : 'micro_survey',
layoutType : 'dialog',
showLunchButton: false,
removeWidget: true,
removeWidgetOnClose: false,
buttonBackgroundColor : 'rgb(50, 68, 59)',
buttonColor : 'rgb(255, 255, 255)',
qwaryBranding: false,
};

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  document.getElementsByClassName("home-button").on('click',function(){
  qwary.survey();
  });
});
</script>`}
          ></Script>
        </div>
      </div>
      <footer className="home-footer">
        <span className="home-text26">
          © 2024 SÆson dining. All Rights Reserved. VAT 43781979.
        </span>
        <Link to="/privacy" className="home-navlink2">
          Privacy &amp; Cookies
        </Link>
      </footer>
    </div>
  )
}

export default Home
