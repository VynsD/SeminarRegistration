import React from "react";
import { render, screen } from "@testing-library/react";
import Attendant from "./attendant";

test("renders learn react link", () => {
	render(<Attendant />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});