import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { rvkServices } from "../data/rvkService";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import style from "../styles/Home.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      rvkServiceList: rvkServices 
    }
  }
}

export default function Home({ rvkServiceList }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Reykjavik - Mínar síður</title>
      </Head>

      <div className="Herostyles__HeroBlockWrapper">
        {/* 
          <HeroBlock 
            title="Mínar Síður"
            text="Smelltu á Innskrá með island.is til að skrá þig inn á Mínar síður. Ekki hika við að hafa samband ef einhverjar spurningar vakna."
            img="https://styles.reykjavik.is/assets/illustrations/minarsidur.png"
            btnText="Innskrá"
            btnClass="ButtonPrimary"
            btnUrl="/"
          /> 
        */}

        <HeroBlock 
          title="Hæ, Ragnheiður"
          text="Hér finnur þú allar umsóknir borgarinnar. Sumar eru rafrænar, en aðrar á eyðublöðum. Eyðublöð má fylla út og senda með tölvupósti eða prenta út og skila á pappír."
          img="https://styles.reykjavik.is/assets/illustrations/borgarstjori3.png"
          btnText="Um mig"
          btnClass="ButtonTertiary"
          btnUrl="/"
        />
        
        <div className={`MyCasesViewstyles__MyCaseWrapper ${style.MyCaseWrapper}`}>
          <div className={`MyCasesViewstyles__TableTitleContainer ${style.TableTitle}`}>
            <div className={`MyCasesViewstyles__TitleWrapper ${style.TitleWrapper}`}>
              <h2 className="Heading">Mín mál</h2>
            </div>
            <a className="ButtonTertiary" href="#">
              Sjá öll mál
            </a>
          </div>
          {/* <div className="Attention">Þegar þú hefur sent inn umsókn þá mun birtast listi yfir þær hér.</div> */}
        </div>
      </div>

      <div className={`TableWrapper TableWrapper--BasicTable ${style.tableWrap}`}>
        <table className={`BasicTable ${style.table}`}>
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
              <th className="Cell--number" scope="row">
                <a href="#">4811029</a>
              </th>
              <td>Umsókn um skólamáltið / Hagaskóli</td>
              <td>21.01 2021 - 23:11</td>
              <td>Samþykkt</td>
            </tr>
            <tr>
              <th className="Cell--number" scope="row">
                <a href="#">9275521</a>
              </th>
              <td>Byggingarleyfi</td>
              <td>03.11 2020 - 11:07</td>
              <td>Móttekið</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="ExtraLinks">
        <div className="ExtraLinks__main">
          <h2 className="ExtraLinks__title">
            Þjónusta í boði hjá Reykjavíkurborg
          </h2>
          <ul className="ExtraLinks__list">
            {rvkServiceList.map(rvkService => (
              <li key={rvkService.id} className="ExtraLinks__item">
                <a className="ExtraLinks__card" href={rvkService.url}>
                  <span className="ExtraLinks__card__title">{rvkService.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


