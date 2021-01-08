import React from 'react';
import Container from 'react-bootstrap/Container';
import Gallery from './Gallery';

class SearchResults extends React.Component {
	render() {
		if (!this.props.images) {
			return <div>Loading...</div>;
		}
		return (
			<Container style={{ marginTop: '1em' }}>
				{this.props.setSearch && !this.props.error && (
					<>
						<p>
							Showing results for{' '}
							<span style={{ fontStyle: 'italic' }}>
								{this.props.lastSearch}:
							</span>{' '}
						</p>
						<Gallery
							images={this.props.images}
							getGalleryImages={this.props.getSearchImages}
							searchOptions={this.props.searchOptions}
							getMoreGalleryImages={this.props.getMoreSearchImages}
						/>
					</>
				)}
				{this.props.setSearch && this.props.error && (
					<p>
						No results found for{' '}
						<span style={{ fontStyle: 'italic' }}>{this.props.lastSearch}</span>
						. Please try another search
					</p>
				)}
			</Container>
		);
	}
}

export default SearchResults;
