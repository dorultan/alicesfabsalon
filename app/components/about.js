import React, {Component} from 'react';
import './about.less';
import section_one from './images/section-one.jpg';
import section_two from './images/section-two.jpg';
import section_three from './images/section-three.jpg';
import GoogleMap from './common/map';

const About = (props) => {
		return (
			<main className="main-about">
			  <div className="about-container">
				  <section className="section-one">
				   <div className="flex-row">
				    <div className="flex-col">
				     <div className="title-w">
				      <h1>Who we are ?</h1>
				     </div>
				     <div className="content-w">
				      <p>Alice's salon is a place where you can have a unique experience of a true provision glamour. We are proud to provide ongoing excelent in services and profensionalism to all of our new and existing clients.</p>
				     </div>
				    </div>
				    <div className="flex-col">
				     <img className="section-one-img" src={section_one}/>
				    </div>
				   </div>
				  </section>
				  <section className="section-two">
				  	<div className="flex-row">
				    <div className="flex-col">
				     <img className="section-two-img" src={section_two}/>
				    </div>
				    <div className="flex-col">
				     <div className="title-w">
					  <h1>What we do ?</h1>
					 </div>
					 <div className="content-w">
					  <p>We have absolute great attention to detail, profesional advice and all this for offering the best experience you can have. So your experience is our top priority</p>
					 </div>
				    </div>
				   </div>
				  </section>
				  <section className="section-three">
				   <div className="flex-row">
				    <div className="flex-col">
				     <div className="title-w">
				      <h1>Where you can find us ?</h1>
				     </div>
				     <div className="content-w">
				      <p>Alice's salon is a place where you can have a unique experience of a true provision glamour. We are proud to provide ongoing excelent in services and profensionalism to all of our new and existing clients.</p>
				     </div>
				    </div>
				    <div className="flex-col">
				     <img className="section-three-img" src={section_three}/>
				    </div>
				   </div>
				  </section>
			  </div>
        <GoogleMap></GoogleMap>
			</main>
		)
}

export default About;