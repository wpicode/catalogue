import React from 'react';
import {
  Link
} from 'react-router-dom'

export class Careers extends React.Component {
	render(){
		return (<div className="container container-fluid">
				<div className="row breadcrumbs">
		   			<div className="col-md-12">
		        		<Link to={`/`}>Home</Link> | 
		        		<Link to={`/contact`}>Careers</Link>
	        		</div>  
	        	</div>
	        	<h1>Careers</h1>
				<div className="row ">
		   			<div className="col-md-4">
	        		<ul>
	        			<li>PHP developer</li>
	        			<li>JavaScript developer</li>
	        			<li>UI developer</li>
	        		</ul>
	        		</div>
				</div>
			</div>);
	}
}