import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        color="black"
        style={{ background: "#a6acec" }}
      >
        <Link style={{ color: "black" }} to="/addStudent">
          E-Register
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Students" id="collasible-nav-dropdown">
              <Link to="/addStudent">
                <NavDropdown.Item href="/addStudent">
                  Add Student
                </NavDropdown.Item>
              </Link>
              <Link to="/showStudents">
                <NavDropdown.Item href="/">Show all students</NavDropdown.Item>
              </Link>
              <Link to="/findStudent">
                <NavDropdown.Item href="/">Find student</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
            </NavDropdown>
            <Link to="/showSubject">
              <Nav.Link href="/">Subject</Nav.Link>
            </Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
