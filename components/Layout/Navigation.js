import { useSession, signIn, signOut } from "next-auth/react";
import { Router } from "next/router";
import { useRouter } from "next/router";

const Navigation = () => {
  const { data: session } = useSession();
  const router = useRouter(); 

  return (
    <div className="Layout__nav" id="pagenav" role="navigation">
      <nav className="MainMenu" aria-label="Aðalvalmynd">
        <h2 className="MainMenu__title">Aðalvalmynd</h2>
        <ul className="MainMenu__items">
          <li className="MainMenu__item MainMenu__item--home">
            <a className="MainMenu__link" href="">Forsíða</a>
          </li>
          <li className="MainMenu__item"><button className="MainMenu__link">Þjónusta</button></li>
          <li className="MainMenu__item"><button className="MainMenu__link">Um mig</button></li>
          <li className="MainMenu__item"><button className="MainMenu__link">Mín mál</button></li>
          <li className="MainMenu__separator" aria-hidden="true"></li>
          {session 
            ? (
              <li className="MainMenu__item">
                <a className="MainMenu__link" href="#" onClick={() => {router.push("/")}}>Útskráning</a>
              </li>
            ) 
            : (
              <li className="MainMenu__item">
                <a className="MainMenu__link" href="#" onClick={() => signIn()}>Innskráning</a>
              </li>
            )
          }
        </ul>
      </nav>
    </div>

  )
}

export default Navigation