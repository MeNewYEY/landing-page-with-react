import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<li className="navbar-brand">
			<a className="navbar-brand" href={props.linkUrl}>
				{props.link}
			</a>
		</li>
	);
};

Navbar.propTypes = {
	linkUrl: PropTypes.string,
	link: PropTypes.string
};

export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

export const Card = props => {
	return (
		<div className="col-3">
			<div className="card">
				<img src={props.cardUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle}</h5>
					<p className="card-text">{props.cardText}</p>
					<a href={props.cardButtonUrl} className="btn btn-primary">
						{props.cardButtonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	cardUrl: PropTypes.string,
	cardTitle: PropTypes.string,
	cardText: PropTypes.string,
	cardButtonUrl: PropTypes.string,
	cardButtonLabel: PropTypes.string
};
