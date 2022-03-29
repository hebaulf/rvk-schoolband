import Link from "next/link";

const HeroBlock = ({
  title,
  text,
  heroBlockClassName,
  img,
  imgClassName,
  btntext,
  btnclass,
  btnurl,
}) => {
  return (
    <div className={heroBlockClassName}>
      <h1 className="HeroBlock__title">{title}</h1>
      <picture className={imgClassName}>
        <img src={img} alt={title} loading="lazy" />
      </picture>
      <div className="HeroBlock__summary">{text}</div>
      {btntext ? (
        <div className="HeroBlock__buttons">
          <Link href={btnurl}>
            <a className={btnclass} href={btnurl}>
              {btntext}
            </a>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeroBlock;
