import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.svg" alt="newsletter" width={"35px"} />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-12 col-lg-7">
            <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <h4 className='text-white mb-4 text-decoration-underline text-center' >Contact Us</h4>
              <div className=' d-flex justify-content-center flex-column align-items-center'>
                <address className='text-white fs-6'>
                  Hno : 277 Near Vill chopal,
                  <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a href="tel:+91 8264954234" className="mt-3 d-block mb-1 text-white">
                  +91 8264954234
                </a>
                <a href="mailto:navdeepdahiya753@gmail.com" className="mt-2 d-block mb-2 text-white">
                  navdeepdahiya753@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="https://twitter.com/">
                    <BsTwitter   className='fs-4'/>
                  </a>
                  <a className='text-white' href="https://www.facebook.com/">
                    <BsFacebook  className='fs-4'/>
                  </a>
                  <a className='text-white' href="https://www.pinterest.com/">
                    <BsPinterest className='fs-4'/>
                  </a>
                  <a className='text-white' href="https://www.instagram.com/">
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href="https://www.youtube.com/">
                    <BsYoutube   className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <h4 className='text-white mb-4 text-decoration-underline text-center'>Information</h4>
              <div className='footer-links flex-column d-flex align-items-center'>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <h4 className='text-white mb-4 text-decoration-underline text-center'>Account</h4>
              <div className='footer-links d-flex flex-column align-items-center'>
                <Link to="/contact" className='text-white py-2 mb-1'>About Us</Link>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <h4 className='text-white mb-4 text-decoration-underline text-center'>Quick Links</h4>
              <div className='footer-links d-flex flex-column align-items-center'>
                <Link to="/store" className='text-white py-2 mb-1'>Laptops</Link>
                <Link to="/store" className='text-white py-2 mb-1'>Headphones</Link>
                <Link to="/store" className='text-white py-2 mb-1'>Tablets</Link>
                <Link to="/store" className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer