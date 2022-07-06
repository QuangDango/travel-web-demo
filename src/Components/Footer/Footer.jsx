import React from 'react'
import 'Footer.css'

const Footer = () => {
  return (
    <footer className='footer-wrap'>
      <div className="grid wide footer-layout">
        <div className="row groups">
          <div className="col l-3 m-6 c-12 group-links">
            <div className="group-name">
              <h3>
                quick links
              </h3>
            </div>
            <ul className="group-links-list">
              <li className="group-link-item">
                <a className='item-link' href="">
                  home
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  about
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  shop
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  packages
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  reviews
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-3 m-6 c-12 group-links">
            <div className="group-name">
              <h3>
                extra links
              </h3>
            </div>
            <ul className="group-links-list">
              <li className="group-link-item">
                <a className='item-link' href="">
                  my account
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  my order
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  my wishlist
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  ask questions
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  terms of use
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-3 m-6 c-12 group-links">
            <div className="group-name">
              <h3>
                contact info
              </h3>
            </div>
            <ul className="group-links-list">
              <li className="group-link-item">
                <a className='item-link' href="">
                  <i className="fa-solid fa-phone-flip"></i>
                  +123-456-7890
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  <i className="fa-solid fa-phone-flip"></i>
                  +111-222-3333
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  <i className="fa-solid fa-envelope"></i>
                  <span>pkhgthlearnreacjs@gmail.com</span>
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                  <i className="fa-solid fa-map"></i>
                  mumbai, india - 400104
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-3 m-6 c-12 group-links">
            <div className="group-name">
              <h3>
                follow us
              </h3>
            </div>
            <ul className="group-links-list">
              <li className="group-link-item">
                <a className='item-link' href="">
                <i className="fa-brands fa-facebook-f"></i>
                  facebook
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                <i className="fa-brands fa-twitter"></i>
                  twitter
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                <i className="fa-brands fa-instagram"></i>
                  instagram
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                <i className="fa-brands fa-linkedin"></i>
                  linkedin
                </a>
              </li>
              <li className="group-link-item">
                <a className='item-link' href="">
                <i className="fa-brands fa-github"></i>
                  github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row credit">
          cover by&nbsp;
          <span>pkhgth learn reacjs</span>
          &nbsp;| all rights reserved!
        </div>
      </div>
    </footer>
  )
}

export default Footer