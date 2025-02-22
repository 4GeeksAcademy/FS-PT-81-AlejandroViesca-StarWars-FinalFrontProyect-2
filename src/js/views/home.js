import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<div className="container mt-5">

			<h2>Las imagenes no funcionan pq la web de SW esta muerta :/</h2>
			<hr/>

			<section className="row d-flex justify-content-center">
				<h2>People</h2>
				{
					store.people?.map(el =>
						<Card
							key={el.uid}
							name={el.name}
							type={'people'}
							uid={el.uid}
							img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
						/>
					)
				}
			</section>

			<section className="row d-flex justify-content-center">
				<h2>Planets</h2>
				{
					store.planets?.map(el =>
						<Card
							key={el.uid}
							name={el.name}
							type={'planets'}
							uid={el.uid}
							img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
						/>
					)
				}
			</section>

			<section className="row d-flex justify-content-center">
				<h2>starships</h2>
				{
					store.starships?.map(el =>
						<Card
							key={el.uid}
							name={el.name}
							type={'starships'}
							uid={el.uid}
							img={`https://starwars-visualguide.com/assets/img/starships/${el.uid}.jpg`}
						/>
					)
				}
			</section>

		</div>
	);
}
