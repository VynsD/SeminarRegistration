import React, { Fragment } from "react";
import "./header.scss";

const Header = () => {
	return <Fragment>
		<header className="app__header">
			<h1 className="header__title">
				<span className="header__title--white">Seminar </span> 
				<span className="header__title--blue">Registration</span>
			</h1>
		</header>
	</Fragment>;
};
export default Header;
