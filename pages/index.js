import Head from "next/head";
// import styles from "../styles/Home.module.css
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  return (
    <div className="container">
      <Head>
        <title>Reykjavik - Mínar síður</title>
      </Head>

      {/* <div className="HeroBlock">
        <h1 className="HeroBlock__title">Mínar Síður</h1>
        <picture className="HeroBlock__image">
          <img
            src="https://styles.reykjavik.is/assets/illustrations/minarsidur.png"
            alt=""
            loading="lazy"
          />
        </picture>
        <div className="HeroBlock__summary">
        Smelltu á Innskrá með island.is til að skrá þig inn á Mínar síður. Ekki hika við að hafa samband ef einhverjar spurningar vakna.
        </div>
        <div className="HeroBlock__buttons">
          <button className="ButtonPrimary" type="button">Innskrá með island.is</button>
          <a className="ButtonTertiary" href="/login">Innskrá með notendanafni</a>
        </div>
      </div> */}
      <div className="Herostyles__HeroBlockWrapper">
      <div className="HeroBlock">
        <h1 className="HeroBlock__title">Hæ, Ragnheiður</h1>
        <picture className="HeroBlock__image">
          <img
            src="https://styles.reykjavik.is/assets/illustrations/borgarstjori3.png"
            alt=""
            loading="lazy"
          />
        </picture>
        <div className="HeroBlock__summary">
          Hér finnur þú allar umsóknir borgarinnar. Sumar eru rafrænar, en aðrar á eyðublöðum. Eyðublöð má fylla út og senda með tölvupósti eða prenta út og skila á pappír.        </div>
        <div className="HeroBlock__buttons">
          <a className="ButtonTertiary" href="#">Um mig</a>
        </div>
        </div>
        <div className="MyCasesViewstyles__MyCaseWrapper">
        <div className="MyCasesViewstyles__TableTitleContainer">
        <div className="MyCasesViewstyles__TitleWrapper">
            <h2 className="Heading">Mín mál</h2>
          </div>
            <a className="ButtonTertiary" href="#">Sjá öll mál</a>
          </div>
          <div className="Attention">Þegar þú hefur sent inn umsókn þá mun birtast listi yfir þær hér.</div>
        </div>
      </div>

      <div className="TableWrapper TableWrapper--BasicTable">
        <table className="BasicTable">
          <thead>
            <tr>
              <th className="Cell--number" scope="row">Nr. umsóknar</th>
              <th>Lýsing</th>
              <th>Sent dags. / kl</th>
              <th>Staða</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="Cell--number" scope="row"><a href="#">4811029</a></th>
              <td>Umsókn um skólamáltið / Hagaskóli</td>
              <td>21.01 2021 - 23:11</td>
              <td>Samþykkt</td>
            </tr>
            <tr>
              <th className="Cell--number" scope="row"><a href="#">9275521</a></th>
              <td>Byggingarleyfi</td>
              <td>03.11 2020 - 11:07</td>
              <td>Móttekið</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="ExtraLinks">
        <div className="ExtraLinks__main">
          <h2 className="ExtraLinks__title">Þjónusta í boði hjá Reykjavíkurborg</h2>
          <ul className="ExtraLinks__list">
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Börn, unglingar og ungt fólk</span>
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Velferð og stuðningur</span> 
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Byggingarfulltrúi - eyðublöð til útfyllingar</span>
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Styrkir</span>
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Umhverfi og samgöngur</span>
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Atvinnulíf</span>
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Fasteignagjöld</span>
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Húsnæðisþjónusta</span>
              </a>
            </li>
            <li className="ExtraLinks__item">
              <a className="ExtraLinks__card" href="#">
                <span className="ExtraLinks__card__title">Tómstundir og menning</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
