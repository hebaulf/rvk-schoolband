import Head from "next/head";
// import styles from "../styles/Home.module.css";
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

      {/* <div class="HeroBlock">
        <h1 class="HeroBlock__title">Mínar Síður</h1>
        <picture class="HeroBlock__image">
          <img
            src="https://styles.reykjavik.is/assets/illustrations/minarsidur.png"
            alt=""
            loading="lazy"
          />
        </picture>
        <div class="HeroBlock__summary">
        Smelltu á Innskrá með island.is til að skrá þig inn á Mínar síður. Ekki hika við að hafa samband ef einhverjar spurningar vakna.
        </div>
        <div class="HeroBlock__buttons">
          <button class="ButtonPrimary" type="button">Innskrá með island.is</button>
          <a class="ButtonTertiary" href="/login">Innskrá með notendanafni</a>
        </div>
      </div> */}

      <div class="HeroBlock">
        <h1 class="HeroBlock__title">Hæ, Ragnheiður</h1>
        <picture class="HeroBlock__image">
          <img
            src="https://styles.reykjavik.is/assets/illustrations/borgarstjori3.png"
            alt=""
            loading="lazy"
          />
        </picture>
        <div class="HeroBlock__summary">
           finnur þú allar umsóknir borgarinnar. Sumar eru rafrænar, en aðrar á eyðublöðum. Eyðublöð má fylla út og senda með tölvupósti eða prenta út og skila á pappír.
        </div>
        <div class="HeroBlock__buttons">
          <a class="ButtonTertiary" href="/">Um mig</a>
        </div>
      </div>

      <div class="TableWrapper TableWrapper--BasicTable">
        <table class="BasicTable">
          <thead>
            <tr>
              <th class="Cell--number" scope="row">Nr. umsóknar</th>
              <th>Lýsing</th>
              <th>Sent dags. / kl</th>
              <th>Staða</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="Cell--number" scope="row"><a href="/">4811029</a></th>
              <td>Umsókn um skólamáltið / Hagaskóli</td>
              <td>21.01 2021 - 23:11</td>
              <td>Samþykkt</td>
            </tr>
            <tr>
              <th class="Cell--number" scope="row"><a href="/">9275521</a></th>
              <td>Byggingarleyfi</td>
              <td>03.11 2020 - 11:07</td>
              <td>Móttekið</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="ExtraLinks">
        <div class="ExtraLinks__main">
          <h2 class="ExtraLinks__title">Extra links top</h2>
          <ul class="ExtraLinks__list">
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
            <li class="ExtraLinks__item">
              <a class="ExtraLinks__card" href="">
                <span class="ExtraLinks__card__title">Eignaskiptayfirlýsing</span>
                <span class="ExtraLinks__card__summary"
                  >Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss.</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
