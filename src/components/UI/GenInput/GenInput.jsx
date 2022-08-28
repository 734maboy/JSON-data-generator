import React, { memo, useCallback, useEffect, useRef } from 'react'
import cl from './Geninput.module.css';
import PropTypes from 'prop-types'
import cancelImg from "./cancel.png";
import { useMemo } from 'react'

const GenInput = ({value, setValue, ...props}) => {


	const inputRef = useRef();
	let crossClasses = useMemo(() => {
		let classes = [cl.genInputCross_hidden];
		if (value) {
			classes = [cl.genInputCross_visible]
		}
		return classes.join(" ");
	}, [value]);


	const changeValueHandler = useCallback((e) => {
		// let val = e.target.value;
		// let fileName = val.split('.')[0];
		setValue(e.target.value);
	}, [value]);

	// NORM TEMA
	// useEffect(() => {
	// 	let index = value.indexOf('.');
	// 	inputRef.current.setSelectionRange(index, index);
	// 	inputRef.current.focus();
	// }, [value]);

	return (
		<div
			className={cl.genInput}>
			<input
				ref={inputRef}
				value={value}
				style={{border: "none", outline: "none", width: "100%"}}
				onChange={changeValueHandler}
				{...props}
			/>
			<img
					className={crossClasses}
				 	src={cancelImg}
					onClick={() => {setValue('')}}
					width="16px"
					height="16px"
					alt="cancel"
			/>
			<span className={cl.genInput_counter}> {value.length} </span>
		</div>
	)
}

GenInput.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
}

export default memo(GenInput)
