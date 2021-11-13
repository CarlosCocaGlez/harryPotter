import './Titulo.scss';
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'

import hp from '../assets/images/harryPotter.png'

export const Titulo = () => {
    return(
        <>
            <div className='addFavButton'>
                <button className='addFavButton__AddFav addFavButton__Fav'>
                    Favoritos
                    <BsFillBookmarkFill className='addFavButton__Icon' />
                </button>
                <button className='addFavButton__AddFav addFavButton__Add'>
                    Agregar
                    <FaUserPlus className='addFavButton__Icon' />
                </button>
            </div>
            <div className='titulo'>
                <img className='titulo__img' src={hp} alt="harryPotter"/>
                <h1 className='titulo__Titulo'>Selecciona tu filtro</h1>
            </div>
        </>
    )
}