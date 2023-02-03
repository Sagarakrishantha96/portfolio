import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import BookingApp from "../assets/projects/BookingApp.png";
import E_commerceApp from "../assets/projects/E_commerceApp.png";
import Netflix_clone from "../assets/projects/Netflix_clone.jpg";
import DeltaMAX_AdminPanel from "../assets/projects/DeltaMAX_AdminPanel.png";
import Tiktok_clone from "../assets/projects/Tiktok_clone.jpg";
import Tinder_clone from "../assets/projects/Tinder_clone.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={BookingApp}
              isBlog={false}
              title="Booking App"
              description="This is MERN stack hotel reservation app project. React Node.js MongoDB full-stack app using Context API, JWT, custom hooks, and React calendar.It allows users to reserve a room, check in or check out of their rooms, views the status of their reservations, track expenses, and much more. Hotel booking software has many features that can be used to make the entire process easy for both hotels and customers."
              ghLink="https://github.com/Sagarakrishantha96/Bookingapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_commerceApp}
              isBlog={false}
              title="E-commerce App"
              description="This e-commerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, and products. The user interface is designed for efficient product management and includes a complete purchase process. Stripe API is integrated to handle customer payments. The website uses  Firebase as the database."
              ghLink="https://github.com/Sagarakrishantha96/react-redux"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix_clone} 
              isBlog={false}
              title="Netflix-clone App"
              description="The project is a clone of the popular streaming service Netflix, built using React, Firebase, and Material-UI. The goal of the project is to replicate the functionality and user experience of Netflix, allowing users to watch an extensive selection of TV shows, movies, anime, documentaries, and other content on their internet-connected devices. The use of Firebase provides the necessary backend infrastructure, while Material-UI is used to create a visually appealing and intuitive user interface."
              ghLink="https://github.com/Sagarakrishantha96/Netflix-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeltaMAX_AdminPanel}
              isBlog={false}
              title="DeltaMAX APP"
              description="The Delta Max app is a web application with an Admin Panel that uses React, Node.js, and MongoDB. The Admin Panel allows CRUD operations and is used to design and manage fitness challenges for the Delta Max app. The challenges are based on users' fitness activities such as steps, calories burned, and exercises, and the results are calculated as NFTs."
              ghLink="https://github.com/Sagarakrishantha96/Delta-max-fitness-admin-panel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tiktok_clone}
              isBlog={false}
              title="Tiktok-clone App"
              description="The project is a clone of the popular social media platform TikTok, built using React, Firebase, and Material-UI. The goal of the project is to replicate the functionality and user experience of TikTok, allowing users to create, share, and discover short videos. Firebase provides the necessary backend infrastructure, while Material-UI is used to create a visually appealing and intuitive user interface."
              ghLink="https://github.com/Sagarakrishantha96/Tiktok-app-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tinder_clone}
              isBlog={false}
              title="Tinder-clone App"
              description="The project is a clone of the popular dating platform Tinder, built using React, Firebase, and Material-UI. Tinder is a global online dating platform where you can meet new people, expand your social network, or meet locals in 190+ countries. The use of Firebase provides the necessary backend infrastructure, while Material-UI is used to create a visually appealing and intuitive user interface."
              ghLink="https://github.com/Sagarakrishantha96/Tinder-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects