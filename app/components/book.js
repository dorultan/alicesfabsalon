import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field} from 'redux-form';
import './book.less';
import {Modal, CloseButton} from 'react-bootstrap';


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

// {serviceToBook, handleSubmit, onSubmit, bookingStatus}
class Book extends Component {

	constructor(props) {
		super(props);
		this.state = {
			modalShow: false
		}

		this.hideModal = this.hideModal.bind(this);
		this.ShowPrice = this.ShowPrice.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {

		if(nextProps.bookingStatus === null) {

			return false;
		}

		else {
			return true;
		}
	}

	componentDidUpdate(nextProps, nextState) {
		
		// if(nextProps.bookingStatus !== null) {
		// 	this.showMondal();
		// }
	}

	componentWillUpdate(nextProps, nextState) {
		
		if(this.state.modalShow === false) {
			console.log(this.state)
			this.showMondal();
		}
	}

	showMondal() {
		this.setState({
			modalShow: true
		})
		console.log(this.state)
	}

	hideModal() {

		this.setState({
			modalShow: false
		}) 
	}

	ShowPrice(){
		const price = this.props.serviceToBook.price;
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

	
	render() {
		return (
			<main className="book-main">
			 <div className="container">
			  <div className="section-title">
			   <h1><i className="far fa-smile"></i> <span>Service to book:</span></h1>
			  </div>
			  <div className="flex-row service-booked">
			   <div className="flex-col">
			   <div className="service-name">
			    <h2>{this.props.serviceToBook.name}</h2>
			   </div>
			   <div className="service-description">
			    <p>{this.props.serviceToBook.description}</p>
			   </div>
			   <div className="service-price">
			   	<p>Price: {this.ShowPrice()}</p>
			   </div>
			   <div className="service-change">
			    <Link to="/services">Change</Link>
			   </div>
			  </div>
			  <div className="flex-col">
			   <img src={images[this.props.serviceToBook.category.replace(' ', '')]} alt={this.props.serviceToBook.category.replace(' ', '')}/>
			  </div>
			 </div>
			 <div className="section-title">
			   <h1><i className="far fa-user"></i><span>About you:</span></h1>
			 </div>
			 <div className="flex-row client-details">
			  <div className="flex-col">
			   <form className="book-form" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
			   	<fieldset>
			   	 <i className="fas fa-user-tie"></i>
			   	 <Field type="text" name="clientName" component="input" placeholder="Full name."/>
			   	</fieldset>
			   	<fieldset>
			   	 <i className="far fa-envelope-open"></i>
			   	 <Field type="email" name="clientEmail" component="input" placeholder="Email."/>
			   	</fieldset>
			   	<fieldset>
			   	 <i className="fas fa-mobile-alt"></i>
			   	 <Field type="number" name="clientMobile" component="input" placeholder="07xxxxxxxx"/>
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
			 <Modal show={this.state.modalShow} backdrop={true} onHide={this.hideModal}>
			  <Modal.Header>
			   <CloseButton onClick={this.hideModal}/>
			   <h1>Thank you for booking with us !</h1>
			  </Modal.Header>
			  <Modal.Body>
			   <p>We'll confirm your bookings within one day.</p>
			  </Modal.Body>
			 </Modal>
			</main>
		)
	}
};

export default Book;