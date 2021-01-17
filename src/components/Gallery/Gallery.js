///////Gallery.js
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import InfiniteScroll from 'react-infinite-scroll-component';

import Detail from '../Detail/Detail.js';

const Gallery = ({
	images,
	getGalleryImages,
	searchOptions,
	getMoreGalleryImages,
	darkTheme,
}) => {
	const [show, setShow] = useState(false);
	const [activeItem, setActiveItem] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!images.length) getGalleryImages();
		//eslint-disable-next-line
	}, []);

	const handleShow = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
		setError(false);
		setActiveItem('');
	};

	const handleError = () => {
		setError(true);
	};

	const getDetail = (itemId) => {
		fetch(`${searchOptions.url}/collection/${itemId}?key=${searchOptions.key}`)
			.then((res) => res.json())
			.then((res) => {
				setActiveItem(res);
			})
			.then((res) => handleShow())
			.catch((err) => {
				handleError();
				handleShow();
			});
	};

	if (images) {
		return (
			<InfiniteScroll
				dataLength={images.length}
				next={getMoreGalleryImages}
				hasMore={true}
				loader={
					<Container
						className='d-flex  justify-content-center align-items-center align-content-center'
						style={{ minHeight: '10vh' }}>
						<span
							style={{
								paddingRight: '1em',
								color: darkTheme === 'on' ? 'white' : '',
							}}>
							Loading more results ...
						</span>
					</Container>
				}>
				<Container>
					<CardGroup>
						<Row>
							{images.map((object) => {
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
												border: darkTheme === 'on' ? '1px solid #6c757' : '',
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
													backgroundColor: darkTheme === 'on' ? '#292b2c' : '',
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
													onClick={() => getDetail(object.objectNumber)}
													variant={
														darkTheme === 'on' ? 'dark' : 'outline-dark'
													}>
													Details
												</Button>
											</Card.Body>
										</Card>
									</Col>
								);
							})}
							{(activeItem || error) && (
								<Detail
									objectDetail={activeItem}
									show={show}
									handleClose={handleClose}
									error={error}
									darkTheme={darkTheme}
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
						color: darkTheme === 'on' ? 'white' : '',
					}}>
					Loading results{'  '}
				</span>
				<Spinner
					animation='border'
					variant={darkTheme === 'on' ? 'light' : 'dark'}
					size='sm'
				/>
			</Container>
		);
	}
};

export default Gallery;
