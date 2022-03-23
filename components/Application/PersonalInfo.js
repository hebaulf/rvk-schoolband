import TitleBlock from "../TitleBlock/TitleBlock";

const PersonalInfo = () => {
  return (
    <div>
      <div className="TextBlock">
        <h2>Börn og foreldrar</h2>
        <p>Upplýsingar um foreldra/forsjáraðila koma frá Þjóðskrá og skólakerfum Reykjavíkurborgar. Athugaðu hvort símanúmer og netföng séu rétt áður en þú heldur áfram.</p>
      </div>

      <div className="FormField CheckboxButtonsGroup" role="group">
        <h4 className="FormField__label" id="label:_6746485-124">Börn</h4>
        <ul className="FormField__options" role="group" aria-labelledby="label:_6746485-124" aria-required="false" >
          <li className="CheckboxButton FormField__options__item">
            <input 
              className="CheckboxButton__input" 
              type="checkbox"
              id="_6746485-125"
              name="fruits"
              value="Jón"
            />
            <label className="CheckboxButton__label" for="_6746485-125">
              Rögnvaldur Björn Magnússon <small>030412-5479</small>
            </label>
          </li>
          <li className="CheckboxButton FormField__options__item">
            <input
              className="CheckboxButton__input"
              type="checkbox"
              id="_6746485-126"
              name="fruits"
              value="Anna"
              checked=""
            />
            <label className="CheckboxButton__label" for="_6746485-126">
              Anna Ólöf Magnúsdóttir<small>130818-3237</small>
            </label>
          </li>
        </ul>
        <div className="Alert Alert--info Alert--closable" role="alert" hidden="">
          Aðeins er hægt að sækja um í skólahljómsveit fyrir börn fædd fyrir 2014.
        </div>
      </div>

      <fieldset class="FieldGroup" role="group">
      <h4 className="FormField__label">Börn</h4>
        <div class="FormField TextInput">
          <label class="FormField__label" for="_6746485-193"> Pick your fruits</label>
          <input class="FormField__input" type="text" id="_6746485-193" value="" />
        </div>
      </fieldset>
      <br className="VSpacer VSpacer--small" />

      <div className="form__section">
        <h4>Foreldrar/forsjáraðilar</h4>
        <div className="form__infobox">
          <div className="form__infobox__item">
            <span>Nafn</span>
            <p>Ragnheiður Margrét Jónsdóttir</p>
          </div>
					<div className="form__infobox__item">
            <span>Kennitala</span>
            <p>030484-4556</p>
          </div>
					<div className="form__infobox__item">
            <span>Heimilisfang</span>
            <p>Leynimel 48</p>
          </div>
					<div className="form__infobox__item">
            <span>Póstnúmer</span>
            <p>107</p>
          </div>
					<div className="form__infobox__item editable">
            <span>Sími</span>
            <p>698 4050</p>
          </div>
					<div className="form__infobox__item editable">
            <span>Netfang</span>
            <p>ragnheidur@snjoark.is</p>
          </div>
        </div>
				<div className="form__infobox">
          <div className="form__infobox__item">
            <span>Nafn</span>
            <p>Magnús Björnsson</p>
          </div>
					<div className="form__infobox__item">
            <span>Kennitala</span>
            <p>010184-6789</p>
          </div>
					<div className="form__infobox__item">
            <span>Heimilisfang</span>
            <p>Leynimel 48</p>
          </div>
					<div className="form__infobox__item">
            <span>Póstnúmer</span>
            <p>107</p>
          </div>
					<div className="form__infobox__item editable">
            <span>Sími</span>
            <p>679 8792</p>
          </div>
					<div className="form__infobox__item editable">
            <span>Netfang</span>
            <p>magbjo46@hi.is</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
