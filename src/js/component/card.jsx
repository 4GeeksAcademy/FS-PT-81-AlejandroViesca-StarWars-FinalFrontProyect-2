import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = props => {
    const { store, actions } = useContext(Context);

    const handleFav = () => {
        const fav = {...props}
        actions.addRemoveFav(fav)
    }

    return (
        <div className="card mx-3 my-2" style={{width: '18rem'}}>
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

                <Link to={`/details/${props.type}/${props.uid}`}>
                    <button className="btn btn-primary">Learn More</button>
                </Link>

                <button className="btn btn-outline-secondary" onClick={handleFav}>FAV</button>
            </div>
        </div>
    );
}