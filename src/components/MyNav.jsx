import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MyImg from "../img/LOGO.png";
import { getAuth, signOut } from "firebase/auth";

function MyNav() {
  let history = useHistory();
  const auth = getAuth();
  return (
    <>
      <Navbar bg="warning" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => {
              history.push("/");
            }}
          >
            <img src={MyImg} alt="logo" style={{ width: 50 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link style={{color:'black'}}
                onClick={() => {
                  history.push("/managers");
                }}
              >
                Managers
              </Nav.Link>

              <Nav.Link style={{color:'black'}}
                onClick={() => {
                  history.push("/requests");
                }}
              >
                Requests
              </Nav.Link>

              <Nav.Link style={{color:'black'}}
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                      console.log("done");
                      history.push("/");
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
