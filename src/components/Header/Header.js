import React from "react"
import "./Header.css";

const Header = () => {
    return (
    <>
        <div class="flexbox-container top-nav">
        <div class="flexbox-item flexbox-item-navright">
            <div class="flexbox-item flexbox-item-naviconsonly">
                <a href="https://www.linkedin.com/in/codydevloop" target="_blank"><i
                        class="fab fa-linkedin fa-3x"></i></a>
                <a href="./assets/CodyH_Resume.pdf" target="_blank"><i class="fas fa-file-pdf fa-3x"></i></a>
                <a href="https://github.com/codydevloop" target="_blank"><i class="fab fa-github-square fa-3x"></i></a>
            </div>

            <div class="flexbox-item flexbox-item-emailinfo">
                <div class="flexbox-item flexbox-item-phoneinfo">
                    <a href="mailto:codyjhoover@gmail.com" target="_blank"><i class="fas fa-envelope fa-1x"></i>
                        codyjhoover@gmail.com</a>
                </div>
            </div>

            <div class="flexbox-item flexbox-item-phoneinfo">
                <a href="https://github.com/codydevloop" target="_blank"><i class="fas fa-phone-square-alt fa-1x"></i>
                    480.823.6208</a>
            </div>
        </div>
    </div>
    </>

    )
};

export default Header;