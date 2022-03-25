
const HeroBlock = ({ title, text, img, btnText, btnClass, btnUrl }) => {
  return (
    <div className="HeroBlock">
        <h1 className="HeroBlock__title">{title}</h1>
        <picture className="HeroBlock__image">
          <img
            src={img}
            alt={title}
            loading="lazy"
          />
        </picture>
        <div className="HeroBlock__summary">{text}</div>
        {btnText 
            ? (
                <div className="HeroBlock__buttons">
                    <a className={btnClass} href={btnUrl}>{btnText}</a>
                </div>
                ) 
            : ("")
        }
    </div>
  )
}

export default HeroBlock