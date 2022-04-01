import React, { Component, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import MainContent from './Main';
import Navigation from './Navigation';
import style from "../../styles/Home.module.css"

export default function Layout({ children }) {
  const router = useRouter();

 useEffect(() => {
  window.scrollTo(0,0)
  console.log(router.asPath)
  // const handleRouteChange = (url, { shallow }) => {
  //   window.scrollTo(0,0)
  //   console.log(
  //     `App is changing to ${url} ${
  //       shallow ? 'with' : 'without'
  //     } shallow routing`
  //   )
  // }

  // router.events.on('routeChangeStart', handleRouteChange)

  // // If the component is unmounted, unsubscribe
  // // from the event with the `off` method:
  // return () => {
  //   router.events.off('routeChangeStart', handleRouteChange)
  // }
 }, [router.asPath])

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