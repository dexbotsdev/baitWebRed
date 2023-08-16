/* eslint-disable no-console */

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import lock from "../Images/lock.svg";
const Echosystem = () => {
  return (
    <div id="Universe" className="py-5">
      <div className="my-5">
        <p className="problemP ">Universe</p>
        <h2 className="echoH2">
          <span style={{ color: "#ff8f03" }}>The</span> Ecosystem
        </h2>
        <Container className="mt-5" data-aos="fade-up">
          <div className="mobileAdjust gap-4">
            <Card className="echocard cls">
              <Card.Body>
                <h2 className="marketboxH text-center">Buy/sell Tax</h2>
                <p className="coinP text-center">
                Buy and sell tax will be 0 forever.
                </p>
                <ul>
                  <li className="ul">BUY TAX:
</li>
                </ul>
                <p className="ulitem">0 % Buy tax</p>
                <ul>
                  <li className="ul">SELL TAX:</li>
                </ul>
                <p className="ulitem">0% Sell tax</p>
                <ul>
                  <li className="ul">RENOUNCE OWNERSHIP:</li>
                </ul>
                <p className="ulitem">THE ownership will be Renounced on Launch</p>
              </Card.Body>
            </Card>
            <Card className="margintopA echocard cls">
              <Card.Body>
                <h2 className="marketboxH text-center">$BAIT</h2>
                <p className="coinP text-center">
                  Native token powering the ecosystem with multiple use cases.
                </p>
                <p className="ulbelow">5M Total Supply</p>
                <ul className="echo2bullet">
                  <li>60% Presale  </li>
                  <li>30% Liquidity </li>
                  <li>10% Marketing</li>
                </ul>
                <p className="ulbelow mt-2">Use Cases</p>
                <button className="echobutton">
                  {" "}
                  <img src={lock} />
                  Locked
                </button>
              </Card.Body>
            </Card>
            <Card className="margintopA echocard cls">
              <Card.Body>
                <h2 className="marketboxH text-center">LIQUIDITY</h2>

                <p className="coinP text-center">
                100% of liquidity will be locked.
                </p>
                <p className="ulbelow mt-5">90% Of supply </p>
                <button className="echobutton">
                  {" "}
                  <img src={lock} />
                  Locked
                </button>
                <p className="ulbelow mt-3">10% of Marketing </p>
                <button className="echobutton mt-0">
                  {" "}
                  <img src={lock} />
                  Locked
                </button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Echosystem;
