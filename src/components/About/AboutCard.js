import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemendra Maheta </span>
            from <span className="purple"> Bangalore, India.&nbsp;</span>
            I enjoy creating fully functional websites and web applications.
            <br />
            <br />I enjoy taking complex problems and turning them into simple
            and beautiful websites. I also love the logic and structure of
            coding and always strive to write elegant and clean code. When I'm
            not coding, you'll find me in gaming 🎮 or playing Chess ♚.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In Life be like rainbow because world is full of colors"{" "}
          </p>
          <footer className="blockquote-footer">Hemendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
