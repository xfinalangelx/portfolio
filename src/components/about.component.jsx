import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import Profile from '../images/profile.jpg'
import './about.style.css'
import Button from 'react-bootstrap/Button'

const About = () => {
    return (
        <div id="about">
            <h1 className= "pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
              <Row className="pt-3 pb-5 align-items-center">
                {/*Profile pic*/}
                <Col xs = {12} md = {6}>
                  <Row className="justify-content-center mb-2 mr-2">
                    <div>
                    <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                    </div>
                  </Row>
                </Col>

                {/*About Me*/}
                <Col xs ={12} md = {6}>
                  <Row className="align-items-start p-2 my-details rounded">
                      {/*Decscription*/}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus non mi aliquam maximus. Sed placerat condimentum leo ut aliquam. Ut a dolor rutrum, iaculis massa id, congue neque. Curabitur tincidunt velit et dignissim bibendum. Cras a rutrum velit. Morbi suscipit quis augue quis hendrerit. Maecenas orci quam, laoreet laoreet elit viverra, commodo consequat massa. Nam tristique elit nec orci condimentum molestie. Nullam a scelerisque lorem. Proin vitae vehicula leo, a accumsan nisi. In et massa venenatis dui facilisis dapibus. Suspendisse consequat fermentum massa, nec congue velit lobortis nec. Morbi vel erat lacus. Sed id urna massa. Quisque id feugiat tellus.
                  </Row>

                  <Row>
                    {/*Buttons*/}
                    <Col className="d-flex justify-content-center flex-wrap">
                      {/*For Contact*/}
                      <div>
                        <a href="#contact">
                          <Button className="m-2" variant="outline-success">Contact</Button>
                        </a>
                      </div>

                      {/*For LinkedIn*/}
                      <div>
                        <a href="https://www.linkedin.com/in/teo-r-89763b118/" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-primary">LinkedIn</Button>
                        </a>
                      </div>

                      {/*For GitHub*/}
                      <div>
                        <a href="https://github.com/xfinalangelx" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-dark">GitHub</Button>
                        </a>
                      </div>

                      {/*For Socmed*/}
                      <div>
                        <a href="https://github.com/xfinalangelx" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-danger">Instagram</Button>
                        </a>
                      </div>

                    </Col>

                    <Col>
                    
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
        </div>
  );
};

export default About;
