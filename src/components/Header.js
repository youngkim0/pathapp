import React from 'react';
import logo from '../images/path_logo.png';
export default function Header() {
	return (
		<div className="header flex">
			<img src={logo} alt="" />

			<ul className="flex">
				<li>Essay</li>
				<li>Counselling</li>
			</ul>
		</div>
	);
}
