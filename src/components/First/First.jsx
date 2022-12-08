import React from 'react'
import classes from './First.module.scss'
import img1 from './../../assets/img1.jpg'

const First = () => {
    return (
        <div className={classes.home}>
            <div className={classes.home__content}>
                <figure className={classes.home__content__img}>
                    <img src={img1} alt="" />
                    <svg width="100%" height="100%">
                        <rect fill="none" stroke='#fff' width="100%" height="100%" />
                    </svg>
                </figure>
                <div className={classes.home__content__description}>
                    <h2>Hello. </h2>
                    <h2>I am Jakub Fronczyk</h2>
                    <h1 className={classes.home__content__description__prof}>Frontend Developer.</h1>
                    <p>I like to fuck your mom, not only. Create and desing websites, stuff like that. I don’t like cocaine. I fuckin’ love it.</p>
                </div>
            </div>

        </div>
    )
}

export default First