'use client'
import React from 'react';
import styles from "./page.module.css";
import Header from "./Header"
import Intro from './Intro';
import Main from './Main';
import Footer from './Footer';

const HomePage = () => {
 return (
    <div className={styles.container}>
      <Header />
      <Intro  />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
