
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';

const MainPage = () => {
  return (
    <div>
        <div className={styles.mainPage}>
                <img src="/IMG_8747.JPG" className={styles.mainImg}/>
              <div className={styles.mainPageText}>
                 <hr></hr>
                  <h2 className={styles.h2} id="#about">About Me</h2>
                  <p className={styles.p}>I’m a Junior software engineer looking for a new role in an exciting company.I have deep knowledge in the MERN stack, ​​I also provide software engineering solution to tech companies and organizations, I do this by creating successful websites that meet requirements for objectives such as load speed and design, I validate code for proper structuring, security and compatibility with different browsers, device or operating system.  I intend to grow in the tech space and learn more programming languages to enable me become a proficient Senior Software Engineer, and also build a world class solution using tech.</p>
                  <button className={styles.mainPageBtn}>
                    <Link className={styles.a2} href="/portfolio">GO TO PORTFOLIO</Link>  
                        </button>
                  <hr></hr>

                {/* <hr ></hr> */}
                
              </div>
         </div>
         <h2 className={styles.secondParagaragh} id="#skill">SKILLS</h2>
                  <ul className={styles.skills}>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Tailwind css</li>
                    <li>Next js</li>
                    <li>Express</li>
                    <li>Git</li>
                    <li>PostgresSQL</li>
                    <li>Mongo DB</li>
                  </ul> 
                  {/* <hr></hr>  */}
         <div className={styles.section}>
              <h1 className={styles.h1}>Interested in doing a project together?</h1>
              <div>
                 <button className={styles.mainPageBtn}>
                 <a className={styles.a2} href="/portfolio#contact">CONTACT</a>  
                 </button>
               </div>
          </div>
    </div>
  )
}

export default MainPage