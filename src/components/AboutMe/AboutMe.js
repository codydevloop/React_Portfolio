import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./AboutMe.css";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Img from "react-bootstrap/Img";
// import Row from "react-bootstrap/Row";
import Cody from "../../assets/CodyPortfolio.png"

const Header = () => {
    return (
        <>
            <Container >
                <h1><a class="display-4" href="index.html">Hello, I'm Cody Hoover</a></h1>
                <h2>- A driven IT professional, representing the East Valley, Single Dad, Developer genre.  My <Link to="/Portfolio">Portfolio</Link> was built to showcase some of my favorite projects.</h2>



            </Container >


            <Container>
                <div>
                    <Card className="custom-card">
                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                    <Card.Img md={4} src={Cody} alt="photo of cody hoover" />
                                </Col>
                                <Col md={8}>
                                    <h4>
                                        <span className="popularTeal">class</span>
                                        <span className="popularGreen"> CodyHoover</span>
                                        <span className="curlyClass"> {"{"}</span>
                                    </h4>
                                    <h4 className="ti">
                                        <span className="functionBrackets">constructor</span>
                                        <span className="purpleBrackets"> ()</span>
                                        <span className="purpleCurly"> {"{"}</span>
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.bootcampMERN</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`Completion Date 8/21/20`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.frontEnd</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`React, JavaScript, Bootstrap, Spring`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>

                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.backend</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`Node/Express, SQL, MongoDB`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.apiDesign</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`Create, Read, Update, Delete`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.teamIpsum</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`Bacon Ipsum`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.tools</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`VS Code, Chrome DevTools, GitHub,`</span>
                                        <span className="equalsWhite">;</span> 
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.toolsSoMany</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`Google-Fu, Heroku, NPM, AWS`</span>
                                        <span className="equalsWhite">;</span> 
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.educationStyle</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`Faster in groups and with visuals`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>
                                    <h4 className="ti2">
                                        <span className="popularTeal">this</span>
                                        <span className="objpropKey">.lifeGoal#7</span>
                                        <span className="equalsWhite"> = </span>
                                        <span className="objpropVal">`Spend my summers coding in Canada`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>  
                                    <h4 className="ti2"><span className="purpleCurly"> {"}"}</span></h4>                              
                                    <h4 className="curlyClass"> {"}"}</h4>








                                </Col>
                            </Row>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>


                    </Card>
                </div>
            </Container>

        </>
    )
};

export default Header;