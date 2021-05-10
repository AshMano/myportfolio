import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import L_BNP from "../../assets/img/experience/bnp.png";
import L_SPORTAGRAPH from "../../assets/img/experience/sporta.png";
import Tilt from "react-tilt";
import Jumbotron from "react-bootstrap/Jumbotron";

import "./experience.style.css";




const Experience = () => {
  return (
    <div id="experience">
          <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCES</h1>
          {/*JUMBOTRON highlights the box */}
          <Jumbotron className="jumbo-style">
            <Container>
              <Tilt options={{ max: 25 }}>
                <Card>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize" src={L_BNP} alt="Bnp logo" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center">Software Engineer</Card.Title>
                    </div>
                    <div>
                      <Card.Text className="text-center style">
                        <strong className="body-title-style ">Developer</strong>
                        <br />
                        <strong>Technology:</strong> Python, Selenium, Excel, Microsoft Access
                        <br />
                        <strong>Duration:</strong> March 2020 - September 2020
                        <br/>
                        <strong> Description </strong>
                        <ul className="text-left">
                          <li><strong>Developed</strong> automation system to create hundreds of user accessess that
                            increased efficiency and decreased working hours from 4 hours to 30 mins per task.
                          </li>
                          <li><strong>Provided</strong> application maintenance by fixing bugs and  improving the robustness of others script.
                          </li>
                          <li><strong>Performed</strong> extraction and manipulation of data from Excel files to verify data quality.</li>
                        </ul>


                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </Container>
          </Jumbotron>
          <Jumbotron className="jumbo-style">
            <Container>
              <Tilt options={{ max: 25 }}>
                <Card>
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize" src={L_SPORTAGRAPH} alt="Sportagraph logo" />
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center">Software Engineer</Card.Title>
                    </div>
                    <div>
                      <Card.Text className="text-center style">
                        <strong className="body-title-style ">Web Developer</strong>
                        <br />
                        <strong>Technology:</strong> Angular.js, MongoDB, JavaScript, AWS Rekognition Video
                        <br />
                        <strong>Duration:</strong> April 2019 - September 2019
                        <br/>
                        <strong> Description </strong>
                        <ul className="text-left">
                          <li><strong>Developed &amp; enhanced</strong> new interfaces to manage the subtitles of the Sportagraph video gallery in Agile environment.</li>
                          <li><strong>Developed</strong> a playbar that shows the user precisely what timestamp an element of the video appears with the AWS recognition video API.
                          </li>
                          <li><strong>Provided</strong> application maintenance by doing code reviews.
                          </li>
                          <li><strong>Performed</strong> CRUD operations on subtitles to load/ remove data according
                          to the business requirements.</li>
                        </ul>


                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </Container>
          </Jumbotron>
        </div>
  );
};

export default Experience;
