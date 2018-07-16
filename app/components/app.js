import React,{Component} from 'react';
import NavBar from './common/nav-bar';
import Footer from './common/footer';

const App = ({children}) => {

	return (
		<main>
		 <NavBar/>
		 {children}
		 <Footer/>
		</main>
	)
}

export default App;