'use client'
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';


const Sidebar = () => {

 
 return (
    <div className={styles.sidebar}>
        <Link href="/">HOME</Link>
        <Link className={styles.active} href="/portfolio">PORTFOLIO</Link>
        <a href="#contact">CONTACT</a>  
        <a href="/#about">ABOUT</a>
        <Link href="/#about">SKILLS</Link>
        <h3 className={styles.contact} id="contact">CONTACT</h3>
            <div className={styles.details}>
              <div className={styles.icons}>
                <img className={styles.img} src="/icons/phone-call.svg" /> 
                <p><a href="tel:+2348062356261">+2348062356261</a></p>
              </div>
              <div className={styles.icons}>
                  <img className={styles.img}  src="/icons/envelope (1).svg" /> 
                  <p><a href="mailto:joy.aruku13@gmail.com">joy.gold13@gmail.com</a></p>
              </div>
              <div className={styles.icons}>
                 <img className={styles.img}  src="/icons/linkedin.svg" /> 
                 <p><a target= "_blank" href="https://www.linkedin.com/in/joy-aruku-a23361195/">Linkedin Profile</a></p>
              </div>
              <div className={styles.icons}>
              <img className={styles.img}  src="/icons/github.svg" /> 
              <p><a target= "_blank" href="https://github.com/Dev-JoyA?tab=repositories">Github repository</a></p>
              </div>
                
               
                
             </div>
    </div>
  )
}

export default Sidebar