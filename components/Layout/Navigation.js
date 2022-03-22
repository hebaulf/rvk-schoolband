
const Navigation = () => {
  return (
    <div className="Layout__nav" id="pagenav" role="navigation">
      {/* <nav className="BreadCrumbs" aria-label="Þú ert hér">
        <span className="BreadCrumbs__title">Þú ert hér:</span>
        <a className="BreadCrumbs__item" href="">Forsíða</a>
        <span className="BreadCrumbs__separator" aria-label="">&gt;</span>
        <a className="BreadCrumbs__item" href="" aria-current="true">Stjórnkerfi</a>
      </nav> */}
      <nav className="MainMenu" aria-label="Aðalvalmynd">
        <h2 className="MainMenu__title">Aðalvalmynd</h2>
        <ul className="MainMenu__items">
          <li className="MainMenu__item MainMenu__item--home">
            <a className="MainMenu__link" href="">Forsíða</a>
          </li>
          <li className="MainMenu__item"><button className="MainMenu__link" aria-controls="MegaMenu:Íbúar">Íbúar</button></li>
          <li className="MainMenu__item"><button className="MainMenu__link" aria-controls="MegaMenu:Stjórnkerfið">Stjórnkerfið</button></li>
          <li className="MainMenu__item"><button className="MainMenu__link" aria-controls="MegaMenu:Mannlíf">Mannlíf</button></li>
          <li className="MainMenu__separator" aria-hidden="true"></li>
          <li className="MainMenu__item MainMenu__item--lang"><a className="MainMenu__link" href="/"aria-label="English" title="English" lang="en">EN</a></li>
          <li className="MainMenu__item MainMenu__item--lang"><a className="MainMenu__link" href="/" aria-label="Polski" title="Polski" lang="pl">PL</a></li>
          <li className="MainMenu__item MainMenu__item--mypages"><a className="MainMenu__link" href="/">Mínar síður</a></li>
          <li className="MainMenu__item MainMenu__item--search"><a className="MainMenu__link" href="/" aria-label="Leita á vefnum" title="Leita á vefnum">Leita</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navigation