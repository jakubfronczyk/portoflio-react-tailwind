import React from 'react'
import classes from './About.module.scss'
import img3 from './../../assets/img3.jpg'

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
                    <p>Arcu odio ut sem nulla pharetra diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.Arcu odio ut sem nulla pharetra diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.Arcu odio ut sem nulla pharetra diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
                </div>
                <figure className={classes.about__content__img}>
                    <img src={img3} alt="" />
                    <svg width="100%" height="100%">
                        <rect fill="none" stroke='#fff' width="100%" height="100%" />
                    </svg>
                </figure>
            </div>
        </div>
    )
}

export default About