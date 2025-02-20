import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {
	const {store, actions} = useContext(Context)

	return(
		<div className="container mt-5">
			<section className="row d-flex justify-content-center">
				<h2>People</h2>
				{
					store.people?.map(el => 
					<Card 
						key={el.uid} 
						name={el.name} 
						uid={el.uid} 
						img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
					/>)
				}
			</section>
		</div>
	);
}
