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
							src={item.webImage.url}
							alt={item.title}
						/>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CarouselContainer;
