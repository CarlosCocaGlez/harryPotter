import {v4 as uuidv4} from "uuid";
import {BsTrash} from "react-icons/bs";
import React from "react";
import {NO_FAVORITOS} from "../redux/actions";
import {connect} from "react-redux";

const DropdownFavoritos = (hpFav) => {

    const { image, name, nofavoritos } = hpFav

    return (
        <span key={uuidv4()} className='addFavButton__AddFav__List__Names'>
            <img src={image} alt={name} />
            <span>{name}</span>
            <BsTrash className='addFavButton__AddFav__List__Icon' onClick={() => {nofavoritos()}} />
        </span>
    )
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const {name} = ownProps
    return { nofavoritos: () => dispatch({type:NO_FAVORITOS, payload:{name}})}
}

export default connect(null, mapDispatchToProps)(DropdownFavoritos)