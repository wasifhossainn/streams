import React from 'react';
import { Field, reduxForm } from 'redux-form';

//Class based component have helper methods to better organise code
class StreamForm extends React.Component {
	// Destructured input
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	// Render Input
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		//Take all the input properties and add as props to the input element
		return (
			<div className={className}>
				<label> {label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			// Function gets called when it is submitted
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field label="Enter Title" name="title" component={this.renderInput} />
				<Field label="Enter Description" name="description" component={this.renderInput} />
				<button className="ui button primary"> Submit </button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		// Only ran if the user did not enter a title
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}
	return errors;
};

//Redux form starts to store all the
// value of that form within the key of that reducer
export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);
