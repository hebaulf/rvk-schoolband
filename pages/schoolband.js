import Head from "next/head";
import style from "../styles/Children.module.css";
import Stepper from "../components/Application/Stepper";
import HeroBlock from "../components/HeroBlock/HeroBlock";

const Schoolband = () => {
  const steps = [
    "Börn og Forsjáraðilar",
    "Val á skólahljómsveit",
    "Val á hljóðfæri",
    "Upplýsingar",
    "Yfirlit og staðfesting",
  ];

  return (
    <div className="container">
      <Head>
        <title>Umsókn um skólahljómsveit | RVK - Mínar síður</title>
      </Head>

      <div className={style.SchoolBand__Wrapper}>
        <div className={style.SchoolBand__Stepper}>
          <Stepper steps={steps} currentStep={null} />
        </div>

        <div className={style.SchoolBand__Content}>
          <HeroBlock
            title="Hæ, Ragnheiður, þá hefst umsóknarferlið!"
            text="Vandað tónlistarnám og tónlistaruppeldi fer fram í skólahljómsveitunum fjórum sem starfræktar eru á vegum Reykjavíkurborgar. Sótt er um nám í skólahljómsveit rafrænt. Nota má frístundakortið til að greiða niður námsgjöld."
            heroBlockClassName="HeroBlock"
            img="/sax.png"
            imgClassName="HeroBlock__image"
            btntext="Byrjum Þetta!"
            btnclass="ButtonPrimary"
            btnurl="/application/1"
          />

          <p>
            Ef þú ert nú þegar með barn í skólahljómsveit eða á biðlista getur
            þú framlengt umsókn eða sagt henni upp <a href="#">hér</a>.
          </p>
          <div className="Alert Alert--info Alert--closable">
            <a href="#">Kynntu þér nánar</a> hvernig við vinnum með
            upplýsingarnar þínar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schoolband;
