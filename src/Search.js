import React, { useEffect } from 'react';
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
	clearSearch,
}) => {
	let history = useHistory();

	// useEffect(() => {
	// 	return clearSearch();
	// 	//eslint-disable-next-line
	// }, []);

	function handleSubmit(event) {
		event.preventDefault();
		history.push(`/search/${searchString}`);
		getSearchImages(searchString);
	}

	return (
		<Container>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			{searchImages && (
				<SearchResults
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
