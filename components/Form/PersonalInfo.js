import TitleBlock from "../TitleBlock/TitleBlock";

const PersonalInfo = () => {
  return (
    <div>
      <TitleBlock 
				title="Börn og foreldrar" 
				text="Upplýsingar um foreldra/forsjáraðila koma frá Þjóðskrá og skólakerfum Reykjavíkurborgar. Athugaðu hvort símanúmer og netföng séu rétt áður en þú heldur áfram."
			/>
      <div className="form__section">
        <h4>Börn</h4>
      </div>
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
      <div></div>
    </div>
  );
};

export default PersonalInfo;
