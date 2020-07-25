import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// import objectDetail from './objectdetail.json';

const Detail = ({ objectDetail, show, handleClose }) => {
	return (
		<Modal
			className='modal-container'
			show={show}
			onHide={handleClose}
			size='lg'>
			<Modal.Header closeButton>
				<Modal.Title>{objectDetail.artObject.longTitle}</Modal.Title>
			</Modal.Header>
			<Image fluid src={objectDetail.artObject.webImage.url} />
			<Modal.Body>
				<p>{objectDetail.artObject.label.makerLine}</p>
				<p>Description: {objectDetail.artObjectPage.plaqueDescription}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Detail;
