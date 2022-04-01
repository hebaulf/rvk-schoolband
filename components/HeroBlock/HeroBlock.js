import Link from "next/link";
import Image from "next/image";

const HeroBlock = ({
  title,
  text,
  heroblockclassname,
  img,
  imgclassname,
  btntext,
  btnclass,
  btnurl,
  onclick
}) => {
  return (
    <div className={heroblockclassname}>
      <h1 className="HeroBlock__title">{title}</h1>
      {img && 
        <picture className={imgclassname}>
          <Image layout="fill" objectFit="contain" src={img} alt={title} loading="lazy" />
        </picture>
      }
      <div className="HeroBlock__summary">{text}</div>
      {btntext ? (
        <div className="HeroBlock__buttons">
          {btnurl &&
            <Link href={btnurl}>
              <a className={btnclass}>
                {btntext}
              </a>
            </Link>
          }
          {onclick &&
            <button className={btnclass} onClick={onclick}>
              {btntext}
            </button>
          }
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeroBlock;
