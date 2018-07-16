import React from 'react';
import ServicesByCategoryContainer from '../containers/services-by-category';
import './services-by-category.less';
import {Link} from 'react-router-dom';

const ServicesByCategory = (props) => {

	return (
		<main className="services-by-category-main">
		 <header className="services-by-category-header">
		  {props.children}
		 </header>
		 <section className="services-by-category-section">
		  <div className="flex-row">
		  	{
		  		props.services.map((service, key) => {
		  			let link = service.name;
		  			link = link.replace('/', '~').replace(' ', '-');
		  			link = link.replace(' ', '-');
		  			return (
		  				<div key={key} className="flex-col">
		  				 <div className="service">
		  				  <div className="service-name">
		  				   <h2>{service.name}</h2>
		  				  </div>
		  				  <div className="service-description">
		  				   <p>{service.description}</p>
		  				  </div>
		  				  <div className="buttons-w">
		  				   <p className="price"><span>Price</span>: {ShowPrice(service.price)}</p>
		  				   <Link to={`/book/${link}`}>Book now</Link>
		  				  </div>
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

const ShowPrice = (price) => {

	if(price.only) {
		return `${price.only}$`;
	}

	if(price.to) {
		return `${price.from}$ - ${price.to}$`;
	}

	else {
		return `${price.from}$`;
	}
}

export default ServicesByCategoryContainer(ServicesByCategory);