import React from 'react';
import Container from 'react-bootstrap/Container';
import Gallery from '../Gallery/Gallery';

const SearchResults = ({
	images,
	setSearch,
	error,
	lastSearch,
	getSearchImages,
	searchOptions,
	getMoreSearchImages,
	darkTheme,
}) => {
	if (!images) {
		return <div>Loading...</div>;
	}
	return (
		<Container style={{ marginTop: '1em' }}>
			{setSearch && !error && (
				<>
					<p>
						Showing results for{' '}
						<span style={{ fontStyle: 'italic' }}>{lastSearch}:</span>{' '}
					</p>
					<Gallery
						darkTheme={darkTheme}
						images={images}
						getGalleryImages={getSearchImages}
						searchOptions={searchOptions}
						getMoreGalleryImages={getMoreSearchImages}
					/>
				</>
			)}
			{setSearch && error && (
				<p>
					No results found for{' '}
					<span style={{ fontStyle: 'italic' }}>{lastSearch}</span>. Please try
					another search
				</p>
			)}
		</Container>
	);
};

export default SearchResults;
