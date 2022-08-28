import React, { useState } from 'react'
import ctClasses from './ConfigureTable.module.css';
import TableRow from '../TableRow/TableRow'


const ConfigureTable = () => {

	const [properties, setProperties] = useState([
		{
			field: "field1",
			name: "age",
			type: "number",
			settings: {}
		}
	])

	function addProperty() {
		setProperties([...properties, {
			field: `field${properties.length + 1}`,
			name: "",
			type: "",
			settings: {}
		}]);
	}

	function updatePropertiesArray(elem) {
		let prop = properties.find( p => p.field === elem.field);
		let nonUpdatedProperties = properties.filter(p => p.field !== elem.field)

		prop.name = elem.name;
		prop.type = elem.type;

		setProperties([...nonUpdatedProperties, prop].sort((a,b) => a.field.localeCompare(b.field)));
	}

	return (
		<div className={ctClasses.main_table}>
			<div className={ctClasses.main_table__properties}>
				{
					properties.map((p, index) => {
						return (
							<TableRow
								key={`${index}-of-${p.field}`}
								field={p.field}
								name={p.name}
								type={p.type}
								settings={p.settings}
								updateRawInMainDataSet={updatePropertiesArray}
								className={ctClasses.property_row}
							/>
						)
					})
				}
				<button onClick={addProperty}>PLUS</button>
			</div>
		</div>
	)
}

export default ConfigureTable
