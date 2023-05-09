import React from "react";
import "./card.scss";
import type { CardProps } from "../../models/props.model";



const Card = ({ stepNumber, color, children }: CardProps): JSX.Element => {
	return (
		<div className="card__wrapper">
			<span className="card__step">
				<strong>Step { stepNumber }</strong>
			</span>
			<div className={`card__content card__content--${color}`}>
				<div className="card__children">
					{ children }
				</div>
			</div>
		</div>
	);
};
export default Card;
