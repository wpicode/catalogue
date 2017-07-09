import React from 'react';
import {
  Link
} from 'react-router-dom';
export class Contact extends React.Component {
	render(){
	return (<div className="container container-fluid">
				<div className="row breadcrumbs">
		   			<div className="col-md-12">
		        		<Link to={`/`}>Home</Link> | 
		        		<Link to={`/contact`}>Contact Us</Link>
	        		</div>  
	        	</div>
	        	<h1>Contact Us</h1>
				<div className="row ">
		   			<div className="col-md-4">
	        		<p>"Look here, friend," said I, "if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say." "And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em." "Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest</p>
				</div>
				</div>
			</div>);
	}
}