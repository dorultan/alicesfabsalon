import React,{Component} from 'react';
import NavBar from './common/nav-bar';
import Footer from './common/footer';


class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		sr.reveal('.home-header', {duration: 500});
		sr.reveal('.section-one-img', {
			origin: 'right',
			distance: '100px',
			duration: 500
		})
		sr.reveal('.section-two-img', {
			origin: 'left',
			distance: '100px',
			duration: 500
		})
		sr.reveal('.section-three-img', {
			origin: 'right',
			distance: '100px',
			duration: 500
		})
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