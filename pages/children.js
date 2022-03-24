import Head from "next/head";

const children = () => {
  return (
    <div className="container">
      <Head>
        <title>Börn, unglingar og ungt fólk | RVK - Mínar síður</title>
      </Head>

      <div className="HeroBlock">
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
      </div> 
    </div>
  )
}

export default children