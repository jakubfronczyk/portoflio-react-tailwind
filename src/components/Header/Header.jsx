import React, { useState, useRef, useEffect } from 'react'
import classes from './Header.module.scss'
import Navbar from './Navbar/Navbar'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IconContext } from 'react-icons';


const Header = () => {

    const [sidebar, setSidebar] = useState(false)
    const btnRef = useRef()

    const handleSidebar = () => {
        setSidebar(prevSidebar => !prevSidebar)
        console.log(sidebar)
    } 

    // useEffect(() => {
    
    //     const closeNavbar = e => {
    //         if (e.path[0] != btnRef.current){
    //             setSidebar(prevSidebar => !prevSidebar)
    //         }
    //     }

    //     document.body.addEventListener('click', closeNavbar)

    //     return () => {
    //         document.body.removeEventListener('click', closeNavbar)
    //     }
    // }, [])
    

    return (
        <>
        <header className={classes.header}>
                <button ref={btnRef} className={classes.header__btn} onClick={handleSidebar}>
                    <div className={classes.header__btn__dot}></div>
                    <div className={classes.header__btn__dot}></div>
                    <div className={classes.header__btn__dot}></div>
                </button>
            <div className={classes.header__span}>
                <span>Jakub fronczyk</span>
            </div>
        </header>
        <aside className={`${sidebar ? classes.active : classes.inactive }`}>
        <Navbar />
        </aside>
        </>
    )
}

export default Header