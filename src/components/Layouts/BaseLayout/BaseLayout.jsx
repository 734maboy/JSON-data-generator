import React from 'react'
import "./BaseLayout.css";

const BaseLayout = ({children, ...props}) => {
	return (
		<div {...props}>
			{children}
		</div>
	)
}

export default BaseLayout
