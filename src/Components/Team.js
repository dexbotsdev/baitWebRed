import React from "react";

import { Card, Row, Col, Container } from "react-bootstrap";
import team1 from "../Images/team1.png";
import team2 from "../Images/team2.png";
import team3 from "../Images/team3.png";
import team4 from "../Images/team4.png";
import team5 from "../Images/team5.png";
import team6 from "../Images/team6.png";
import twitter from "../Images/twitter.svg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ivxx",
      position:
        "Early Crypto adopter turned full-time Web3 professional. Also the founder of Degen Cave, a community of like-minded individuals who are passionate about everything Bitcoin.",
      image: team1,
      link: "https://twitter.com/freakye",
    },
    {
      id: 2,
      name: "Meta Gandhi",
      position:
        "7 years of digital marketing experience in 3 different markets combined with robust Web3 portfolio of working with top elite communities such as TBD, Embassy, Beasts.",
      image: team2,
      link: "https://twitter.com/metagandhi_?s=21",
    },
    {
      id: 4,
      name: "Easy Money",
      position:
        "Running a Home development company paired with plethora of Web3 experience as co-founder of Spesh alpha.",
      image: team3,
      link: "https://twitter.com/EasyMoney009",
    },
    {
      id: 3,
      name: "Texi",
      position:
        "HR professional and a dedicated Web3 enthusiast. Love knowing people, help building communities and grow my connections. Also a Mod at Renga Alpha.",
      image: team4,
      link: "https://twitter.com/Texi_3",
    },
    {
      id: 3,
      name: "Pxlstad",
      position:
        "13+ years of marketing and communications experience, graphic designer, pixel artist and Web3 project co-founder of Nifty Nuggets and Ordinal Geese.",
      image: team5,
      link: "https://twitter.com/pxlstad",
    },
    {
      id: 3,
      name: "Dexbomb",
      position:
        "Former Investment Banking & Private Equity executive with robust experience as collab manager in multiple communities.",
      image: team6,
      link: "https://twitter.com/Dexbomb118",
    },
  ];

  return (
    <div className="py-5 " id="Team" data-aos="fade-up">
      {" "}
      <Container>
        {" "}
        <div>
          <p className="problemP">TEAM</p>
          <h2 className="echoH2">
            <span style={{ color: "#ff623e" }}>Our</span> Team
          </h2>
          <Row className="justify-content-center mt-5">
            {teamMembers.map((member) => (
              <Col key={member.id} xs={12} md={6} lg={4}>
                <Card className="mb-4 border-none teamcard">
                  <Card.Img variant="top" src={member.image} />
                  <Card.Body>
                    <p className="teamP">{member.name}</p>
                    <p className="teamp2">{member.position}</p>
                    <a href={member.link} target="_blank">
                      <img
                        src={twitter}
                        className="text-center d-flex m-auto icon"
                      />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Team;
