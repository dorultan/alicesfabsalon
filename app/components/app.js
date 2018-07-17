import React,{Component} from 'react';
import NavBar from './common/nav-bar';
import Footer from './common/footer';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	render() {

		return (
			<main>
			 <NavBar/>
			 {this.props.children}
			 <Footer/>
			</main>
		)
	}
}

export default App;