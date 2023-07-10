/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-info text-dark">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">Connect With Us</h5>
            <div className="d-flex mt-4">
              <a href="#" className="me-4">
                <FaGoogle />
              </a>
              <a href="#" className="me-4">
                <FaFacebook />
              </a>
              <a href="#" className="me-4">
                <FaTwitter />
              </a>
              <a href="#" className="me-4">
                <FaInstagram />
              </a>
              <a href="#" className="me-4">
                <FaLinkedin />
              </a>
              <a href="#" className="me-4">
                <FaPinterest />
              </a>
            </div>
            <div className="mt-4">
                <h5 className="mb-3">Address</h5>
                <p className="mb-0">123 Main St.</p>
                <p className="mb-0">Anytown, USA 12345</p>
                <p className="mb-0">Phone: 555-123-4567</p>
                <p>Email: info@pyrates-dine.com</p>
            </div>
            <p> &copy; <a href="https://github.com/arefin-aareef" target="_blank" className='text-decoration-none text-dark'>Arefin</a> | 2022 </p>

          </div>
          <div className="col-md-6">
            <h5 className="mb-3">Contact Us</h5>
            <form>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group mb-3">
                <textarea className="form-control" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

