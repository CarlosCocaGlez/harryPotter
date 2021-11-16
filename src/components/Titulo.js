import React, {useState} from "react";
import DropdownFavoritos from "./DropdownFavoritos";
import './Titulo.scss';
import {BsFillBookmarkFill} from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";
import hp from '../assets/images/harryPotter.png'

import {connect} from "react-redux";

const Titulo = ({hpInfo}) => {

    const [ showModal, setShowModal ] = useState('none')
    const [ showDropdown, setShowDropdown ] = useState(false)
    const [ nombre, setNombre ] = useState('')
    const [ cumple, setCumple ] = useState('')
    const [ ojos, setOjos ] = useState('')
    const [ pelo, setPelo ] = useState('')
    const [ genero, setGenero ] = useState('')
    const [ posicion, setPosicion ] = useState('')

    const url = 'http://localhost:3006/hpStudents'

    const showModalHandle = () =>{
        setShowModal('block')
    }

    const showDropdownHandle = () =>{
        setShowDropdown(!showDropdown)
    }

    const hideModalHandle = () =>{
        setShowModal('none')
    }

    const guardarHandle = async(e) => {
        e.preventDefault()
        try{
            await axios.post(url,{
                id: uuidv4(),
                name: nombre,
                gender: genero,
                dateOfBirth: cumple,
                eyeColour: ojos,
                hairColour: pelo,
                hogwartsStudent: posicion==='Estudiante',
                hogwartsStaff: posicion==='Staff',
                image: "http://hp-api.herokuapp.com/images/harry.jpg"
            })
            window.location.reload()
            setShowModal('none')
        }catch(e){
            console.log(`${e} 💥`)
        }
    }

    return(
        <>
            <div className='addFavButton'>
                <button className='addFavButton__AddFav addFavButton__Fav' onClick={showDropdownHandle}>
                    Favoritos
                    <BsFillBookmarkFill className='addFavButton__Icon' />
                </button>
                <button className='addFavButton__AddFav addFavButton__Add' onClick={showModalHandle}>
                    Agregar
                    <FaUserPlus className='addFavButton__Icon' />
                </button>
                <span className='addFavButton__AddFav__List' style={{display:`${showDropdown ? 'block' : 'none'}`}}>
                    {
                        // eslint-disable-next-line
                        hpInfo.map((hpFav)=>{
                            const { favorite } = hpFav
                            if(favorite){
                                return (
                                    <DropdownFavoritos key={uuidv4()} {...hpFav}  />
                                )
                            }
                        })
                    }
                </span>
            </div>
            <div className='titulo'>
                <img className='titulo__img' src={hp} alt="harryPotter"/>
                <h1 className='titulo__Titulo'>Selecciona tu filtro</h1>
            </div>


            {/*  Modal  */}
            <div id="addModal" className="modal" style={{display:`${showModal}`}}>
                <div className="addModal__content">
                    <div className="addModal__content__title">
                        <div className="addModal__content__title__titulo">
                            Agrega un personaje
                        </div>
                        <div className="addModal__content__title__close">
                            <AiOutlineCloseCircle onClick={hideModalHandle} />
                        </div>
                    </div>
                    <form>
                        <div className="addModal__content__inputs">
                            <div className="addModal__content__inputs__box">
                                <label htmlFor="hname" className='addModal__content__inputs__box__details'>Nombre</label>
                                <input type="text" name="hname" id="hname" onChange={(e)=>setNombre(e.target.value)} />
                            </div>
                            <div className="addModal__content__inputs__box">
                                <label htmlFor="hbirth" className='addModal__content__inputs__box__details'>Cumpleaños</label>
                                <input type="text" name="hbirth" id="hbirth" onChange={(e)=>setCumple(e.target.value)} />
                            </div>
                            <div className="addModal__content__inputs__box">
                                <label htmlFor="heye" className='addModal__content__inputs__box__details'>Color de Ojos</label>
                                <input type="text" name="heye" id="heye" onChange={(e)=>setOjos(e.target.value)} />
                            </div>
                            <div className="addModal__content__inputs__box">
                                <label htmlFor="hhair" className='addModal__content__inputs__box__details'>Color de Pelo</label>
                                <input type="text" name="hhair" id="hhair" onChange={(e)=>setPelo(e.target.value)} />
                            </div>
                        </div>
                        <div className="addModal__content__inputs__radio">
                            <div className="addModal__content__inputs__radio__gender">
                                <span className="addModal__content__inputs__gender__title">
                                    Género
                                </span>
                                <div className="addModal__content__inputs__gender_category">
                                    <input type="radio" name="gender" id="mujer" value='Mujer' onChange={(e)=>setGenero(e.target.value)} />
                                    <label htmlFor="mujer" className='addModal__content__inputs__gender__category__mujer'>Mujer</label>
                                    <input type="radio" name="gender" id="hombre" value='Hombre' onChange={(e)=>setGenero(e.target.value)} />
                                    <label htmlFor="hombre">Hombre</label>
                                </div>
                            </div>
                            <div className="addModal__content__inputs__radio__position">
                                <span className="addModal__content__inputs__position__title">
                                    Posición
                                </span>
                                <div className="addModal__content__inputs__position_category">
                                    <input type="radio" name="position" id="student" value='Estudiante' onChange={(e)=>setPosicion(e.target.value)}/>
                                    <label htmlFor="student" className='addModal__content__inputs__position__category__student'>Estudiante</label>
                                    <input type="radio" name="position" id="staff" value='Staff'  onChange={(e)=>setPosicion(e.target.value)}/>
                                    <label htmlFor="staff">Staff</label>
                                </div>
                            </div>
                        </div>
                        <div className="addModal__inputs__box__image">
                            <label htmlFor="image" className="addModal__inputs__box__image__details">Fotografía</label>
                            <input type="file" name="image" id="image"/>
                        </div>
                        <div className="addModal__inputs__box__submit">
                            <button className="addModal__inputs__box__submit__boton" onClick={(e) => guardarHandle(e)}>Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (store) => {
    const {hpInfo} = store
    return {hpInfo}
}

export default connect(mapStateToProps)(Titulo)

