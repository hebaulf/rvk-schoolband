import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="Layout__header" role="banner">
      <Link href="/">
        <a className="Layout__header__logo">
          <picture>
            <Image src="https://styles.reykjavik.is/assets/reykjavik-logo.svg" height="53" width="182" alt="Reykjavík lógó. Fara á forsíðu" loading="lazy" />
          </picture>
          Reykjavík
        </a>
      </Link>
      <Link href="#pagenav">
        <a className="Layout__header__skiplink" aria-label="Valmynd">Valmynd</a>
      </Link>
    </div>
  );
};

export default Header;
