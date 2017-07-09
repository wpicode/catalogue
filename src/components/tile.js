import React from 'react';
import {
  Link
} from 'react-router-dom'


export class Tile extends  React.Component  {
 constructor(props) {
    super();
    console.log(props)
    // This binding is necessary to make `this` work in the callback
    this.addLike = this.addLike.bind(this);
  }

  addLike(e) {
    e.preventDefault();
   	this.props.cat.likes = this.props.cat.likes + 1;
    this.setState({likes: this.props.cat.likes});
    console.log('this is:', this.props);
    var cats = JSON.parse(localStorage.getItem('cats'));
    console.log(cats);
    cats[this.props.cat.id].likes =this.props.cat.likes;
    localStorage.setItem("cats",JSON.stringify(cats));
  }

   render() {

		return (<div className="col-lg-4 col-md-6">
					<div className="white-container tile">
						<div className="img-container">
			   				<img src={`/images/cat${this.props.cat.id}.jpg`} alt=''/>
			   			</div>
			   			<p>
							<a href='#'   className="like-button"  onClick={(e) => this.addLike(e)} >{this.props.cat.likes} Likes</a>
							<Link className="float-right" to={`/cat/${this.props.cat.id}`}><img  alt='' src="/images/arrow-forward.svg" /></Link>
						</p>
					</div>
			   	</div>);
	}
}