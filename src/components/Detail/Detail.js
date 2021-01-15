import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Detail = ({ error, objectDetail, show, handleClose, darkScheme }) => {
	if (!error) {
		return (
			<Modal
				style={{
					border: darkScheme === 'on' ? '1px solid #6c757' : '',
					color: darkScheme === 'on' ? 'white' : '',
				}}
				className='modal-container'
				show={show}
				onHide={handleClose}
				size='xl'>
				<Modal.Header
					closeButton
					style={{ backgroundColor: darkScheme === 'on' ? '#292b2c' : '' }}>
					<Modal.Title>{objectDetail.artObject.longTitle}</Modal.Title>
				</Modal.Header>
				{objectDetail.artObject.webImage && (
					<Image fluid src={objectDetail.artObject.webImage.url} />
				)}
				<Modal.Body
					style={{ backgroundColor: darkScheme === 'on' ? '#292b2c' : '' }}>
					<p>{objectDetail.artObject.label.makerLine}</p>
					<p>
						Description:{' '}
						{objectDetail.artObjectPage.plaqueDescription ? (
							objectDetail.artObjectPage.plaqueDescription
						) : (
							<span style={{ fontStyle: 'italic' }}>Not available</span>
						)}
					</p>
				</Modal.Body>
				<Modal.Footer
					style={{ backgroundColor: darkScheme === 'on' ? '#292b2c' : '' }}>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	} else {
		return (
			<Modal
				size='xl'
				show={show}
				onHide={handleClose}
				className='modal-container'
				style={{
					border: darkScheme === 'on' ? '1px solid #6c757' : '',
					color: darkScheme === 'on' ? 'white' : '',
				}}>
				<Modal.Header
					closeButton
					style={{ backgroundColor: darkScheme === 'on' ? '#292b2c' : '' }}>
					Oops!
				</Modal.Header>
				<Modal.Body
					style={{ backgroundColor: darkScheme === 'on' ? '#292b2c' : '' }}>
					<p>Something went wrong. Please try another image.</p>
				</Modal.Body>
			</Modal>
		);
	}
};

export default Detail;
