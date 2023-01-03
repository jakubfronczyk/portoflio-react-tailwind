import React from 'react'
import classes from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={classes.contact}>
            <div className={classes.contact__content}>
                <div className={classes.contact__content__form}>
                    <div className={classes.contact__content__form__article}>
                        <h1>Send me a message.</h1>
                        <p>Got a question or proposal? Go ahead.</p>
                    </div>
                    <form action="" method="post" className={classes.contact__content__form__inner}>
                        <div className={classes.contact__content__form__inner__personal}>
                            <div className={classes.contact__content__form__inner__personal__name}>
                                <label htmlFor="">Your Name</label>
                                <input type="text" placeholder="Enter your name" required="required"/>
                            </div>
                            <div className={classes.contact__content__form__inner__personal__email}>
                                <label htmlFor="">Email Address</label>
                                <input type="text" placeholder="Enter your email address" required="required"/>
                            </div>
                        </div>
                        <div className={classes.contact__content__form__inner__message}>
                            <div className={classes.contact__content__form__inner__message__inner}>
                                <label htmlFor="">Your Message</label>
                                <input type="text" placeholder="Enter your message" required="required"/>
                            </div>
                        </div>
                        <button>Shoot</button>
                    </form>
                </div>
                <div className={classes.contact__content__links}>
                    <div>
                    <a href="/">EMAIL@GMAIL.COM</a>
                    </div>
                    <div>
                        <ol>
                            <li>
                                <a href="/">TW</a>
                            </li>
                            <li>
                                <a href="/">LN</a>
                            </li>
                            <li>
                                <a href="/">GH</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact