import './Contenido.scss'
import hp from '../assets/images/Hogwarts1.jpg'
import { BiBookmark } from 'react-icons/bi'

export const Contenido = () => {
    return(
        <>
            <div className='botones'>
                <button className='boton boton__student'>Estudiantes</button>
                <button className='boton'>Staff</button>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card__izq">
                        <img src={hp} alt=""/>
                    </div>
                    <div className="card__der">
                        <div className="card__der__status">
                            Vivo / Estudiante
                            <BiBookmark className='card__der__status__icon' />
                        </div>
                        <div className="card__der__nombre">
                            Harry Potter
                        </div>
                        <div className="card__der__info">
                            <span>Cumpleaños: <span className='card__der__info__datos'> 31-07-1980</span> </span>
                            <span>Género: <span className="card__der__info__datos"> Male </span></span>
                            <span>Color de ojos: <span className="card__der__info__datos"> Green </span></span>
                            <span>Color de pelo: <span className="card__der__info__datos"> Black </span></span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__izq">
                        <img src={hp} alt=""/>
                    </div>
                    <div className="card__der">
                        <div className="card__der__nombre">
                            Harry Potter
                        </div>
                        <div className="card__der__status">
                            Vivo / Estudiante
                            <BiBookmark className='card__der__status__icon' />
                        </div>
                        <div className="card__der__info">
                            <span>Cumpleaños: <span className='card__der__info__datos'> 31-07-1980</span> </span>
                            <span>Género: <span className="card__der__info__datos"> Male </span></span>
                            <span>Color de ojos: <span className="card__der__info__datos"> Green </span></span>
                            <span>Color de pelo: <span className="card__der__info__datos"> Black </span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}