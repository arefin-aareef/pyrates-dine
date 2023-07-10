/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert";

function showAlert() {
  Swal({
    title: "Login Failed, Oops!!",
    text: "Check your email and password again!",
    icon: "error",
    button: "Close",
  });
}

const Login = () => {
  const { signIn, GoogleSignIn, gitHubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        showAlert();
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("google login");
    GoogleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch((error) => console.log(error.message));
  }

  return (
    <Container className="w-50 mx-auto p-2">
      <h3 className="my-4">Please Login!</h3>

      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="my-3" variant="info" type="submit">
          Login
        </Button>
        <br />
        <Form.Text>
          Do not have an account? <Link to="/register">Register</Link>
        </Form.Text>

        <Form.Text className="text-success"> </Form.Text>
        <Form.Text className="text-danger"> </Form.Text>
      </Form>
      <p className="text-center">Or</p>

      <div className="text-center my-3 d-flex flex-column">
        <Button onClick={handleGoogleSignIn} className="my-2" variant="info">
          <FaGoogle /> Login with Google
        </Button>
        <Button onClick={handleGitHubSignIn} variant="info" className="mb-5">
          <FaGithub /> Login with GitHub
        </Button>
      </div>
    </Container>
  );
};

export default Login;
