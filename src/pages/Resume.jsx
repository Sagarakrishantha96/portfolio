import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SE from "../assets/SE.jpg";
import Tilt from "react-parallax-tilt";

import Particle from "../components/Particle";
// import pdf from "../assets/Sagara_Krishantha.pdf";

// import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/Sagara_Krishantha.pdf`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1kcCscHwFEl1NfJP_ARCVWivTAoNWD1ea/view?usp=share_link"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;View CV
          </Button>
        </Row>

        <center>
          <Col md={5} className="myAvtar">
            <Tilt>
              <center>
                <img src={SE} className="img-fluid" alt="avatar" />
              </center>
            </Tilt>
          </Col>
        </center>
      </Container>
    </div>
  );
};

export default Resume;
