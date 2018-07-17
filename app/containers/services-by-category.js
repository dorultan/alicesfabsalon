import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getByCategory, servicesFilter} from '../actions';
import Loading from '../components/common/loading';

const FilterComponent = (props) => {
	
	return (
		<div className="tool-bar">
		 <form className="filter" onSubmit={props.handleSubmit}>
			<fieldset>
			 <input type="text" placeholder="Search ..." value={props.term} onChange={props.handleInputChange}/>
			</fieldset>
			<div className="submit-w">
			 <button className="submit">
			  <i className="fas fa-search fa-2x"></i>
			 </button>
			</div>
		 </form>
		</div>
	)
}

const ServicesByCategoryContainer = (ChildComponent) => {

	class ServicesByCategoryHoc extends Component {
		constructor(props) {
			super(props);
			this.state = {
				term: ''
			}

			this.handleSubmit = this.handleSubmit.bind(this);
			this.handleInputChange = this.handleInputChange.bind(this);
		}

		componentWillUpdate(nextProps, prevProps) {
			if(nextProps.match.params.category !== this.props.match.params.category) {
				this.props.getByCategory(nextProps.match.params.category);
				return true;
			}
		}

		componentDidMount() {
			const category = this.props.match.params.category.replace('-', ' ');
			this.props.getByCategory(category);
		}



		handleSubmit(e) {
			e.preventDefault();
			this.props.servicesFilter(this.props.services, this.state.term);
		}

		handleInputChange(e) {

			this.setState({
				term: e.target.value
			})
		}

		render() {

			if(this.props.services.length === 0) {
				return (
					<Loading/>
				)
			}

			else {
				return (
					<ChildComponent services={this.props.filteredServices ? this.props.filteredServices : this.props.services} match={this.props.match}>
					  <FilterComponent term={this.state.term} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
					</ChildComponent>
			 	)
			}
		}
	}

	const bindActionCreatorsToProps = (dispatch) => {

		return bindActionCreators({
			getByCategory: getByCategory,
			servicesFilter: servicesFilter
		}, dispatch)
	}

	const mapStateToProps = (state) => {
		return {
			services: state.services,
			filteredServices: state.filteredServices
		}
	}

	return connect(mapStateToProps, bindActionCreatorsToProps)(ServicesByCategoryHoc);
}

export default ServicesByCategoryContainer;