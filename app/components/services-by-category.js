import React from 'react';
import ServicesByCategoryContainer from '../containers/services-by-category';
import './services-by-category.less';
import {Link} from 'react-router-dom';
import PopOver from './common/popover';

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
		  			link = link.replace('/', '~').replace(' ', '_');
		  			link = link.replace(' ', '_');
		  			return (
		  				<div key={key} className="flex-col">
		  				 <div className="service">
		  				  <div className="service-name">
		  				   <h2>{service.name}</h2>
		  				  </div>
		  				  <div className="service-description">
		  				   <p>{service.description}</p>
		  				  </div>
		  				  <div className="price-informations">
		  				   <p className="price"><span><i className="far fa-money-bill-alt"></i></span>: {ShowPrice(service.price)}</p>
		  				   <PopOver/>
		  				  </div>
		  				  <div className="buttons-w">
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