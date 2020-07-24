import React from 'react';
import data from './data.json';
//BOOTSTRAP COMPONENTS
import Container from 'react-bootstrap/Container';

//REACT COMPONENTS
import CarouselContainer from './CarouselContainer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data,
		};
	}
	render() {
		return (
			<Container>
				<CarouselContainer data={this.state.data} />
			</Container>
		);
	}
}

export default App;
