import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import mission from "../Images/bait.png";
import Block from "../Images/78Block.png";
import Blocktop from "../Images/blocktop.svg";

import discord from "../Images/discord.svg";
import twitter from "../Images/twitter.svg";
const Mission = () => {
  return (
    <div id="AboutUs" className="mt-5  pt-5">
      <Container fluid className="maxset px-5">
        <Row className="p-0">
          <Col md={6} data-aos="fade-in">
            <div className="marginAdjustm">
              {" "}
              <img src={Blocktop} className="blockktop mb-3 mobcenter" />
              <h2 className="missionh2">
                About <span style={{ color: "#ff8f03" }}>Us </span>
              </h2>
              <p className="missionP">
              Shibraium Plays: Earn rewards by playing games with SHIB token. Join us to reshape gaming through blockchain innovation.
              </p>
              <Nav className="navicon p-0 m-0">
                <Nav.Link href="#deets" className="p-0 pl-1  ">
                  <a href="https://twitter.com/MiniaturesBTC" target="_blank">
                    <img
                      className="icon p-1 mr-2"
                      src={twitter}
                      style={{ width: "40px" }}
                    />
                  </a>
                </Nav.Link>
                <Nav.Link href="#deets" className="p-0 mr-2">
                  <img
                    className="icon p-1 m-0"
                    src={discord}
                    style={{ width: "40px" }}
                  />
                </Nav.Link>
              </Nav>
            </div>
          </Col>

          <Col md={6} data-aos="fade-out">
            <img src={mission} className="missionImg moving-div" />
          </Col>
        </Row>
        <Row className="p-0 mt-5 mobile-dir">
          <Col md={6} data-aos="fade-out">
            <img src={Block} className="missionImg moving-div" />
          </Col>
          <Col md={6} data-aos="fade-in">
            <div className="marginAdjustm">
              <img src={Blocktop} className="blockktop mb-3 mobcenter" />{" "}
              <h2 className="missionh2">
                <span style={{ color: "#ff8f03" }}>$SHIB  </span>
                MISSION
              </h2>
              <p className="missionP">
              Shibraium Plays: Turning Gaming into Gains, One Doge at a Time – Wow, Much Play, So Earn, Such Fun!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;
