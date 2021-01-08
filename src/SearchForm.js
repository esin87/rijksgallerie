import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const SearchForm = ({ handleSubmit, handleChange, searchString }) => {
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label controlId='searchString'>Search</Form.Label>
					<Form.Control
						size='sm'
						placeholder='Search by any query, such as artist name, e.g., "Vermeer," or subject,
				e.g., "Madonna"'
						type='text'
						name='searchString'
						id='searchString'
						required
						onChange={handleChange}
						value={searchString}
					/>
				</Form.Group>

				<Button type='submit' variant='dark' className='btn-sm'>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default SearchForm;
