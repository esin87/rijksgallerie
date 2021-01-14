///////Gallery.js
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
		if (!this.props.images.length) this.props.getGalleryImages();
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
					next={this.props.getMoreGalleryImages}
					hasMore={true}
					loader={
						<Container
							className='d-flex  justify-content-center align-items-center align-content-center'
							style={{ minHeight: '10vh' }}>
							<span
								style={{
									paddingRight: '1em',
									color: this.props.darkScheme === 'on' ? 'white' : '',
								}}>
								Loading more results ...
							</span>
						</Container>
					}>
					<Container>
						<CardGroup>
							<Row>
								{this.props.images.map((object) => {
									return (
										<Col
											key={object.id}
											xs={12}
											s={12}
											md={6}
											lg={4}
											xl={3}
											style={{ marginTop: '1em' }}>
											<Card
												style={{
													border:
														this.props.darkScheme === 'on'
															? '1px solid #6c757'
															: '',
												}}>
												{object.webImage && (
													<Card.Img
														variant='top'
														src={object.webImage ? object.webImage.url : ''}
														alt={object.title}
													/>
												)}
												<Card.Body
													style={{
														backgroundColor:
															this.props.darkScheme === 'on' ? '#292b2c' : '',
													}}>
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
														variant={
															this.props.darkScheme === 'on'
																? 'dark'
																: 'outline-dark'
														}>
														Details
													</Button>
												</Card.Body>
											</Card>
										</Col>
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
							</Row>
						</CardGroup>
					</Container>
				</InfiniteScroll>
			);
		} else {
			return (
				<Container
					className='d-flex  justify-content-center align-items-center align-content-center'
					style={{ minHeight: '90vh' }}>
					<span
						style={{
							paddingRight: '1em',
							color: this.props.darkScheme === 'on' ? 'white' : '',
						}}>
						Loading results{'  '}
					</span>
					<Spinner
						animation='border'
						variant={this.props.darkScheme === 'on' ? 'light' : 'dark'}
						size='sm'
					/>
				</Container>
			);
		}
	}
}

export default Gallery;
