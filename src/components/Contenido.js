import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Contenido.scss'
import { BiBookmark } from 'react-icons/bi'
import { hpStudents } from '../data/hpStudents'
import { hpStaff } from "../data/hpStaff";

export const Contenido = () => {

    const [ activeStudents, setActiveStudents ] = useState(true)
    const [ activeStaff, setActiveStaff ] = useState(false)

    const studentsHandle = () => {
        setActiveStudents(true)
        setActiveStaff(false)
    }

    const staffHandle = () => {
        setActiveStaff(true)
        setActiveStudents(false)
    }

    const students = [...hpStudents]
    const staff = [...hpStaff]

    return(
        <>
            <div className='botones'>
                <button className={`boton boton__student ${activeStudents ? 'active' : ''}`} onClick={studentsHandle}>Estudiantes</button>
                <button className={`boton ${activeStaff ? 'active' : ''}`} onClick={staffHandle}>Staff</button>
            </div>
            <div className="container">
                {
                    activeStudents ?
                        students.map((hp)=>{
                            const {image, name, gender, house, dateOfBirth, eyeColour='Unknwon', hairColour, hogwartsStudent, alive} = hp
                            return(
                                <div className={`card ${alive ? 'vivo' : 'muerto'}`} key={uuidv4()}>
                                    <div className={`card__izq ${house.toLowerCase()}`}>
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
                        })
                        :
                        staff.map((hp)=>{
                            const {image, name, gender, house, dateOfBirth, eyeColour='Unknwon', hairColour, hogwartsStudent, alive} = hp
                            return(
                                <div className={`card ${alive ? 'vivo' : 'muerto'}`} key={uuidv4()}>
                                    <div className={`card__izq ${house.toLowerCase()}`}>
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
                        })
                }
            </div>
        </>
    )
}