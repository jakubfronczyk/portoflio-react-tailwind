import React from 'react'
import classes from './About.module.scss'

import img3 from './../../assets/img3.jpg'
import icon1 from './../../assets/icons/html.png'
import icon2 from './../../assets/icons/css.png'
import icon3 from './../../assets/icons/js.png'
import icon4 from './../../assets/icons/react.png'
import icon5 from './../../assets/icons/typescript.png'
import icon6 from './../../assets/icons/sass.png'
import icon7 from './../../assets/icons/git.png'
import icon8 from './../../assets/icons/figma.png'

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.about__content}>
                <div className={classes.about__content__description}>
                    <h1>I desing <span>& build websites.</span></h1>
                    <h2>About me.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
                    <p>Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Molestie at elementum eu facilisis. Massa tincidunt dui ut ornare. Semper viverra nam libero justo. Lectus magna fringilla urna porttitor rhoncus dolor. Enim sit amet venenatis urna. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. </p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <div className={classes.about__content__description_skills}>
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                        <img src={icon5} alt="" />
                        <img src={icon6} alt="" />
                        <img src={icon7} alt="" />
                        <img src={icon8} alt="" />
                    </div>
                </div>
                <figure className={classes.about__content__img}>
                    <img src={img3} alt="" />
                    <svg width="100%" height="100%">
                        <rect fill="none" stroke='#fff' stroke-width='4' width="100%" height="100%" />
                    </svg>
                </figure>
            </div>
        </div>
    )
}

export default About