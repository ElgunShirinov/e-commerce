import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { FaHome, FaPhoneAlt, FaInfo } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15255.223842229227!2d-25.168947774167055!3d17.082141462194045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f090c171d6c8d%3A0xf2bc8dae7661491b!2sTabuadinha%2C%20Kabo-Verde!5e0!3m2!1saz!2s!4v1676739907237!5m2!1saz!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-5">
            <div className="row contact-inner-wrapper d-flex justify-content-between">
              <div className="col-12 col-lg-6 mb-3">
                <h3 className="contact-title mb-4">Contact</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-100 form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-6">
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <div className="fs-5">
                      <FaHome className="fs-5" />
                      </div>
                      <p className="mb-0">
                        33 New Montgomery St. Ste 750 San Francisco, CA, USA
                        94105
                      </p>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaPhoneAlt className="fs-5" />
                      <a href="tel:(+91)7-723-4608">(+91)7-723-4608</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdMail className="fs-5" />
                      <a href="mailto:demo@company.com">demo@company.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaInfo className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
