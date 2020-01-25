import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

//App
const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/show" exact component={StreamShow} />
					<Route path="/streams/delete" exact component={StreamDelete} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route path="/streams/new" exact component={StreamCreate} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
