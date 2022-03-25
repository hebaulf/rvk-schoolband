import Head from "next/head";
import style from "../styles/Children.module.css"
import { applicationLinks } from "../data/applicationLinks"

export const getStaticProps = async () => {
    return {
        props: {
            applicationLinkList: applicationLinks 
        }
    }
}

const children = ({ applicationLinkList }) => {

  return (
    <div className="container">
      <Head>
        <title>Börn, unglingar og ungt fólk | RVK - Mínar síður</title>
      </Head>

      <div className="HeroBlock">
        <h1 className="HeroBlock__title">Börn, unglingar og ungt fólk</h1>
        <picture className="HeroBlock__image">
          <img
            src="https://styles.reykjavik.is/assets/illustrations/born4.png"
            alt=""
            loading="lazy"
          />
        </picture>
        <div className="HeroBlock__summary">
            <p>Hér finnur þú allar umsóknir borgarinnar. Sumar eru rafrænar, en aðrar á eyðublöðum. Eyðublöð má fylla út og senda með tölvupósti eða prenta út og skila á pappír.</p>
            <p>Sumar umsóknir þarf að fylla út í öðrum kerfum. Í þeim tilfellum gætir þú þurft að skrá þig aftur inn með rafrænu auðkenni.</p>
        </div>
      </div>
      <div className={`TextBlock ${style.textblocklist}`}>
        <h3>Umsóknir</h3>
        {applicationLinkList.map(applicationLink => (
            <a className="ButtonTertiary" href={applicationLink.url}>{applicationLink.text}</a>
        ))}
      </div>
    </div>
  );
};

export default children;
