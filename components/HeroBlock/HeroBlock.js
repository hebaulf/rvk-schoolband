
const HeroBlock = ({ title, text, img, btntext, btnclass, btnurl }) => {
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
        {btntext 
            ? (
                <div className="HeroBlock__buttons">
                    <a className={btnclass} href={btnurl}>{btntext}</a>
                </div>
                ) 
            : ("")
        }
    </div>
  )
}

export default HeroBlock