import React, {useContext} from "react";

import { Context } from "../store/appContext";

export const StarshipsDetails = (props) => {
    
    const { store, actions } = useContext(Context);

    return(
        <div className="card" style={{width: '18rem'}}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}
                className="card-img-top text-align-center" alt={store.selected?.properties?.name}
            />

            <div className="card-body">
                <h3 className="card-title">{store.selected?.properties?.name}</h3>
                <p className="card-text"><b>Model: </b>{store.selected?.properties?.model}</p>
                <p className="card-text"><b>Class: </b>{store.selected?.properties?.starship_class}</p>
                <p className="card-text"><b>Manufacturer: </b>{store.selected?.properties?.manufacturer}</p>
                <p className="card-text"><b>Cost: </b>{store.selected?.properties?.cost_in_credits}</p>
                <p className="card-text"><b>Passengers: </b>{store.selected?.properties?.passengers}</p>
                <p className="card-text"><b>Cargo capacity: </b>{store.selected?.properties?.cargo_capacity}</p>
            </div>
        </div>
    )
}