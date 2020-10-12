// //include bootstrap npm library into the bundle
// import "bootstrap";

// //include your index.scss file into the bundle
// import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Navbar, Jumbotron, Card } from "./component/home";

const Menu = props => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<span className="navbar-brand mb-0 h1">{props.logo}</span>
			<ul className="navbar-brand justify-content-end">
				<Navbar link="Home" />
				<Navbar link="About" />
				<Navbar link="Services" />
				<Navbar link="Contact" />
			</ul>
		</nav>
	);
};

Menu.propTypes = {
	logo: PropTypes.string
};

const Grid = props => {
	return (
		<div className="row text-center">
			<Card
				cardUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-wjupuQMNeJscpw6i3BBzPjMYKsVFX7X0tg&usqp=CAU"
				cardTitle="Card Title"
				cardText="ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				cardButtonLabel="Find Out More"
			/>
			<Card
				cardUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-wjupuQMNeJscpw6i3BBzPjMYKsVFX7X0tg&usqp=CAU"
				cardTitle="Card Title"
				cardText="ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				cardButtonLabel="Find Out More"
			/>
			<Card
				cardUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMoWsF10May-tDA9Cuxa09QFnpp7a0FLQuA&usqp=CAU"
				cardTitle="Card Title"
				cardText="ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				cardButtonLabel="Find Out More"
			/>
			<Card
				cardUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-wjupuQMNeJscpw6i3BBzPjMYKsVFX7X0tg&usqp=CAU"
				cardTitle="Card Title"
				cardText="ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				cardButtonLabel="Find Out More"
			/>
		</div>
	);
};

ReactDOM.render(
	<div>
		<Menu logo="Start Bootstrap" />
		<div className="container">
			<Jumbotron
				title="A Warm Welcome"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				buttonLabel="Call To Action!"
				buttonURL=""
			/>
			<Grid />
		</div>
	</div>,
	document.querySelector("#app")
);
