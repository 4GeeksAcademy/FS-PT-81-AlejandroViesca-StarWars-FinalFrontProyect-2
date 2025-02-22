import React, {useContext} from "react";

import { Context } from "../store/appContext";

export const PeopleDetails = (props) => {
    
    const { store, actions } = useContext(Context);

    return(
        <div className="card" style={{width: '18rem'}}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}
                className="card-img-top text-align-center" alt={store.selected?.properties?.name}
            />

            <div className="card-body">
                <h3 className="card-title">{store.selected?.properties?.name}</h3>
                <p className="card-text"><b>Birth Year: </b>{store.selected?.properties?.birth_year}</p>
                <p className="card-text"><b>Eye Color: </b>{store.selected?.properties?.eye_color}</p>
                <p className="card-text"><b>Gender: </b>{store.selected?.properties?.gender}</p>
                <p className="card-text"><b>Hair Color: </b>{store.selected?.properties?.hair_color}</p>
                <p className="card-text"><b>Height: </b>{store.selected?.properties?.height}</p>
            </div>
        </div>
    )
}