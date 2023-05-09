import React from "react";
import { render, screen } from "@testing-library/react";
import Confirm from "./confirm";


test("renders learn react link", () => {
	render(<Confirm />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});