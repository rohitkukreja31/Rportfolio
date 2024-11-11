import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DIGITAL WARRANTY CARD"
              description="Developed an Android application that offers a digital platform for managing warranty cards, enabling users to securely access and store their warranty information in electronic format. The app allows users to view, download, and organize their e-copies of warranty cards for various products, eliminating the need for physical documents. Using Android Studio, XML, JAVA, Firebase."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="PET PAL"
              description="An Android Application, the ultimate companion for all your pet care needs! PET PAL grants you exclusive access to expert guidance and an extensive array of resources spanning various facets of pet care. Using Android Studio, XML, JAVA, Forebase."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="FACE PART DETECT"
              description="It is a Python based project which can scan and detect the face parts of Human. It can detect various face parts like Eyes, Ears, Nose, Tounge. Usinh Python, OpenCV, Tkinter."
             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
