import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container >
            <h1><a class="display-4" href="index.html">Hello, I'm Cody Hoover</a></h1>
            <h2>- A driven IT professional, representing the East Valley, Single Dad, Developer genre.  My <Link to="/Portfolio">Portfolio</Link> was built to showcase some of my favorite projects.</h2>

        </Container>

    )
};

export default Header;