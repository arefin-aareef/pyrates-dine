/* eslint-disable no-unused-vars */
import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import errorImg from '../../assets/error.jpg'

const ErrorPage = () => {
  return (

    <div className="d-flex mt-5 pt-5">
        <div className="col-6 d-flex align-items-center justify-content-center">
        <Image className="w-50" src={errorImg}></Image>
        </div>

        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
        <h1 className="fs-1 text-danger">Error 404</h1>
        <p className="fs-4 my-4">
          Oops! The page you are looking for could not be found.
        </p>
        <Link className="fs-3 text-decoration-none" to="/">
          Go back to home
        </Link>
      </div>
    </div>

    
  );
};

export default ErrorPage;
