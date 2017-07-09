import React from 'react';
import {
  Link
} from 'react-router-dom'
import { Tile } from './tile.js';


export class Catalogue extends React.Component {       
	constructor() {
		super();
		var cats = [];
	if(localStorage.getItem("cats") === null ){
		cats = [
            {
               "id":0,
               "name":"Oreo",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[1,2,4]
            },
            {
               "id":1,
               "name":"Kitty",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[5,7,3]
            },
				
            {
               "id":2,
               "name":"Misty",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[0,2,3]
            },
				
            {
               "id":3,
               "name":"Oscar",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[0,1,7]
            },
            {
               "id":4,
               "name":"Tiger",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[5,1,2]
            },
				
            {
               "id":5,
               "name":"Smokey",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[3,2,1]
            },
				
            {
               "id":6,
               "name":"Missy",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[5,1,2]
            },
            {
               "id":7,
               "name":"Bella",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[3,2,1]
            },
				
            {
               "id":8,
               "name":"Chloe",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[5,2,4]
            }
				
         ];
    	localStorage.setItem("cats",JSON.stringify(cats));
     }	else { cats = JSON.parse(localStorage.getItem("cats")); }
     console.log(cats);
	this.state = {
         cats: cats
      }
	}

  loadMore(e) {
    e.preventDefault();
    var cats = JSON.parse(localStorage.getItem("cats"));
    cats.push({
               "id":9,
               "name":"Chloe",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[5,2,4]
            });
    cats.push({
               "id":10,
               "name":"Chloe",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[5,2,4]
            });
    cats.push({
               "id":11,
               "name":"Chloe",
               "subtitle":"This is a block title ‘semi-bold’ 16px #4A4A4A",
               "text":"\"Look here, friend,\" said I, \"if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say.\" \"And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em.\" \"Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest\"",
               "likes":0,
               "related":[5,2,4]
            });
    localStorage.setItem("cats",JSON.stringify(cats));
    console.log(this.state);
    this.setState((prevState, props) => {
   		console.log(prevState);
	  return {cats:cats};
	});
  }

   render() {
	   return (

        <div className="container text-left container-fluid"> 
	   		<div className="row breadcrumbs">
	   			<div className="col-md-12">
	        		<Link to={`/`}>Home</Link> | 
	        		<Link to={`/`}>Catopedia</Link>
        		</div>  
        	</div>
        	<h1>Cat-alogue</h1>
	   		<div className="row">
	   			{this.state.cats.map((cat, i)=>( <Tile key={i} cat={cat} />))}
	   		</div>
	   		<div className="text-center">
	   			<div className="load-more"  onClick={(e) => this.loadMore(e)}>
			   		<img src='/images/favorite.svg' alt=''/>
			   	</div>
			</div>
	   	</div>);
	}
}