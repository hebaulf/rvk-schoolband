import Head from "next/head";
import style from "../styles/Children.module.css";
import Stepper from "../components/Application/Stepper";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import { useState } from "react";

const schoolband = () => {
	const [currentStep, setCurrentStep] = useState();
  const steps = [
    "Börn og Forsjáraðilar", 
    "Val á skólahljómsveit", 
    "Val á hljóðfæri", 
    "Upplýsingar", 
    "Yfirlit og staðfesting"
  ];

  const displayStep = (step) => {
    switch(step) {
      case 1: 
        return <PersonalInfo />
      case 2: 
        return <SchoolbandInfo />
      case 3: 
        return <InstrumentInfo />
      case 4: 
        return <OtherInfo />
      case 5: 
        return <Confirm />
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Umsókn um skólahljómsveit | RVK - Mínar síður</title>
      </Head>

      <div className={style.SchoolBand__Wrapper}>
        <div className={style.SchoolBand__Stepper}>
          <Stepper
            steps={steps}
            currentStep={currentStep} 
          />
        </div>

        <div className={style.SchoolBand__Content}>
          <HeroBlock
            title="Hæ, Ragnheiður, þá hefst umsóknarferlið!"
            text="Vandað tónlistarnám og tónlistaruppeldi fer fram í skólahljómsveitunum fjórum sem starfræktar eru á vegum Reykjavíkurborgar. Sótt er um nám í skólahljómsveit rafrænt. Nota má frístundakortið til að greiða niður námsgjöld."
            img="/sax.png"
            btntext="Byrjum Þetta!"
            btnclass="ButtonPrimary"
            btnurl="/application"
          />

          <p>
            Ef þú ert nú þegar með barn í skólahljómsveit eða á biðlista getur þú
            framlengt umsókn eða sagt henni upp <a href="/">hér</a>.
          </p>
          <div className="Attention">
            <a href="/">Kynntu þér nánar</a> hvernig við vinnum með upplýsingarnar
            þínar
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default schoolband;
