import Head from "next/head";

const schoolband = () => {
  return (
    <div className="container">
      <Head>
        <title>Umsókn um skólahljómsveit | RVK - Mínar síður</title>
      </Head>

      <div class="WizardStepper">
        <button
          type="button"
          class="WizardStepper__step WizardStepper__step--done"
        >
          Fyrir hvern er viðtalið?
        </button>
        <span class="WizardStepper__step WizardStepper__step--done">
          Ástæða viðtals (never clickable)
        </span>
        <button type="button" class="WizardStepper__step" aria-current="step">
          Bæta við gögnum
        </button>
        <span class="WizardStepper__step">Við höfum samband</span>
      </div>
      <div className="HeroBlock">
        <h1 className="HeroBlock__title">
          Hæ, Ragnheiður, þá hefst umsóknarferlið!
        </h1>
        <picture className="HeroBlock__image">
          <img src="/sax.png" alt="" loading="lazy" />
        </picture>
        <div className="HeroBlock__summary">
          Vandað tónlistarnám og tónlistaruppeldi fer fram í skólahljómsveitunum
          fjórum sem starfræktar eru á vegum Reykjavíkurborgar. Sótt er um nám í
          skólahljómsveit rafrænt. Nota má frístundakortið til að greiða niður
          námsgjöld.
        </div>
        <div className="HeroBlock__buttons">
          <p>
            <a class="ButtonPrimary" href="/application">
              Byrjum Þetta!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default schoolband;
