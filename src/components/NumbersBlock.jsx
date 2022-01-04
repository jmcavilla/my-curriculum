import moment from 'moment'
import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { ExpDataBlock } from './ExpDataBlock'

export const NumbersBlock = () => {
    return (
        <>
            <Jumbotron className='jumbotron__main animate__animated animate__slideInRight'>
                <div className='numbers__block'>
                    <ExpDataBlock subEs="Años experiencia" subEn="Years Experience" number={moment().diff('08-12-2011', 'years')}/>
                    <ExpDataBlock subEs="Proyectos completados" subEn="Completed Projects" prefix="+" number={20}/>
                    <ExpDataBlock subEs="Líneas de código" subEn="Lines of Code" prefix="+" suffix="M" number={1}/>
                    <ExpDataBlock subEs="Tazas de Café" subEn="Coffee Cups" prefix="+"  number={7500}/>
                </div>
            </Jumbotron>
        </>
    )
}
