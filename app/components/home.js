import React from 'react';
import home from './images/home.jpg';
import './home.less';
const Home = () => {

	return (
		<header className="home-header">
		 <div className="flex-container">
		  <div className="flex-item">
		   <div className="intro">
		    <div className="intro-title">
		     <h1>Welcome to <span>Alice's fab salon</span></h1>
		    </div>
		    <div className="intro-content">
		     <p>Unique hair & beauty salon where you can experience true Powision glamoun.</p>
		    </div>
		    <div className="intro-buttons">
		     <a href="/services">See our services</a>
		    </div>
		   </div>
		  </div>
		  <div className="flex-item">
		   <img src={home}/>
		  </div>
		 </div>
		</header>
	)
}

export default Home;