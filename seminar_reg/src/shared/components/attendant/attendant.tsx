import React, { ChangeEvent, Fragment, useContext, useEffect } from "react";
import { FormContext } from "../../context/context";
import "./attendant.scss";

const attdLsOpts = [
	{ id: 1, label: "1" },
	{ id: 2, label: "2" },
	{ id: 3, label: "3" },
	{ id: 4, label: "4" },
	{ id: 5, label: "5" }
];

const Attendant = () => {
	const { formState, setFromState } = useContext(FormContext);
	const { attendants } = formState;

	const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		return setFromState({
			...formState,
			attendants: {
				list: event.target.value,
				attendees: []
			}
		});
	};
	const handleInput = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		return setFromState({
			...formState,
			attendants: {
				...attendants,
				attendees: [...attendants.attendees.map((attd, i) => {
					if(i === index) {
						attd.name = event.target.value;
					}
					return attd;
				}
					// attendants.attendees[index].name: event.target.value
				)]
			}
		});
	};

	useEffect(() => {
		const { list } = attendants || {};
		if(list) {
			setFromState({
				...formState,
				attendants: {
					...attendants,
					attendees: [
						...new Array(parseInt(list as string))
							.fill(null)
							.map((el, index) => {
								return { id: index, name: el };
							})
					]
				}
			});
		}
	}, [attendants.list]);

	useEffect(() => {
		console.info("attendees :", attendants.attendees);
	}, [attendants.attendees]);

	return <Fragment>
		<section id="attendants" className="attendants__wrapper">
			<div className="attendants__header">
				<div className="attendants__heading">
					<h4>How many people will be attending?</h4>
				</div>
				<div className="attendants__select">
					<select
						id="attNumber"
						name="attNumberLs"
						defaultValue={0}
						onChange={handleSelect}
					>
						<option value={0} disabled>Please choose</option>
						{attdLsOpts.map((option: { id: number, label: string }) => {
							const { id, label } = option;
							return 	<option key={id} value={id}>{label}</option>;
						})}
					</select>
				</div>
			</div>
			{attendants?.list
				? <div className="attendants__list">
					<h3>Please provide full names:</h3>
					{attendants?.attendees.map((el, index) => {
						return <div key={index} className="attendants__entry">
							<label
								htmlFor={`attdCtrl${index}`}
								className="attendants__entry-label"
							>
									Attendee {index + 1} Name:
							</label>
							<input
								id={`attdCtrl${index}`}
								type="text"
								name={`attdCtrl${index}name`}
								defaultValue={attendants?.attendees[index].name}
								onChange={e => handleInput(e, index)}
							/>
						</div>;
					})}
				</div>
				: null
			}
		</section>
	</Fragment>;
};
export default Attendant;
