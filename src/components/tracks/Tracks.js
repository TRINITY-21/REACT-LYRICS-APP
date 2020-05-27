import React from 'react';
import { Consumer } from '../../context';
import Track from '../tracks/Track';
import Spinner from '../layouts/Spinner';

class Tracks extends React.Component {

	render(){
		
		  return (
		 <Consumer>
		  	{ value => {
		  		const { track_list,heading } = value;
			  if(track_list === undefined || track_list === 0){
			  		return <Spinner/>
			  	}else{

			  		return (
			  			<React.Fragment>
			  			<h3 className="text-center mb-4">{heading}</h3>
			  			<div className="row">
 						{track_list.map(item => (
			  			<Track key={item.track.track_id} track={item.track} />

			  			))}

			  			</div>
			  			</React.Fragment>
			  			);

			  	}
			  }
		  	}

		  </Consumer>
   		
  );
}

	}


export default Tracks;
