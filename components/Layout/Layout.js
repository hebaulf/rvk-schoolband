import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import MainContent from './Main';
import Navigation from './Navigation';
import style from "../../styles/Home.module.css"

export default function Layout({ children }) {
  return (
    <div className={`Layout ${style.layout}`}>
      <div className="Layout__content">
        <Header />
        <MainContent>{children}</MainContent>
        <Navigation />
        <Footer />
      </div>
    </div>
  );
}