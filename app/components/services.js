import React from 'react';
import ServicesContainer from '../containers/services';
import {Link} from 'react-router-dom';

import './services.less';
import hair from './images/hair.jpg';
import makeup from './images/makeup.jpg';
import manicure from './images/manicure.jpg';
import pedicure from './images/pedicure.jpg';
import massage from './images/massage.jpg';
import facialtreatments from './images/facialtreatments.jpg';
import waxing from './images/waxing.jpg';
import eyes from './images/eyes.jpg';


const images = {
	makeup: makeup,
	pedicure: pedicure,
	eyes: eyes,
	waxing: waxing,
	manicure: manicure,
	hair: hair,
	facialtreatments: facialtreatments,
	massage: massage
};

const Services = (props) => {
	let categories = [];
	props.services.map((service) => {
		
		if(categories.indexOf(service.category) == -1) {
			categories.push(service.category);
		}
	})

	return (
		<main className="services-main">
		 <header className="services-header">
		 	
		 </header>
		 <section className="services-section">
		  <div className="flex-row">
		   	{
		   		categories.map((category, key)=> {
		   			let image_key = category.replace(' ', '');
		   			let path = category.replace(' ', '-');
		   			return (
		   				<div key={key} className="flex-col">
		   				 <div className="category-image">
		   				  <Link to={`/services/${path}`}><img src={images[image_key]}/></Link>
		   				 </div>
		   				 <div className="category-name">
		   				  <h2><Link to={`/services/${path}`}>{category}</Link></h2>
		   				 </div>
		   				</div>
		   			)
		   		})
		   	}
		  </div>
		 </section>
		</main>
	)
}

export default ServicesContainer(Services);