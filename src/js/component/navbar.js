import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5">Home</span>
			</Link>

			<div className="dropdown me-5">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="favoritesDropdown"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites ({store.favorites.length})
				</button>

				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">

					{store.favorites.length === 0 ? (
						<li className="dropdown-item text-muted">No favorites yet</li>
					) : (
						store.favorites.map((fav, index) => (
							<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">

								<Link to={`/details/${fav.type}/${fav.uid}`} className="text-decoration-none">{fav.name}</Link>

								<button className="btn btn-sm btn-danger" onClick={() => actions.addRemoveFav(fav)}>
									<i class="fa-solid fa-trash"></i>
								</button>

							</li>
						))
					)}
					
				</ul>
			</div>
		</nav>
	);
};
