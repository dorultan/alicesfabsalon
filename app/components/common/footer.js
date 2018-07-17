import React from 'react';
import './footer.less';
import {NavLink} from 'react-router-dom';

const Footer = () => {

	return (
		<footer className="footer">
		 <div className="flex-row">
		  <div className="flex-col">
		    <div className="services-map-w">
		  	<ul className="services-map">
		  	 <li className="list-title">Our services</li>
		  	 <li className="part-one">
		  	 	<ul>
			  	 <li><NavLink push="true" to="/services/hair">For hair</NavLink></li>
			  	 <li><NavLink push="true" to="/services/eyes">Eyes</NavLink></li>
			  	 <li><NavLink push="true" to="/services/manicure">Manicure</NavLink></li>
			  	 <li><NavLink push="true" to="/services/pedicure">Pedicure</NavLink></li>
		  	 	</ul>
		  	 </li>
		  	 <li className="part-two">
		  	 	<ul>
			  	 <li><NavLink push="true" to="/services/massage">Massage</NavLink></li>
			  	 <li><NavLink push="true" to="/services/make up">Make up</NavLink></li>
			  	 <li><NavLink push="true" to="/services/facial treatments">Facial treatments</NavLink></li>
			  	 <li><NavLink push="true" to="/services/waxing">Waxing</NavLink></li>
		  	 	</ul>
		  	 </li>
		  	</ul>
		    </div>
		  	<div className="about-map-w">
		  	 <ul className="about-map">
		  	  <li className="list-title">About us.</li>
		  	  <li><NavLink push="true" to="/who-we-are">Who we are.</NavLink></li>
		  	  <li><NavLink push="true" to="/who-we-are">What we do.</NavLink></li>
		  	  <li><NavLink push="true" to="/who-we-are">Our team.</NavLink></li>
		  	 </ul>
		  	</div>
		  </div>
		  <div className="flex-col">
		   <ul className="social-links">
		   	<li><i className="fab fa-facebook-f"></i></li>
		   	<li><i className="fab fa-instagram"></i></li>
		   	<li><i className="fab fa-linkedin-in"></i></li>
		   </ul>
		  </div>
		 </div>
		<div className="company-info">
		    <address><i className="fas fa-map-marked-alt"></i> 266 King St Hammersmith, London W6 0SP</address>
		    <small>© Alice's fab 2018</small>
		</div>
		</footer>
	)
}

export default Footer;