//////App.js
import React from 'react';
import './App.css';
import data from './data.json';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

//BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container';

//REACT COMPONENTS
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
		};
	}
	render() {
		return (
			<Container style={{ maxHeight: '100%' }}>
				<HashRouter basename='/'>
					<Navigation />
					<Switch>
						<Route
							exact
							path='/home'
							render={() => <CarouselContainer data={this.state.data} />}
						/>
						<Route exact path='/about' component={About} />
					</Switch>
				</HashRouter>
			</Container>
		);
	}
}

export default App;
