import React from 'react';
import Tracks from '../tracks/Tracks';
import { Link } from 'react-router-dom';

 const Track = (props) => {
 	const { track } = props;

	return(
		<React.Fragment>

		<div className="col-md-6">
			<div className = "card mb-4 shadow-sm">
				<div className='card-body'>
				<h5>{track.artist_name}</h5>
				<p className="card-text">
				<strong><i className="fas fa-play"></i>Track</strong>: {track.track_name}
				<br/>
				<strong><i className="fas fa-compact-disc"></i>Album</strong>: {track.album_name}
				</p>
				<Link to = {`lyrics/track/${track.trac_id}`} className="btn btn-dark btn-block">
				<i className="fas fa-chevron-right"></i>View lyrics
				</Link>


				</div>
				</div>
		</div>

		</React.Fragment>	

		);
}

export default Track;