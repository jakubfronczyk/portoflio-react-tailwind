import React from 'react'
import classes from './Projects.module.scss'
import img1 from './../../assets/icons/css.png'


const Projects = () => {
    return (
        <div className={classes.projects}>
            <div className={classes.projects__content}>
                <h1><span>Check out</span> my work.</h1>
                <div className={classes.projects__content__projects}>
                    <div className={classes.projects__content__projects__project}>
                        <div className={classes.projects__content__projects__project__img}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={classes.projects__content__projects__project__title}>
                            <h3>Nazwa projektu</h3>
                            <a href='/' alt="">costam.costam.com</a>
                        </div>
                    </div>
                    <div className={classes.projects__content__projects__project}>
                        <div className={classes.projects__content__projects__project__img}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={classes.projects__content__projects__project__title}>
                            <h3>Nazwa projektu</h3>
                            <a href='/' alt="">costam.costam.com</a>
                        </div>
                    </div>
                    <div className={classes.projects__content__projects__project}>
                        <div className={classes.projects__content__projects__project__img}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={classes.projects__content__projects__project__title}>
                            <h3>Nazwa projektu</h3>
                            <a href='/' alt="">costam.costam.com</a>
                        </div>
                    </div>
                    <div className={classes.projects__content__projects__project}>
                        <div className={classes.projects__content__projects__project__img}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={classes.projects__content__projects__project__title}>
                            <h3>Nazwa projektu</h3>
                            <a href='/' alt="">costam.costam.com</a>
                        </div>
                    </div>
                    <div className={classes.projects__content__projects__project}>
                        <div className={classes.projects__content__projects__project__img}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={classes.projects__content__projects__project__title}>
                            <h3>Nazwa projektu</h3>
                            <a href='/' alt="">costam.costam.com</a>
                        </div>
                    </div>
                    <div className={classes.projects__content__projects__project}>
                        <div className={classes.projects__content__projects__project__img}>
                            <img src={img1} alt="" />
                        </div>
                        <div className={classes.projects__content__projects__project__title}>
                            <h3>Nazwa projektu</h3>
                            <a href='/' alt="">costam.costam.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects