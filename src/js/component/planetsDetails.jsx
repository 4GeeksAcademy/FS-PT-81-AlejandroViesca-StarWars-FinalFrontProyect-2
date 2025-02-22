import React, {useContext} from "react";

import { Context } from "../store/appContext";

export const PlanetsDetails = (props) => {
    
    const { store, actions } = useContext(Context);

    return(
        <div className="card" style={{width: '18rem'}}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}
                className="card-img-top text-align-center" alt={store.selected?.properties?.name}
            />

            <div className="card-body">
                <h3 className="card-title">{store.selected?.properties?.name}</h3>
                <p className="card-text"><b>Terrain: </b>{store.selected?.properties?.terrain}</p>
                <p className="card-text"><b>Climate: </b>{store.selected?.properties?.climate}</p>
                <p className="card-text"><b>Surface Water: </b>{store.selected?.properties?.surface_water}</p>
                <p className="card-text"><b>Diameter: </b>{store.selected?.properties?.diameter}</p>
                <p className="card-text"><b>Rotation Period: </b>{store.selected?.properties?.rotation_period}</p>
                <p className="card-text"><b>Orbital Period: </b>{store.selected?.properties?.orbital_period}</p>
                <p className="card-text"><b>Gravity: </b>{store.selected?.properties?.gravity}</p>
                <p className="card-text"><b>Population: </b>{store.selected?.properties?.population}</p>
            </div>
        </div>
    )
}