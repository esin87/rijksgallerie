///////Navigation.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = ({ darkScheme }) => {
	return (
		<Navbar collapseOnSelect variant='light' expand='md'>
			<LinkContainer to='/home'>
				<Navbar.Brand>Rijksgalerij</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<LinkContainer to='/home'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/gallery'>
						<Nav.Link>Gallery</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/search'>
						<Nav.Link>Search</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/about'>
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
			{darkScheme ? (
				<i class='fas fa-toggle-off'></i>
			) : (
				<i class='fas fa-toggle-on'></i>
			)}
		</Navbar>
	);
};

export default Navigation;
