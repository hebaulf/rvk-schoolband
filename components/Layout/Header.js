import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="Layout__header" role="banner">
        <a className="Layout__header__logo" href="/is"><img src="/rvk-logo.svg" alt="Reykjavík logo. Fara á forsíðu" /></a>
        <a className="Layout__header__skiplink" href="#pagenav" aria-label="Valmynd">Valmynd</a>
      </div>
      <div className="Layout__nav" id="pagenav" role="navigation">
        <nav className="MainMenu" data-sprinkled="true">
          <h2 className="MainMenu__title">Aðalvalmynd</h2>
          <li className="MainMenu__separator" aria-hidden="true"></li>
          <ul className="MainMenu__items">
            <li className="MainMenu__item"><a className="MainMenu__link" role="link" tabIndex="0" href="/services">Þjónusta</a></li>
            <li className="MainMenu__item"><a className="MainMenu__link" role="link" tabIndex="1" href="/about-me">Um mig</a></li>
            <li className="MainMenu__item"><a className="MainMenu__link" role="link" tabIndex="2" href="/my-cases">Mín mál</a></li>
            <li className="MainMenu__item"><a className="MainMenu__link" role="link" tabIndex="3" href="/#logout">Útskráning</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
