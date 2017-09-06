import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = props => {
	return (
		<div className="review-list row">
			{props.reviews.map((review, i) => 
				<div key={i} className="review card col-lg-6" style={{width: '20rem', padding: '5rem'}}>
  					<img className="card-img-top" src={review.multimedia && review.multimedia.src} alt="Movie Poster"/>
					<div className="card-block">
						<h4 className="card-title">{review.display_title}</h4>
						<p className="card-text">{review.headline}</p>
						<a href={review.link.url} className="btn btn-primary">Full Review</a>
					</div>
				</div>
			)}
		</div>
	)
}

MovieReviews.defaultProps = {
	reviews: []
}

module.exports = MovieReviews;