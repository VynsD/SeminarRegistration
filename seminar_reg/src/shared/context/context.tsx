import React, { Fragment, useMemo, useState } from "react";
import { createContext } from "react";
import { FormContextState, FormState } from "../models/props.model";
import App from "../../pages/home/app";

export const initialState: FormState = {
	attendants: {
		list: 0,
		attendees: []
	},
	info: {
		cmpName: "",
		display: false,
		specialAcmd: false
	},
	confirm: {
		verify: false
	}
};
export const FormContext = createContext<FormContextState>({
	formState: initialState,
	setFromState: () => {}
});

export const Context = () => {
	const [ formState, setFromState ] = useState(initialState);
	const value = useMemo(
		() => ({ formState, setFromState }), 
		[formState]
	);
	return <Fragment>
		<FormContext.Provider value={value}>
			{useMemo(() => <App />, [])}
		</FormContext.Provider>
	</Fragment>;
};
export default Context;
