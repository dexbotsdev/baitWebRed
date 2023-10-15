import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo_6.png";
import discord from "../Images/Telegram_logo.svg";
import twitter from "../Images/twitter.svg";
function NavbarTop() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="light"
      style={{ paddingTop: "20px" }}
      className="heightAd navmx "
      sticky="top"
    >
      <Container fluid className="p-0">
        <Navbar.Brand href="#home"> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="mapmob">
          <Nav className="mx-auto gapnav ">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#Universe">Universe</Nav.Link>
            <Nav.Link href="#Marketing">Marketing</Nav.Link>
            <Nav.Link href="https://master--baitwhitelist.netlify.app/">Airdrop</Nav.Link>
            <Nav.Link href="#Roadmap">Roadmap</Nav.Link> 
          </Nav>
          <Nav className="navicon">
            <Nav.Link href="#deets">
              <a href="https://twitter.com/baitthisisbait" target="_blank">
                <img className="" src={twitter} style={{ width: "40px" }} />
              </a>
            </Nav.Link>
            <Nav.Link href="https://t.me/baitthisisbait">
              <img className="" src={discord} style={{ width: "40px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
