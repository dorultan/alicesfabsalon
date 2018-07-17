import React,{Component} from 'react';
import NavBar from './common/nav-bar';
import Footer from './common/footer';
import scrollReveal from 'scrollreveal'
window.sr = scrollReveal({reset: false});


class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		sr.reveal('.home-header', {duration: 500});
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