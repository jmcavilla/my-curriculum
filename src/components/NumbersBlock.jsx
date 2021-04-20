import moment from 'moment'
import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { ExpDataBlock } from './ExpDataBlock'

export const NumbersBlock = () => {
    return (
        <>
            <Jumbotron style={{ backgroundColor: '#111116', color: 'white', boxShadow: "10px 10px 16px 0px rgb(0 0 0 / 42%)"}}>
                <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        
                        justifyContent: 'space-between'
                }}>
                    <ExpDataBlock subEs="Años experiencia" subEn="Years Experience" number={moment().diff('2011', 'years')}/>
                    <ExpDataBlock subEs="Proyectos completados" subEn="Completed Projects" prefix="+" number={100}/>
                    <ExpDataBlock subEs="Líneas de código" subEn="Lines of Code" prefix="+" suffix="M" number={1}/>
                    <ExpDataBlock subEs="Tazas de Café" subEn="Coffee Cups" prefix="+"  number={7500}/>
                </div>
            </Jumbotron>
        </>
    )
}
