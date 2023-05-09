import React, { Fragment, useContext } from "react";
import { FormContext } from "../../context/context";
import "./confirm.scss";

const Confirm = () => {
	const { formState, setFromState } = useContext(FormContext);
	const { confirm } = formState;

	const handleCmfCheck = () => setFromState({
		...formState,
		confirm: { verify: !confirm.verify } 
	});

	return <Fragment>
		<section id="confirm" className="confirm__wrapper">
			<div className="confirm__header">
				<div className="confirm__heading">
					<h4>Are you ready to rock?</h4>
				</div>
				<div className="confirm__check">
					<input
						id="cmfRadio"
						type="checkbox"
						name="confirmRadio"
						checked={confirm?.verify}
						onChange={handleCmfCheck}
					/>
				</div>
			</div>
			<div className="confirm__btn">
				<button disabled={!confirm?.verify}>Complete Registration</button>
			</div>
		</section>
	</Fragment>;
};
export default Confirm;
