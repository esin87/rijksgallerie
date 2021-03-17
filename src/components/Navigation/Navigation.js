///////Navigation.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { DarkThemeContext } from '../../darktheme-context.js';

const Navigation = ({ darkTheme, toggleDarkTheme }) => {
	return (
		<DarkThemeContext.Consumer>
			{({ darkThemeStyles }) => {
				return (
					<Navbar
						collapseOnSelect
						variant={darkTheme === 'on' ? 'dark' : 'light'}
						style={{
							backgroundColor:
								darkTheme === 'on' ? darkThemeStyles.backgroundColor : '',
						}}
						expand='md'>
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
							<Navbar.Text
								style={{
									cursor: 'pointer',
									marginLeft: 'auto',
								}}>
								{darkTheme === 'on' ? (
									<i
										className='fas fa-toggle-off fa-lg'
										onClick={toggleDarkTheme}
										style={{
											color: '#f7f7f7',
										}}></i>
								) : (
									<i
										className='fas fa-toggle-on fa-lg'
										onClick={toggleDarkTheme}></i>
								)}
							</Navbar.Text>
						</Navbar.Collapse>
					</Navbar>
				);
			}}
		</DarkThemeContext.Consumer>
	);
};

export default Navigation;
