
const Dropdown = ({ selectid, label, options, name, value, onchange }) => {
  return (
    <div className="FormField FormField--small Selectbox">
			<label className="FormField__label" htmlFor={selectid} >{label}</label>
			<select className="FormField__input" id={selectid} name={name} value={value} onChange={onchange}>
				{options}
			</select>
		</div>
  )
}

export default Dropdown