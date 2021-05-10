import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/ashanth_pic.jpg'
import Button from 'react-bootstrap/Button';

import './about.style.css'


const About = () => {
  return(
    <div id='about'>
    <div className='about'>
      <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
      <Container>
        <Row className='pt-3 pb-5 align-items-center'>
        {/* Profile pic */}
          <Col xs={12} md={6}>
            <Row className='justify-content-center mb-2 mr-2'>
              <Image className='profile justify-content-end' alt='profile' src={Profile} thumbnail fluid/>
            </Row>
          </Col>
          {/* About me Description */}
          <Col xs={12} md={6}>
            <Row className=" align-items-start p-2 my-details rounded">
              Hi there! I am <strong>&nbsp;Ashanth Manoranjithan</strong>
              <br />A passionate Data scientist and programmer. I have experience with automation and data analysis using Python and machine learning.
              <br />
              In 2020, I successfully completed my Engineering with specialization in Data science.
              <br />
              My goal is to convert data into actionable insights for leaders with the best level of quality and service to them.
              <br />I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
              <br /> <br />
              <Col className="d-flex justify-content-center flex-wrap">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a href="https://drive.google.com/file/d/1DrN3lTpCsX_pcLMUNhGHht3HokBNhAlr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/AshMano" target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/mashanth/" target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )

}

export default About
