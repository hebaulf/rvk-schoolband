
const Dropdown = ({ selectid, label, options }) => {
  return (
    <div className="FormField FormField--small Selectbox">
			<label className="FormField__label" htmlFor={selectid}>{label}</label>
			<select className="FormField__input" id={selectid}>
				{options}
			</select>
		</div>
  )
}

export default Dropdown