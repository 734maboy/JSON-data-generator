import React, { memo } from 'react'
import cl from './Geninput.module.css';
import PropTypes from 'prop-types'
import cancelImg from "./cancel.png";

const GenInput = ({value, setValue, size, ...props}) => {
	return (
		<div
			className={cl.genInput}>
			<input
				value={value}
				style={{border: "none", outline: "none", width: "100%"}}
				onChange={(e) => {setValue(e.target.value)}}
				{...props}
			/>
			<img src={cancelImg} width="16px" height="16px" alt="cancel"/>
		</div>
	)
}

GenInput.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
}

export default memo(GenInput)
