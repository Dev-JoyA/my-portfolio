'use client'
import React from 'react'
import styles from './page.module.css'

const Intro = ({onClick}) => {
  return (
    <div>
        <h1 className={styles.h1}>Hey, I’m Joy Aruku and I am a Full-Stack Software Engineer</h1>
          <div className={styles.aboutBtn}>
              <img src="/Group 6.png" className={styles.dropDown}/>
              <button className={styles.button}>ABOUT ME</button> 
          </div>
    </div>
  )
}

export default Intro