//////CarouselContainer.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const CarouselContainer = ({ data }) => {
	return (
		<Carousel>
			{data.map((item) => {
				return (
					<Carousel.Item key={item.id}>
						<img
							className='d-block w-100'
							style={{
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={item.webImage.url}
							alt={item.title}
						/>
						<Carousel.Caption>
							<p>
								{item.title}, by {item.principalOrFirstMaker}
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CarouselContainer;
