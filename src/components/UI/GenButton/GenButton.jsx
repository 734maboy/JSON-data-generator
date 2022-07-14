import React, { memo, useMemo } from 'react'
import cl from './GenButton.module.css'
import PropTypes from 'prop-types'

const BUTTON_TYPES = [
	"success",
	"error",
	"warning"
];

const SIZE_TYPES = [
	"sm",
	"lg",
	"stretch",
];

const GenButton = ({children, clickHandle = () => {}, type, size}) => {

	const classes = useMemo(() => {
		return [cl.genButton, cl[type], cl[size]].join(" ");
	}, [type, size])

	return (
		<button
			className={classes}
			onClick={clickHandle}
		>
			{children}
		</button>
	)
}

GenButton.propTypes = {
	children: PropTypes.string,
	clickHandle: PropTypes.func,
	type: PropTypes.oneOf(BUTTON_TYPES),
	size: PropTypes.oneOf(SIZE_TYPES),
}

export default memo(GenButton)
