import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
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

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
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
			.catch((err) => console.error(err));
	};

	render() {
		return (
			<CardColumns>
				{this.props.images.map((object) => {
					return (
						<Card key={object.id}>
							<Card.Img
								variant='top'
								src={object.webImage.url}
								alt={object.title}
							/>
							<Card.Body>
								<Card.Text className='text-muted'>{object.longTitle}</Card.Text>
								<Button
									onClick={() => this.getDetail(object.objectNumber)}
									variant='outline-dark'>
									Details
								</Button>
							</Card.Body>
						</Card>
					);
				})}
				{this.state.activeItem && (
					<Detail
						objectDetail={this.state.activeItem}
						show={this.state.show}
						handleClose={this.handleClose}
					/>
				)}
			</CardColumns>
		);
	}
}

export default Gallery;
