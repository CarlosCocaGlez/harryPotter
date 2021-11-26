import React, {useState} from 'react'
import './Contenido.scss'
import { Loading } from "./Loading";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";

const Contenido = ({hpInfo, loading}) => {


    const [ activeStudents, setActiveStudents ] = useState(true)
    const [ activeStaff, setActiveStaff ] = useState(false)
    const [ activeAlive, setActiveAlive ] = useState(false)

    const studentsHandle = () => {
        setActiveStudents(true)
        setActiveStaff(false)
        setActiveAlive(false)
    }

    const staffHandle = () => {
        setActiveStaff(true)
        setActiveStudents(false)
        setActiveAlive(false)
    }

    const aliveHandle = () => {
        setActiveAlive(true)
        setActiveStaff(false)
        setActiveStudents(false)
    }

    return(
        <>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <div className='botones'>
                            <button className={`boton boton__student ${activeStudents ? 'active' : ''}`} onClick={studentsHandle}>Estudiantes</button>
                            <button className={`boton boton__staff ${activeStaff ? 'active' : ''}`} onClick={staffHandle}>Staff</button>
                            <button className={`boton ${activeAlive ? 'active' : ''}`} onClick={aliveHandle}>Vivos</button>
                        </div>
                        <div className="container">
                            {
                                // eslint-disable-next-line
                                hpInfo.map((hp)=>{
                                    if(hp.hogwartsStudent && activeStudents){
                                        return(
                                            <Card key={uuidv4()} {...hp} />
                                        )
                                    }else if(hp.hogwartsStaff && activeStaff){
                                        return(
                                            <Card key={uuidv4()} {...hp} />
                                        )
                                    }else if(hp.alive && activeAlive){
                                        return(
                                            <Card key={uuidv4()} {...hp} />
                                        )
                                    }
                                })
                            }
                        </div>
                    </>
            }
        </>
    )
}

const mapStateToProps = (store) => {
    const {hpInfo, loading} = store
    return {hpInfo, loading}
}

export default connect(mapStateToProps)(Contenido)