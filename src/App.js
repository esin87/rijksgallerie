//////App.js
import React from 'react';
import './App.css';
import data from './data.json';
import artobjects from './artobjects.json';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

//BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container';

//REACT COMPONENTS
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import Gallery from './Gallery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
			galleryImages: artobjects,
		};
	}

	handleSearch = () => {
		this.searchOptions = {
			key: process.env.REACT_APP_RIJKS_KEY,
			api: 'https://www.rijksmuseum.nl/en?',
			endpoint: '/search',
			queryParams: 'p=1&ps=12&st=Objects&ii=0',
		};
	};

	render() {
		return (
			<Container>
				<HashRouter basename='/'>
					<Navigation />
					<Switch>
						<Route
							exact
							path='/home'
							render={() => <CarouselContainer data={this.state.data} />}
						/>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/gallery'
							render={() => <Gallery images={this.state.galleryImages} />}
						/>
					</Switch>
				</HashRouter>
			</Container>
		);
	}
}

export default App;
