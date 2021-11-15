import React, { useState, useEffect } from 'react'
import './Contenido.scss'
import { Loading } from "./Loading";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'


export const Contenido = () => {

    const [ activeStudents, setActiveStudents ] = useState(true)
    const [ activeStaff, setActiveStaff ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ hpInfo, setHpInfo ] = useState([])

    const studentsHandle = () => {
        setActiveStudents(true)
        setActiveStaff(false)
    }

    const staffHandle = () => {
        setActiveStaff(true)
        setActiveStudents(false)
    }

    const url = 'http://localhost:3006/hpStudents'

    async function hpDatos() {
        try{
            const res = await axios.get(url)
            setLoading(false)
            setHpInfo(res.data)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        hpDatos()
    }, [])

    return(
        <>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <div className='botones'>
                            <button className={`boton boton__student ${activeStudents ? 'active' : ''}`} onClick={studentsHandle}>Estudiantes</button>
                            <button className={`boton ${activeStaff ? 'active' : ''}`} onClick={staffHandle}>Staff</button>
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
                                    }
                                })
                            }
                        </div>
                    </>
            }
        </>
    )
}