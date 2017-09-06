import React from 'react';
import MovieReviews from './MovieReviews';
import API_KEY from '../.env'

require('es6-promise').polyfill();
require('isomorphic-fetch');

class LatestMovieReviewsContainer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			reviews: []
		}
	}

	componentDidMount() {
		fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api_key=' + API_KEY)
		.then(res => res.json())
		.then(reviews => this.setState({reviews: reviews.results}))
	}

	render() {
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}

module.exports = LatestMovieReviewsContainer;