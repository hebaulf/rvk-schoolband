import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import MainContent from './Main';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <div className="Layout__content">
        <Header />
        <MainContent>{children}</MainContent>
        <Navigation />
        <Footer />
      </div>
    </div>
  );
}