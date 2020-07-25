import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchForm = ({ handleSubmit, handleChange, searchString }) => {
	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col>
					<Form.Group>
						<Form.Control
							size='sm'
							placeholder='Search by  full artist name, i.e., "Rembrandt van Rijn" or "Jan
							Both"'
							type='text'
							name='searchString'
							required
							onChange={handleChange}
							value={searchString}
						/>
					</Form.Group>
				</Col>
				<Col md='auto'>
					<Button type='submit' variant='dark' className='btn-sm'>
						Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchForm;
