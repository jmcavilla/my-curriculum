import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const WhoBlock = () => {
    const { lang } = useSelector(state => state.i18n);
    return (
        <Jumbotron style={{ backgroundColor: '#20202a', color: 'white', boxShadow: "10px 10px 16px 0px rgb(0 0 0 / 42%)"}}>

            <h1 className="display-5" style={{ color: '#ffc107'}}>{lang === 'ES' ? `¿Quién soy?` : `Who am I?`}</h1>
            {
            lang === 'ES' 
            ? 
            <p>
                Me considero una persona comprometida y proactiva, siempre dispuesto a mejorar como profesional y ayudar a otros que lo logren. Me siento con la capacidad de acompañar y compartir mis conocimientos a mis compañeros para contribuir a su crecimiento personal y profesional.
                <br />Seguir creciendo como profesional y continuar aumentando y perfeccionando mis conocimientos técnicos es una de mis deseos, así como también tener la oportunidad de lograr conseguir un trabajo desafiante fuera de mi país.
                <br />En estos momentos mi objetivo está puesto en seguir mejorando mi capacidad técnica en el desarrollo de aplicaciones web y mobile con las últimas tecnologías más usadas en el ambiente laboral, tales como React, Angular, VueJs, etc. También me gustaría mejorar mi capacidad en lenguajes de desarrollo nativo como Swift y Kotlin, y sumar conocimiento en desarrollo nativo en React Native.
            </p>
            :
            <p>
                I consider myself a committed and proactive person, always willing to improve as a professional and help others to achieve it. I feel able to accompany and share my knowledge to people with less senioritis to contribute to the personal growth of my colleagues
                <br />Currently I am a technical leader in the project of an important bank project dedicated to the solution of architectural problems and to help the lowest elders in the project accompanying them in the development process as well as to verify and correct the code of being necessary
                <br />My goals are to continue growing as a professional and continue to increase and refine my technical knowledge. At the moment my goal is to continue focusing on improving my technical capacity in the development of web and mobile applications with the latest technologies used in the work environment, stories like React, Angular, VueJs, etc. I would also like to improve my ability in languages ​​like Swift and Kotlin.
                <br />In addition to my professional career, I am instructing myself in the development of video games with the expectation that in the future my career as a processor will focus on this environment. 
            </p>
            }
        </Jumbotron>
    )
}

export default WhoBlock
