import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="Layout__header" role="banner">
      <a className="Layout__header__logo" href="/">
        <picture>
          <img src="https://styles.reykjavik.is/assets/reykjavik-logo.svg" alt="Reykjavík lógó. Fara á forsíðu" loading="lazy" />
        </picture>
        Reykjavík
      </a>
      <a className="Layout__header__skiplink" href="#pagenav" aria-label="Valmynd">Valmynd</a>
    </div>
  );
};

export default Header;
