/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userImg from '../../assets/user.png'
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }

  return (
    <div>
      <Navbar bg="info" variant="light">
        <Container>
          <Link to="/" className="text-decoration-none"><Navbar.Brand className="fs-2 fw-semibold">Pyrates Dine</Navbar.Brand></Link>
          <Nav className="mx-auto">
            <ActiveLink to="/" className="">Home</ActiveLink>
            <ActiveLink to="/blog" className="">Blog</ActiveLink>
          </Nav>
          <Nav>
          {user && <Image 
            title={user.displayName ? user.displayName : user.email} 
            className="me-2" 
            style={{ width: '40px'}} 
            src={user.photoURL ? user.photoURL : userImg} 
            roundedCircle 
          />
}
            { user ?
              <Button onClick={handleLogOut} variant="dark">Logout</Button> :
              <Link to="/login"><Button variant="light">Login</Button></Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

<FaRegUserCircle className="me-2" style={{fontSize: '2rem'}} />