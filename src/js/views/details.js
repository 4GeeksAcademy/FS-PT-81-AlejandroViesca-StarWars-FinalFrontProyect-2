import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Details = () => {

	const { store, actions } = useContext(Context);
	const params = useParams()

	useEffect(() => {
		actions.getOnePeople(params.uid)
	}, [params.uid])

	return (
		<div className="container">
			<div class="card" style={{width: '18rem'}}>
				<img src="..." class="card-img-top text-align-center" alt="..."/>

				<div class="card-body">
					<h3 class="card-title">{store.character?.name}</h3>
					<p class="card-text"><b>Birth Year:</b>{store.character?.properties?.birth_year}</p>
					<p class="card-text"><b>Eye Color:</b>{store.character?.properties?.eye_color}</p>
					<p class="card-text"><b>Gender:</b>{store.character?.properties?.gender}</p>
					<p class="card-text"><b>Hair Color::</b>{store.character?.properties?.hair_color}</p>
					<p class="card-text"><b>Height:</b>{store.character?.properties?.height}</p>
					{/* <p class="card-text"><b>Homeworld:</b>{store.character?.properties?.homeworld}</p> */}
				</div>
			</div>
		</div>
	);
};


{/* <p class="card-text"><b>Homeworld:</b>store.character.homeworld</p>
<p class="card-text"><b>Mass:</b>store.character</p>
<p class="card-text"><b>Skin Color:</b>store.character</p>
<p class="card-text"><b>Created:</b>store.character</p>
<p class="card-text"><b>Edited:</b>store.character</p> */}
// birth_year
// :
// "112BBY"
// created
// :
// "2025-02-19T22:22:30.557Z"
// edited
// :
// "2025-02-19T22:22:30.557Z"
// eye_color
// :
// "yellow"
// gender
// :
// "n/a"
// hair_color
// :
// "n/a"
// height
// :
// "167"
// homeworld
// :
// "https://www.swapi.tech/api/planets/1"
// mass
// :
// "75"
// name
// :
// "C-3PO"
// skin_color
// :
// "gold"
// url
// :
// "https://www.swapi.tech/api/people/2"
// new entry
// : 
// ""

