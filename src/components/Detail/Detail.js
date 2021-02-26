import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { DarkThemeContext } from '../../darktheme-context.js';

const Detail = ({ error, objectDetail, show, handleClose, darkTheme }) => {
	return (
		<DarkThemeContext.Consumer>
			{({ darkThemeStyles }) => {
				if (!error) {
					return (
						<Modal
							style={
								darkTheme === 'on' && {
									border: darkThemeStyles.grayBorder,
									color: darkThemeStyles.color,
								}
							}
							className='modal-container'
							show={show}
							onHide={handleClose}
							size='xl'>
							<Modal.Header
								closeButton
								style={{
									backgroundColor:
										darkTheme === 'on' && darkThemeStyles.backgroundColor,
								}}>
								<Modal.Title>{objectDetail.artObject.longTitle}</Modal.Title>
							</Modal.Header>
							{objectDetail.artObject.webImage && (
								<Image fluid src={objectDetail.artObject.webImage.url} />
							)}
							<Modal.Body
								style={{
									backgroundColor:
										darkTheme === 'on' && darkThemeStyles.backgroundColor,
								}}>
								<p>{objectDetail.artObject.label.makerLine}</p>
								<p>
									Description:{' '}
									{objectDetail.artObjectPage.plaqueDescription || (
										<span style={{ fontStyle: 'italic' }}>Not available</span>
									)}
								</p>
							</Modal.Body>
							<Modal.Footer
								style={{
									backgroundColor:
										darkTheme === 'on' && darkThemeStyles.backgroundColor,
								}}>
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
							style={
								darkTheme === 'on' && {
									border: darkThemeStyles.grayBorder,
									color: darkThemeStyles.color,
								}
							}>
							<Modal.Header
								closeButton
								style={{
									backgroundColor:
										darkTheme === 'on' && darkThemeStyles.backgroundColor,
								}}>
								Oops!
							</Modal.Header>
							<Modal.Body
								style={{
									backgroundColor:
										darkTheme === 'on' && darkThemeStyles.backgroundColor,
								}}>
								<p>Something went wrong. Please try another image.</p>
							</Modal.Body>
						</Modal>
					);
				}
			}}
		</DarkThemeContext.Consumer>
	);
};

export default Detail;
