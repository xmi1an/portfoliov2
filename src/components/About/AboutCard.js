import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Milan Jadav </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I have completed Integrated MSc (MSc CA & IT).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              👉🏻 Playing Games 🎮
            </li>
            <li className="about-activity">
              👉🏻 Writing Coding Blogs 🧑🏻‍💻
            </li>
            <li className="about-activity">
              👉🏻 Anime 🙂
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
