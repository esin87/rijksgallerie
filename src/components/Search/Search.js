import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

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
	darkScheme,
}) => {
	let history = useHistory();

	function handleSubmit(event) {
		event.preventDefault();
		history.push(`/search/${searchString}`);
		getSearchImages(searchString);
	}

	return (
		<Container style={{ color: darkScheme === 'on' ? 'white' : '' }}>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			{searchImages && (
				<SearchResults
					darkScheme={darkScheme}
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
};

export default Search;