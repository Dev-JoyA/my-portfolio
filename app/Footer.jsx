import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <img src="/Combined Shape 2.svg"/>  
            </div>
            <div id = {styles.myDisplay}>
                <nav className ={styles.footerLinks} >
                    <ul>
                    <li><Link className={styles.footerLinksColor} href="/">Home</Link></li>
                    <li><Link className={styles.footerLinksColor} href="/portfolio">Portfolio</Link></li>
                    <li><a className={styles.footerLinksColor} href="/portfolio#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
             {/* <div className={styles.socialIcons}>
                <a href="https://github.com/Dev-JoyA?tab=repositories" className="github-icon" target="_blank" aria-label="GitHub"> <i className="fa fa-github"> </i> </a>
                <a href="https://twitter.com/joy_gold13"  className="twitter-icon" target="_blank" aria-label="Twitter"> <i className="fa fa-twitter"> </i> </a>
                <a href="https://www.linkedin.com/in/joy-aruku-a23361195/" className="linkedin-icon" target="_blank" aria-label="LinkedIn"> <i cl
                ass="fa fa-linkedin"> </i> </a>
            </div> */}
    </div> 
  </footer>
  )
}

export default Footer