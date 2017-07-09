import React from 'react';
import {
  Link
} from 'react-router-dom'

import { Catalogue } from './catalogue.js';


export class CatPage extends Catalogue {       
 constructor(props) {
    super();
    console.log(props)
    // This binding is necessary to make `this` work in the callback
    this.addLike = this.addLike.bind(this);
  }

  addLike(e,id) {
    e.preventDefault();
    console.log(this.state);
      this.state.cats[id].likes = this.state.cats[id].likes + 1;
    this.setState({likes: this.state.cats[id].likes});

    var cats = JSON.parse(localStorage.getItem('cats'));
    console.log(cats);
    cats[id].likes =this.state.cats[id].likes;
    localStorage.setItem("cats",JSON.stringify(cats));
  }
   render() {
	   return (<div className=" cat-page">
                  <div className="container text-left container-fluid"> 
                  <div className="row">
                  <div className="col-md-12 breadcrumbs">
                     <Link to={`/`}>Home</Link> | 
                     <Link to={`/`}>Catopedia</Link> | 
                     <Link to={`/cat/${this.props.cat}`}>{this.state.cats[this.props.cat].name}</Link>
                  </div> 
                  </div>
   	   			<div className="row">
                     <div className="col-md-6">
                        <h1>{this.state.cats[this.props.cat].name} </h1>
                        <img src={`/images/cat${this.props.cat}.jpg`} alt=''/>
                     </div>
                     <div className="col-md-6">
                        <h4 className="subtitle">{this.state.cats[this.props.cat].subtitle} </h4>
                        <p>{this.state.cats[this.props.cat].text} </p>
                        <p>
                        <a href='#' className="like-button"   onClick={(e) => this.addLike(e,this.props.cat)} >{this.state.cats[this.props.cat].likes} Likes</a>                       
                        <Link className="float-right"  to={`/`}>Back to cat-alogue</Link>
                        </p>
                     </div>
   	   			</div>
               </div>
               <div className="slider">
                  <div className="container text-left container-fluid"> 
                     <h4>Other kitties related to {this.state.cats[this.props.cat].name}</h4>
                     <div className="container">
                        <div className="row">
                           <div className="col-lg-4 col-md-6">
                              <div className="white-container">
                                 <div className="img-container">
                                 <img src={`/images/cat${this.state.cats[this.props.cat].related[0]}.jpg`} alt=''/>
                                 </div>
                                 <p>
                                    <a href='#'   className="like-button"  onClick={(e) => this.addLike(e,this.state.cats[this.props.cat].related[0] )} >{this.state.cats[this.state.cats[this.props.cat].related[0]].likes} Likes</a>
                                    <Link className="float-right" to={`/cat/${this.props.cat.id}`}><img src="/images/arrow-forward.svg" alt=''/></Link>
                                 </p>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-6 hidden-sm-down">
                              <div className="white-container">
                                 <div className="img-container">
                                 <img src={`/images/cat${this.state.cats[this.props.cat].related[1]}.jpg`} alt=''/>
                                 </div>
                                 <p>
                                    <a href='#'   className="like-button"  onClick={(e) => this.addLike(e,this.state.cats[this.props.cat].related[1])} >{this.state.cats[this.state.cats[this.props.cat].related[1]].likes} Likes</a>
                                    <Link className="float-right" to={`/cat/${this.props.cat.id}`}><img src="/images/arrow-forward.svg" alt='' /></Link>
                                 </p>
                              </div>
                           </div>
                           <div className="col-lg-4 hidden-md-down">
                              <div className="white-container">
                                 <div className="img-container">
                                    <img src={`/images/cat${this.state.cats[this.props.cat].related[2]}.jpg`} alt=''/>
                                 </div>
                                 <p>
                                    <a href='#'   className="like-button"  onClick={(e) => this.addLike(e,this.state.cats[this.props.cat].related[2])} >{this.state.cats[this.state.cats[this.props.cat].related[2]].likes} Likes</a>
                                    <Link className="float-right" to={`/cat/${this.props.cat.id}`}><img src="/images/arrow-forward.svg" alt='' /></Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
	   			</div>
               </div>);
	}
}