import HeroBlock from "../HeroBlock/HeroBlock";

const Complete = () => {
  return (
    <HeroBlock
      title="Umsókn Móttekin!"
      text="Umsókn þín um skólahljómsveit er móttekin.
      Á mínum síðum getur þú séð stöðu og framvindu umsóknarinnar. Öllum umsóknum er svarað fyrir skólabyrjun haustannar."
      heroblockclassname="HeroBlock"
      img="/band.png"
      imgclassname="HeroBlock__image"
      btntext="Fara á mínar síður"
      btnclass="ButtonPrimary"
      btnurl="/"
    />
  );
};

export default Complete;
