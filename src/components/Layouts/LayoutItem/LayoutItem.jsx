import React from 'react'
import "./LayoutItem.css"

const LayoutItem = ({children, className = [], ...props}) => {
	return (
		<div className={["LayoutItem", ...className].join(" ")} {...props}>
			{children}
		</div>
	)
}

export default LayoutItem
