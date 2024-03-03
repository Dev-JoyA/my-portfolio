import React from 'react'
import styles from "./page.module.css"
import Link from "next/link"

const Header = () => {
  return (
    <div className={styles.header}>
         <img src="/Combined Shape.svg"/>
         <div className={styles.nav}>
             <h4 className={styles.a}><span>HOME</span></h4>
             <h4 className={styles.a}>
              <Link className={styles.a2} href="/portfolio">GO TO PORTFOLIO</Link> 
             </h4>
             <h4 className={styles.a}>
              <a className={styles.a2} href="/portfolio/#contact">CONTACT ME</a> 
             </h4>
             <h4 className={styles.a}>
              <a className={styles.a2} href="/#skill">SKILL</a> 
             </h4>
         </div>
     </div>
  )
}

export default Header