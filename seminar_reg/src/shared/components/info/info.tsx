import React, { Fragment, useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/context";
import { Attendees } from "../../models/props.model";
import "./info.scss";

const Info = () => {
	const { formState } = useContext(FormContext);
	// const { formState, setFromState } = useContext(FormContext);
	const { attendants } = formState;
	const [ stepIsActive, setStepIsActive ] = useState(false);

	useEffect(() => {
		if(attendants?.attendees.every((el: Attendees) => el.name)) {
			setStepIsActive(true);
		}
	}, [attendants.attendees]);

	return <Fragment>
		<section
			id="info"
			className={`info__wrapper${!stepIsActive ? " step--disabled" : ""}`}
		>
			<div className="info__company">
				<h4>Would you like your company name on your badge?</h4>
				<div className="info__heading">
					<input type="radio" name="companyYes" id="cmpY" />
					<label htmlFor="cmpY">Yes</label>
					<input type="radio" name="companyNo" id="cmpN" />
					<label htmlFor="cmpN">No</label>
				</div>
			</div>
			<div className="info__spAccm">
				<h4>Will anyone in your group require special accomodations?</h4>
				<div className="info__heading">
					<input type="radio" name="spAccmYes" id="spAccmY" />
					<label htmlFor="spAccmY">Yes</label>
					<input type="radio" name="spAccmNo" id="spAccmN" />
					<label htmlFor="spAccmN">No</label>
				</div>
			</div>
		</section>
	</Fragment>;
};
export default Info;
