import React from "react";
import { render, screen } from "@testing-library/react";
import Info from "./info";

test("renders learn react link", () => {
	render(<Info />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});