import React from 'react'
import selectClasses from './GenSelect.module.css';

const GenSelect = ({value, setValue, ...props}) => {
	return (
		<select
			className={selectClasses.GenSelect}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			{...props}
		>
			<option value="Type" disabled>Type</option>
			<option value="Number" >Number</option>
			<option value="Boolean" >Boolean</option>
			<option value="String" >String</option>
		</select>
	)
}

export default GenSelect
