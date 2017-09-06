import React from 'react';
import MovieReviews from './MovieReviews';
import API_KEY from '../.env'

require('es6-promise').polyfill();
require('isomorphic-fetch');

class SearchableMovieReviewsContainer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			reviews: [],
			query: ''
		}

		this.handleClick = this.handleClick.bind(this)
		this.updateQuery = this.updateQuery.bind(this)
	}

	updateQuery(e) {
		this.setState({query: e.target.value})
	}


	handleClick(e) {
		fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.query + '&api_key=' + API_KEY)
		.then(res => res.json())
		.then(reviews => this.setState({reviews: reviews.results}))

	}

	render() {
		return (
			<div className="searchable-movie-reviews" style={{textAlign: 'center'}}>
				<input type="text" name="input" onChange={this.updateQuery}/>
				<button className="btn btn-default" onClick={this.handleClick}>Search</button>
				<hr/>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

module.exports = SearchableMovieReviewsContainer;