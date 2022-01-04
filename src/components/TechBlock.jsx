import React, { useEffect, useState } from 'react'
import { Card, CardColumns } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { getTechs } from '../helpers/technologies';

const TechBlock = () => {
    const { lang } = useSelector(state => state.i18n);
    const [techs, setTechs] = useState([]);
    useEffect(() => {
        setTechs(getTechs());
    }, []);
    return (
        <div className="">
            <h2 style={{textAlign: 'center', marginBottom: '60px'}}>{lang === 'ES' ? `Tecnologías` : 'Technologies'}</h2>
            <CardColumns >
                {
                    techs && techs.map( (tech, i) => (
                        <Card key={i} className={`animate__animated animate__slideIn${tech.slide}`}>
                            <Card.Img variant="top" src={tech.img}  />
                        </Card>
                    ))
                }

            </CardColumns>
        </div>
    )
}

export default TechBlock
