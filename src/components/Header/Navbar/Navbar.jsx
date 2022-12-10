import React from 'react'
import classes from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.navigation__content}>
                <ol className={classes.navigation__content__pages}>
                    <li className={classes.navigation__content__page}>
                        <div className={classes.navigation__content__page__name}>About</div>
                        <div className={classes.navigation__content__page__number}>1</div>
                    </li>
                    <li className={classes.navigation__content__page}>
                        <div className={classes.navigation__content__page__name}>Projects</div>
                        <div className={classes.navigation__content__page__number}>2</div>
                    </li>
                    <li className={classes.navigation__content__page}>
                        <div className={classes.navigation__content__page__name}>Contact</div>
                        <div className={classes.navigation__content__page__number}>3</div>
                    </li>
                    <li className={classes.navigation__content__page}>
                        <div className={classes.navigation__content__page__name}>Resume</div>
                        <div className={classes.navigation__content__page__number}>4</div>
                    </li>
                </ol>
                <div className={classes.navigation__content__title}>
                    Index
                </div>
            </div>
        </nav>
    )
}

export default Navbar