import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

const Gallery = ({ images }) => {
	return (
		<CardColumns>
			{images.map((object) => {
				return (
					<Card key={object.id}>
						<Card.Img
							variant='top'
							src={object.webImage.url}
							alt={object.title}
						/>
						<Card.Body>
							<Card.Text className='text-muted'>{object.longTitle}</Card.Text>
							<Button variant='outline-dark'>Details</Button>
						</Card.Body>
					</Card>
				);
			})}
		</CardColumns>
	);
};

export default Gallery;
