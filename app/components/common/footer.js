import React from 'react';
import './footer.less';
import {Link} from 'react-router-dom';

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
			  	 <li><Link to="/services/hair">For hair</Link></li>
			  	 <li><Link to="/services/eyes">Eyes</Link></li>
			  	 <li><Link to="/services/manicure">Manicure</Link></li>
			  	 <li><Link to="/services/pedicure">Pedicure</Link></li>
		  	 	</ul>
		  	 </li>
		  	 <li className="part-two">
		  	 	<ul>
			  	 <li><Link to="/services/massage">Massage</Link></li>
			  	 <li><Link to="/services/make-up">Make up</Link></li>
			  	 <li><Link to="/services/facial-treatments">Facial treatments</Link></li>
			  	 <li><Link to="/services/waxing">Waxing</Link></li>
		  	 	</ul>
		  	 </li>
		  	</ul>
		    </div>
		  	<div className="about-map-w">
		  	 <ul className="about-map">
		  	  <li className="list-title">Who we are.</li>
		  	  <li><Link to="/about">What we ofer.</Link></li>
		  	  <li><Link to="/about">What we ofer.</Link></li>
		  	  <li><Link to="/about">What we ofer.</Link></li>
		  	  <li><Link to="/about">What we ofer.</Link></li>
		  	 </ul>
		  	</div>
		  </div>
		  <div className="flex-col">
		    <div className="company-info">
		     <address><i className="fas fa-map-marked-alt"></i> 266 King St Hammersmith, London W6 0SP</address>
		     <small>© Alice's fab 2018</small>
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
		</footer>
	)
}

export default Footer;