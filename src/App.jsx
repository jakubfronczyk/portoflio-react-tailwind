import {  Fragment, useState } from 'react'
import Header from './components/Header/Header'
import First from './components/First/First'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import classes from './App.module.scss'



function App() {

  return (
    <Fragment>
        <Header />
      <div className={classes.wrapper}>
        <First />
        <About />
        <Projects />
        <Contact />
      </div>
    </Fragment>
          
  )
}

export default App
