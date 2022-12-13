import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import beminimalist from "../../Assets/Projects/beminimalist.png";
import DriveUCarWash from "../../Assets/Projects/DriveuCarWash.png";
import driveuMain from "../../Assets/Projects/driveuMain.png";
import koovs from "../../Assets/Projects/koovs.png";

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
              imgPath={driveuMain}
              isBlog={false}
              title="DriveU"
              description="Created a new version of the DriveU website and incorporate a Driver Booking mechanism. developed with React.js, BaseWeb.design, and Redux. possess features that let users keep track of driver reservations, FASTag recharges, car washes, and roadside assistance."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://driveu.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DriveUCarWash}
              isBlog={false}
              title="DriveU Car Wash"
              description="DriveU Car Wash is a service newly introduced which is going to change the way people think about car cleaning. Developed with ViteJS, TailwindCSS."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://driveu.in/wash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={koovs}
              isBlog={false}
              title="Koovs"
              description="Koovs is an E-Commerce platform where you can buy clothing products for men and women. This is koovs clone me and my team made using VanillaJS and Localstorage. This is a Clone of Koovs.com"
              ghLink="https://github.com/hmehta051/koovs"
              demoLink="https://dimple06varshney.github.io/koovs/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beminimalist}
              isBlog={false}
              title="Beminimalist"
              description="This is a Full Function Website that allow user to buy skincare products with great user interface with minimalist feature. This clone made of Ejs, ExpressJS, MongoDB, NodeJS and CSS"
              ghLink="https://github.com/hmehta051/Beminimalist-Clone-website"
              demoLink="https://beminimalistclone.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
