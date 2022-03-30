import Head from "next/head";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import style from "../styles/Children.module.css";
import { applicationLinks } from "../data/applicationLinks";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      applicationLinkList: applicationLinks,
    },
  };
};

const Children = ({ applicationLinkList }) => {
  return (
    <div className="container">
      <Head>
        <title>Börn, unglingar og ungt fólk | RVK - Mínar síður</title>
      </Head>

      <HeroBlock
        title="Börn, unglingar og ungt fólk"
        text="Hér finnur þú allar umsóknir borgarinnar. Sumar eru rafrænar, en aðrar á eyðublöðum. Eyðublöð má fylla út og senda með tölvupósti eða prenta út og skila á pappír. Sumar umsóknir þarf að fylla út í öðrum kerfum. Í þeim tilfellum gætir þú þurft að skrá þig aftur inn með rafrænu auðkenni."
        heroBlockClassName="HeroBlock"
        img="https://styles.reykjavik.is/assets/illustrations/born4.png"
        imgClassName="HeroBlock__image"
      />

      <div className={`TextBlock ${style.textblocklist}`}>
        <h3>Umsóknir</h3>
        {applicationLinkList.map((applicationLink) => (
          <Link key={applicationLink.id} href={applicationLink.url}>
            <a className="ButtonTertiary" href={applicationLink.url}>
              {applicationLink.text}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Children;
