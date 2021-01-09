//////CarouselContainer.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CSSTransitionGroup } from 'react-transition-group';

const CarouselContainer = ({ data }) => {
	return (
		<CSSTransitionGroup
			transitionName='fade'
			transitionAppear={true}
			transitionAppearTimeout={500}
			transitionEnter={false}
			transitionLeave={false}>
			<Carousel style={{ minHeight: '90vh' }}>
				{data.map((item) => {
					return (
						<Carousel.Item key={item.id} style={{ maxHeight: '90vh' }}>
							<img
								className='d-block w-100'
								style={{
									height: '90vh',
									width: '100%',
									objectFit: 'cover',
									overflow: 'hidden',
								}}
								src={item.webImage.url}
								alt={item.title}
							/>
							<Carousel.Caption>
								<p>{item.longTitle}</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</CSSTransitionGroup>
	);
};

export default CarouselContainer;
