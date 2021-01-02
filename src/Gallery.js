///////Gallery.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import InfiniteScroll from 'react-infinite-scroll-component';

import Detail from './Detail.js';
class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			activeItem: '',
			error: false,
		};
	}

	componentDidMount() {
		this.props.getGalleryImages();
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false, error: false, activeItem: '' });
	};

	handleError = () => {
		this.setState({ error: true });
	};

	getDetail = (itemId) => {
		fetch(
			`${this.props.searchOptions.url}/collection/${itemId}?key=${this.props.searchOptions.key}`
		)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ activeItem: res });
			})
			.then((res) => this.handleShow())
			.catch((err) => {
				this.handleError();
				this.handleShow();
			});
	};

	render() {
		if (this.props.images) {
			return (
				<InfiniteScroll
					dataLength={this.props.images.length}
					next={this.props.getMoreImages}
					hasMore={true}
					loader={
						<Container
							className='d-flex  justify-content-center align-items-center align-content-center'
							style={{ minHeight: '10vh' }}>
							<span style={{ paddingRight: '1em' }}>
								Loading more results ...
							</span>
						</Container>
					}>
					<CardColumns>
						{this.props.images.map((object) => {
							return (
								<Card key={object.id}>
									{object.webImage && (
										<Card.Img
											variant='top'
											src={object.webImage ? object.webImage.url : ''}
											alt={object.title}
										/>
									)}
									<Card.Body>
										{object.webImage ? (
											''
										) : (
											<Card.Title>No Image Available</Card.Title>
										)}
										<Card.Text className='text-muted'>
											{object.longTitle}
										</Card.Text>
										<Button
											onClick={() => this.getDetail(object.objectNumber)}
											variant='outline-dark'>
											Details
										</Button>
									</Card.Body>
								</Card>
							);
						})}
						{(this.state.activeItem || this.state.error) && (
							<Detail
								objectDetail={this.state.activeItem}
								show={this.state.show}
								handleClose={this.handleClose}
								error={this.state.error}
							/>
						)}
					</CardColumns>
				</InfiniteScroll>
			);
		} else {
			return (
				<Container
					className='d-flex  justify-content-center align-items-center align-content-center'
					style={{ minHeight: '90vh' }}>
					<span style={{ paddingRight: '1em' }}>Loading results{'  '}</span>
					<Spinner animation='border' variant='dark' size='sm' />
				</Container>
			);
		}
	}
}

export default Gallery;
