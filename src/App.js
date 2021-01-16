//////App.js
import React, { useState } from 'react';
import './App.css';
import data from './data/data.json';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

//BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container';

//REACT APP COMPONENTS
import CarouselContainer from './components/CarouselContainer/CarouselContainer';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Search from './components/Search/Search';

const App = () => {
	const [galleryImages, setGalleryImages] = useState('');
	const [searchImages, setSearchImages] = useState('');
	const [searchString, setSearchString] = useState('');
	const [lastSearch, setLastSearch] = useState('');
	const [setSearch, setSetSearch] = useState(false);
	const [error, setError] = useState(false);
	const [darkScheme, setDarkScheme] = useState(
		localStorage.getItem('darkScheme') === 'on' ? 'on' : 'off'
	);
	const searchOptions = {
		key: process.env.REACT_APP_RIJKS_KEY,
		url: 'https://www.rijksmuseum.nl/api/en',
		numberOfResults: 14,
		page: 1,
	};

	const toggleDarkScheme = () => {
		if (darkScheme === 'on') {
			setDarkScheme('off');
			localStorage.setItem('darkScheme', 'off');
		} else {
			setDarkScheme('on');
			localStorage.setItem('darkScheme', 'on');
		}
	};

	const getGalleryImages = () => {
		searchOptions.page = 1;
		const url = `${searchOptions.url}/collection?key=${searchOptions.key}&ps=${searchOptions.numberOfResults}&p=${searchOptions.page}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => setGalleryImages(res.artObjects))
			.catch((err) => console.error(err));
	};

	const getMoreGalleryImages = () => {
		searchOptions.page++;
		const url = `${searchOptions.url}/collection?key=${searchOptions.key}&ps=${searchOptions.numberOfResults}&p=${searchOptions.page}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setGalleryImages([...galleryImages, ...res.artObjects]);
			})
			.catch((err) => console.error(err));
	};

	const getSearchImages = (searchString) => {
		searchOptions.page = 1;
		if (searchString) {
			const url = `${searchOptions.url}/collection?key=${searchOptions.key}&q=${searchString}&ps=14&p=${searchOptions.page}`;

			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setError(false);
					setSearchImages(res.artObjects);
					setSetSearch(true);
					setSearchString('');
					setLastSearch(searchString);
				})
				.then((res) => {
					if (!searchImages.length) {
						setError(true);
					}
				})
				.catch((err) => {
					setError(true);
				});
		}
	};

	const getMoreSearchImages = () => {
		searchOptions.page++;
		const url = `${searchOptions.url}/collection?key=${searchOptions.key}&q=${lastSearch}&ps=14&p=${searchOptions.page}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setSearchImages([...searchImages, ...res.artObjects]);
			})
			.catch(console.error);
	};

	const handleChange = (event) => {
		setSearchString(event.target.value);
	};

	return (
		<div
			style={{
				backgroundColor: darkScheme === 'on' ? '#292b2c' : '',
				height: '100%',
				minHeight: '100vh',
			}}>
			<Container
				style={{
					backgroundColor: darkScheme === 'on' ? '#292b2c' : '',
				}}>
				<HashRouter basename='/'>
					<Navigation
						darkScheme={darkScheme}
						toggleDarkScheme={toggleDarkScheme}
					/>
					<main>
						<Switch>
							<Route
								exact
								path='/home'
								render={() => <CarouselContainer data={data} />}
							/>
							<Route
								exact
								path='/about'
								render={() => <About darkScheme={darkScheme} />}
							/>
							<Route
								exact
								path='/gallery'
								render={() => (
									<Gallery
										searchOptions={searchOptions}
										images={galleryImages}
										getGalleryImages={getGalleryImages}
										getMoreGalleryImages={getMoreGalleryImages}
										darkScheme={darkScheme}
									/>
								)}
							/>
							<Route
								path='/search'
								render={(routerProps) => (
									<Search
										darkScheme={darkScheme}
										searchOptions={searchOptions}
										handleChange={handleChange}
										searchString={searchString}
										lastSearch={lastSearch}
										routerProps={routerProps}
										getSearchImages={getSearchImages}
										getMoreSearchImages={getMoreSearchImages}
										setSearch={setSearch}
										error={error}
										searchImages={searchImages}
									/>
								)}
							/>
							<Redirect path='*' to='/home' />
						</Switch>
					</main>
				</HashRouter>
			</Container>
		</div>
	);
};

export default App;
