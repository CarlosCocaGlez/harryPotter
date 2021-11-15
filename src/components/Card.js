import { BiBookmark } from "react-icons/bi";

export const Card = (hp) => {
    const {image, name, gender, house, dateOfBirth, eyeColour, hairColour, hogwartsStudent, alive} = hp
    return (
        <div className={`card ${alive ? 'vivo' : 'muerto'}`}>
            <div className={`card__izq ${house}`}>
                <img src={image} alt=""/>
            </div>
            <div className="card__der">
                <div className="card__der__status">
                    <div>
                        {alive ? 'Vivo' : 'Muerto'} / {hogwartsStudent ? 'Estudiante' : 'Staff'}
                    </div>
                    <div>
                        <BiBookmark className='card__der__status__icon' />
                    </div>
                </div>
                <div className="card__der__nombre">
                    {name}
                </div>
                <div className="card__der__info">
                    <span>Cumpleaños: <span className='card__der__info__datos'> {dateOfBirth ? dateOfBirth : 'Unknown'}</span> </span>
                    <span>Género: <span className="card__der__info__datos"> {gender} </span></span>
                    <span>Color de ojos: <span className="card__der__info__datos"> {eyeColour ? eyeColour : 'Unknown'} </span></span>
                    <span>Color de pelo: <span className="card__der__info__datos"> {hairColour ? hairColour : 'Unknown'} </span></span>
                </div>
            </div>
        </div>
    )
}