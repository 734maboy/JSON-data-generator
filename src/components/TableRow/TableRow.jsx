import React, { useEffect, useState } from 'react'
import GenInput from '../UI/GenInput/GenInput'
import LayoutItem from '../Layouts/LayoutItem/LayoutItem'
import GenSelect from '../UI/GenSelect/GenSelect'
import remove from "./remove.svg";
import tableRowClasses from './TableRow.module.css';

const TableRow = ({field, name, type, collectionUpdateHandler, settings}) => {

	const [fieldName, setFieldName] = useState(name || '');
	const [fieldType, setFieldType] = useState(type || '');

	useEffect(() => {
		collectionUpdateHandler({
			field,
			name: fieldName,
			type: fieldType,
		});
	}, [fieldName, fieldType])

	return (
		<div className="BaseLayout AlignItemsCenter">
			<LayoutItem style={{
				maxHeight: "26px"
			}}>
				<img className={tableRowClasses.icon} src={remove} alt={"remove-icon"}/>
			</LayoutItem>
			<LayoutItem>
				<GenInput
					type="text"
					setValue={setFieldName}
					value={fieldName}/>
			</LayoutItem>
			<LayoutItem>
				<GenSelect
					name={`${field}_type`}
					value={fieldType}
					setValue={setFieldType}
				/>
			</LayoutItem>
		</div>
	)
}

export default TableRow
