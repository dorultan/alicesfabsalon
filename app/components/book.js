import React from 'react';
import {Link} from 'react-router-dom';
import {Field} from 'redux-form';
import './book.less';


import hair from './images/hair.jpg';
import makeup from './images/makeup.jpg';
import manicure from './images/manicure.jpg';
import pedicure from './images/pedicure.jpg';
import massage from './images/massage.jpg';
import facialtreatments from './images/facialtreatments.jpg';
import waxing from './images/waxing.jpg';
import eyes from './images/eyes.jpg';

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

const Book = ({serviceToBook, handleSubmit, onSubmit, bookingStatus}) => {
	const img_src = serviceToBook.category.replace(' ', '');
	return (
		<main className="book-main">
		 <div className="container">
		  <div className="section-title">
		   <h1><i className="far fa-smile"></i> <span>Your service.</span></h1>
		  </div>
		  <div className="flex-row service-booked">
		   <div className="flex-col">
		   <div className="service-name">
		    <h2>{serviceToBook.name}</h2>
		   </div>
		   <div className="service-description">
		    <p>{serviceToBook.description}</p>
		   </div>
		   <div className="service-price">
		   	<p>Price: {ShowPrice(serviceToBook.price)}</p>
		   </div>
		   <div className="service-change">
		    <Link to="/services">Change</Link>
		   </div>
		  </div>
		  <div className="flex-col">
		   <img src={images[img_src]} alt={img_src}/>
		  </div>
		 </div>
		 <div className="section-title">
		   <h1><i className="far fa-user"></i><span>Your details.</span></h1>
		 </div>
		 <div className="flex-row client-details">
		  <div className="flex-col">
		   <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
		   	<fieldset>
		   	 <i className="fas fa-user-tie"></i>
		   	 <Field type="text" name="clientName" component="input" placeholder="Your full name."/>
		   	</fieldset>
		   	<fieldset>
		   	 <i className="far fa-envelope-open"></i>
		   	 <Field type="email" name="clientEmail" component="input" placeholder="Your email."/>
		   	</fieldset>
		   	<fieldset>
		   	 <i className="fas fa-mobile-alt"></i>
		   	 <Field type="number" name="clientMobile" component="input"/>
		   	</fieldset>
		   	<fieldset>
		   	 <i className="fas fa-calendar-alt"></i>
		   	 <Field type="date" name="bookingDate" component="input"/>
		   	</fieldset>
		   	<div className="submit-button">
		   	 <button type="submit">Book</button>
		   	</div>
		   </form>
		  </div>
		 </div>
		 </div>
		</main>
	)
};

export default Book;