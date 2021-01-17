import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { DarkThemeContext } from '../../darktheme-context.js';

const Search = ({
	handleChange,
	searchString,
	lastSearch,
	setSearch,
	routerProps,
	searchImages,
	getSearchImages,
	searchOptions,
	getMoreSearchImages,
	error,
	darkTheme,
}) => {
	let history = useHistory();

	function handleSubmit(event) {
		event.preventDefault();
		history.push(`/search/${searchString}`);
		getSearchImages(searchString);
	}
	return (
		<DarkThemeContext.Consumer>
			{({ darkThemeStyles }) => {
				return (
					<Container
						style={{ color: darkTheme === 'on' ? darkThemeStyles.color : '' }}>
						<SearchForm
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							searchString={searchString}
						/>
						{searchImages && (
							<SearchResults
								darkTheme={darkTheme}
								getSearchImages={getSearchImages}
								getMoreSearchImages={getMoreSearchImages}
								setSearch={setSearch}
								error={error}
								routerProps={routerProps}
								images={searchImages}
								searchOptions={searchOptions}
								lastSearch={lastSearch}
							/>
						)}
					</Container>
				);
			}}
		</DarkThemeContext.Consumer>
	);
};

export default Search;
