import React from "react";
import Header from "../../shared/components/header/header";
import Card from "../../shared/components/card/card";
import Attendant from "../../shared/components/attendant/attendant";
import Info from "../../shared/components/info/info";
import Confirm from "../../shared/components/confirm/confirm";
import "./app.scss";

const App = (): JSX.Element => {
	// add Snapshot test (Jest)
	// add (Working) unit test? (Mocha) -> instead of jest
	// add end2end test? (Cypress or Playwright) -> Bonus
	return (
		<div className="app__wrapper">
			<Header />
			<main className="app__content">
				<form className="app__form">
					<Card
						stepNumber={1}
						color={"green"}
					>
						<Attendant />
					</Card>
					<Card
						stepNumber={2}
						color={"blue"}
					>
						<Info />
					</Card>
					<Card
						stepNumber={3}
						color={"orange"}
					>
						<Confirm />
					</Card>
				</form>
			</main>
		</div>
	);
};
export default App;
