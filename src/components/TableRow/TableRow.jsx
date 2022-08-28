import React, { useEffect, useState } from 'react'

const TableRow = ({field, name, type, updateRawInMainDataSet, settings}) => {

	const [fieldName, setFieldName] = useState(name || '');
	const [fieldType, setFieldType] = useState(type || '');

	function changeFieldNameState(e) {
		setFieldType(e.target.value)
	}

	useEffect(() => {
		updateRawInMainDataSet({
			field,
			name: fieldName,
			type: fieldType,
		});
	}, [fieldName, fieldType])

	return (
		<div>
			<button>minus</button>
			<input type="text" value={fieldName} onChange={(e) => setFieldName(e.target.value)}/>
			<select
				name={`${field}_type`}
				value={fieldType}
				onChange={changeFieldNameState}
			>
				<option value="Type" disabled>Type</option>
				<option value="Number" >Number</option>
				<option value="Boolean" >Boolean</option>
				<option value="String" >String</option>
			</select>
		</div>
	)
}

export default TableRow
