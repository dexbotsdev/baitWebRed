/* eslint-disable no-console */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accord from "./Accord";

const Faq = () => {
  return (
    <div className="pb-5 pt-5">
      <Container className="mb-5">
        <Row data-aos="fade-right">
          <p className="problemP">FAQ</p>
          <h2 className="echoH2">
            Frequently Asked <br />{" "}
            <span style={{ color: "#ff8f03" }}>Questions</span>
          </h2>
          <Accord />
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
