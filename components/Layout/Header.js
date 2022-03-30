import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="Layout__header" role="banner">
      <Link href="/">
        <a className="Layout__header__logo" href="/">
          <picture>
            <img src="https://styles.reykjavik.is/assets/reykjavik-logo.svg" alt="Reykjavík lógó. Fara á forsíðu" loading="lazy" />
          </picture>
          Reykjavík
        </a>
      </Link>
      <a className="Layout__header__skiplink" href="#pagenav" aria-label="Valmynd">Valmynd</a>
    </div>
  );
};

export default Header;
