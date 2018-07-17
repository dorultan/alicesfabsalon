import React, {Component} from 'react';
import {Overlay, Popover, ButtonToolbar} from 'react-bootstrap';


class PopOver extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			target: e.target,
			show: !this.state.show
		})
	}

	render() {

		return (
		    <ButtonToolbar>
		     <button className="price-info" type="button" onClick={this.handleClick}><i className="fas fa-info-circle "></i>Price info</button>
		      <Overlay 
		      show={this.state.show}
		      target={this.state.target}
		      placement="bottom"
		      container={this}
		      containerPadding={20}
		      >
		      <Popover id="popover-contained" title="Price info">
		       <strong>The price varies on who is proceding your service.</strong>
		      </Popover>
		     </Overlay>
		    </ButtonToolbar>
		)
	}
}

export default PopOver;