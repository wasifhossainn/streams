import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

//Class based component have helper methods to better organise code
class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			// Function gets called when it is submitted
			<div>
				<h3> Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
