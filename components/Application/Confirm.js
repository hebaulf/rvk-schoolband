import TextBlock from "../TextBlock/TextBlock";
import style from "./Application.module.css";

const parents = [
  {
    id: "parent01",
    name: "Ragnheiður Margrét Jónsdóttir",
    ssn: "030484-4556",
    address: "Leynimel 48",
    postalCode: "107",
    phone: "6984050",
    email: "ragnheidur@snjoark.is",
  },
  {
    id: "parent02",
    name: "Magnús Björnsson",
    ssn: "010184-6789",
    address: "Leynimel 48",
    postalCode: "107",
    phone: "6978792",
    email: "magbjo46@hi.is",
  },
];

const Confirm = () => {
  return (
    <div>
      <TextBlock 
        headingsize="h2"
        title="Yfirlit"
        text="Þegar þú hefur farið yfir og staðfest upplýsingarnar hér að neðan klárast umsóknarferlið."
      />

      {/* Biðlisti */}
      <div className={style.title__form}>
        <h3 className={`FormField__label ${style.header}`}>Barn</h3>
        <a className="ButtonTertiary" href="#"> Breyta </a>
      </div>
      <div className={style.infoBox}>
        <div className={`form__infobox ${style.infoBox__readonly}`}>
          <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
            <label className="FormField__label" htmlFor="name">Nafn</label>
            <span className="FormField__input" id="name" readOnly>Rögnvaldur Björn Magnússon</span>
          </div>
          <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
            <label className="FormField__label" htmlFor="ssn">Kennitala</label>
            <span className="FormField__input" id="ssn" readOnly>030412-4567</span>
          </div>
        </div>
      </div>

      {/* Parents info */}
      <div className={style.parentInfo}>
      <div className={style.title__form}>
        <h3 className={`FormField__label ${style.header}`}>
          Foreldrar / Forsjáraðilar
        </h3>
        <a className="ButtonTertiary" href="#"> Breyta </a>
      </div>
        {parents.map(parent => (
          <fieldset key={parent.id} className={`form ${style.infoBox}`}>
            <div className={`form__infobox ${style.infoBox__readonly}`}>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="name">Nafn</label>
                <span className="FormField__input" id="name" readOnly>{parent.name}</span>
              </div>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="ssn">Kennitala</label>
                <span className="FormField__input" id="ssn" readOnly>{parent.ssn}</span>
              </div>
            </div>
            <div className={`form__infobox ${style.infoBox__readonly}`}>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="address">Heimilisfang</label>
                <span className="FormField__input" id="address" readOnly>{parent.address}</span>
              </div>
              <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="postal">Póstnúmer</label>
                <span className={`FormField__input ${style.minwidth}`} id="postal" readOnly>{parent.postalCode}</span>
              </div>
            </div>
            <div className={`form__infobox ${style.infoBox__readonly}`}>
              <div className={`FormField TextInput ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="phone">Sími</label>
                <span className="FormField__input" type="number" id="phone" readOnly>{parent.phone}</span>
              </div>
              <div className={`FormField TextInput ${style.infoBox__item}`}>
                <label className="FormField__label" htmlFor="email">Netfang</label>
                <span className="FormField__input" type="email" id="email" readOnly>{parent.email}</span>
              </div>
            </div>
          </fieldset>
        ))}
      </div>

      {/* Skólahljómsveit */}
      <div className={style.title__form}>
        <h3 className={`FormField__label ${style.header}`}>Skólahljómsveit</h3>
        <a className="ButtonTertiary" href="#"> Breyta </a>
      </div>
      <div className={style.infoBox}>
        <h3 className={`FormField__label`}>Skólahljómsveit Vestur- og Miðbæjar</h3>
        <hr />
        <fieldset>
          <div className={`form__infobox`}>
            <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
              <label className="FormField__label" htmlFor="instrument1">Hljóðfæri - Aðalval</label>
              <span className="FormField__input" id="instrument1" readOnly>Óbó</span>
            </div>
            <hr />
            <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
              <label className="FormField__label" htmlFor="instrument2">Hljóðfæri - Varaval</label>
              <span className="FormField__input" id="instrument2" readOnly>Klarinett / Básúna</span>
            </div>
            <hr />
            <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
              <label className="FormField__label" htmlFor="schoolyear">Skólaár</label>
              <span className="FormField__input" id="schoolyear" readOnly>2022-23</span>
            </div>
          </div>
        </fieldset>
      </div>

      {/* Skólagjöld */}
      <h3 className={`FormField__label ${style.header}`}>Skólagjöld</h3>
      <div className={style.infoBox}>
        
        <div className={style.paymentInfo}>
          <p>Skólahljómsveit</p><p>39.520 kr./árið</p> 
        </div>
        <div>
          <a href="#">Sjá sundurliðun gjalda</a>
        </div>
        <hr />
        <div>
          <p>Nýta Frístundastyrk<span><br/><a href="#">Nánar um Frístundastyrk</a></span></p>
          <div className="Checkbox">
            <input className="Checkbox__input" type="checkbox" id="cooperation" />
            <label className="Checkbox__label" htmlFor="cooperation">
              Já, ég vil nýta frístundastyrkinn hér
            </label>
          </div>
        </div>
        <hr />
        <fieldset>
        
          <h3 className={`FormField__label`}>Greiðandi</h3>
          <div className={`form__infobox ${style.infoBox__readonly}`}>
            <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
              
              <label className="FormField__label" htmlFor="name">Nafn</label>
              <span className="FormField__input" id="name" readOnly>Ragnheiður Margrét Jónsdóttir</span>
            </div>

            <div className={`FormField FormField--readonly ${style.infoBox__item}`}>
              <label className="FormField__label" htmlFor="ssn">Kennitala</label>
              <span className="FormField__input" id="ssn" readOnly>030484-4556</span>
            </div>
            
          </div>
        </fieldset>

        <div>
        <hr />
          <p>Greiðsluseðill er sendur í heimabanka tvisvar yfir árið. 
            Til að velja annan greiðslumáta þarf að hafa samband við skrifstofu skólans. 
            Hægt er að nýta frístundarstyrk upp í skólagjöld. </p>
        </div>
      </div>
    </div>
  )
}

export default Confirm