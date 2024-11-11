import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Rohit Kukreja </span>
            from <span className="purple"> Maharashtra, Sangli, India.</span>
            <br />
            A final-year B.Tech student specializing in Computer Science and Engineering with a keen interest in Blockchain Technology and Data Analytics, Current CGPA:- 8.57
            <br />
            I have completed my SSC from Martins English School, Sangli. Percentage:- 82.20%
           <br/>
            I have completed my HSC from Smt. Kasturbai Gandhi Walchand College, Sangli Percentage:- 87.50%
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Listeining Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Early Success is crime.... Good things take time!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
