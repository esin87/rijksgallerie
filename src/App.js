//////App.js
import React from 'react';
import './App.css';
import data from './data.json';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

//BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container';

//REACT APP COMPONENTS
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import Gallery from './Gallery';
import Search from './Search';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			galleryImages: '',
		};

		this.searchOptions = {
			key: process.env.REACT_APP_RIJKS_KEY,
			url: 'https://www.rijksmuseum.nl/api/en',
			numberOfResults: 14,
			page: 1,
		};
	}

	getGalleryImages = () => {
		this.searchOptions.page = 1;
		const url = `${this.searchOptions.url}/collection?key=${this.searchOptions.key}&ps=${this.searchOptions.numberOfResults}&p=${this.searchOptions.page}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					galleryImages: res.artObjects,
				})
			)
			.catch((err) => console.error(err));
	};

	getMoreImages = () => {
		this.searchOptions.page++;
		const url = `${this.searchOptions.url}/collection?key=${this.searchOptions.key}&ps=${this.searchOptions.numberOfResults}&p=${this.searchOptions.page}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				this.setState((prevState) => ({
					galleryImages: [...prevState.galleryImages, ...res.artObjects],
				}));
			})
			.catch((err) => console.error(err));
	};

	render() {
		return (
			<Container>
				<HashRouter basename='/'>
					<Navigation />
					<main>
						<Switch>
							<Route
								exact
								path='/home'
								render={() => <CarouselContainer data={data} />}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/gallery'
								render={() => (
									<Gallery
										searchOptions={this.searchOptions}
										images={this.state.galleryImages}
										getGalleryImages={this.getGalleryImages}
										getMoreImages={this.getMoreImages}
									/>
								)}
							/>
							<Route
								path='/search'
								render={(routerProps) => (
									<Search
										searchOptions={this.searchOptions}
										routerProps={routerProps}
									/>
								)}
							/>
							<Redirect path='*' to='/home' />
						</Switch>
					</main>
				</HashRouter>
			</Container>
		);
	}
}

export default App;
