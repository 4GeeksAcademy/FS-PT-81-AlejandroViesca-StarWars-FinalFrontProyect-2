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
			{params.type === 'people' && <PeopleDetails/>}
			{params.type === 'planets' && <PlanetsDetails/>}
			{params.type === 'starships' && <StarshipsDetails/>}
		</div>
	);
};


