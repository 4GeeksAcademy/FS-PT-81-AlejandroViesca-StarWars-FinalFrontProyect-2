import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { PeopleDetails } from "../component/peopleDetails.jsx";
import { PlanetsDetails } from "../component/planetsDetails.jsx";
import { StarshipsDetails } from "../component/starshipsDetails.jsx";

export const Details = () => {

	const { store, actions } = useContext(Context);
	const params = useParams()

	useEffect(() => {
		actions.getOneData(params.type, params.uid)
	}, [])

	console.log(params)

	return (
		<div className="container">
			{params.type === 'people' && <PeopleDetails type={'character'} uid={params.uid}/>}
			{params.type === 'planets' && <PlanetsDetails type={params.type} uid={params.uid}/>}
			{params.type === 'starships' && <StarshipsDetails type={params.type} uid={params.uid}/>}
		</div>
	);
};


