import React, { useMemo, useState } from 'react'
import ctClasses from './ConfigureTable.module.css';
import TableRow from '../TableRow/TableRow'


const ConfigureTable = () => {

	//region DATA

	const [properties, setProperties] = useState([
		{
			field: "field1",
			name: "age",
			type: "number",
			settings: {}
		}
	])

	const sortedProperties = useMemo(() => {
		return properties.sort((a,b) => a.field.localeCompare(b.field));
	}, [properties]);

	//endregion

	//region METHODS

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

		setProperties([...nonUpdatedProperties, prop]);
	}

	//endregion

	return (
		<div className={[ctClasses.main_table, ctClasses.main_table_spread].join(" ")}>
			<div className={ctClasses.main_table__properties}>
				{
					sortedProperties.map((p, index) => {
						return (
							<TableRow
								key={`${index}-of-${p.field}`}
								field={p.field}
								name={p.name}
								type={p.type}
								settings={p.settings}
								collectionUpdateHandler={updatePropertiesArray}
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
