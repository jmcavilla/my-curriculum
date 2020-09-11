import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpCard from './components/ExpCard'
import { ListGroup, ListGroupItem, } from 'react-bootstrap'
import WhoBlock from './components/WhoBlock'
import TechBlock from './components/TechBlock'
import { getJobs } from './helpers/jobs';
import { getEducation } from './helpers/education';

const CurriculumApp = () => {

    const [jobs, setJobs] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        setJobs(getJobs());
    }, [jobs]);

    useEffect(() => {
        setEducation(getEducation())
    }, [education])

    

    return (
        <div className="container container-border">
            <Header />
            <div className="row content__container">
                <div className="col-lg-6 col-sm-12">
                    <WhoBlock />
                    <TechBlock />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="content__block animate__animated animate__bounceInRight animate__delay-1s">
                        <h1>Mi experiencia</h1>
                        <div className="card-group">

                            {
                                jobs.map( job => (
                                    <ExpCard {...job} key={job.id} />
                                ))
                            }                        

                        </div>
                    </div>
                    <div  className="content__block animate__animated animate__bounceInRight animate__delay-2s">
                        <h1>Idiomas</h1>
                        <ListGroup>
                            <ListGroupItem><i className="fas fa-globe-americas"></i> Español - Nativo</ListGroupItem>
                            <ListGroupItem><i className="fas fa-globe-americas"></i> Ingles - Intermedio</ListGroupItem>
                            <ListGroupItem><i className="fas fa-globe-americas"></i> Italiano - Basico</ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="content__block animate__animated animate__bounceInRight animate__delay-2s">
                        <h1>Educación</h1>
                        <div className="card-group">
                            {
                                education.map( ed => (
                                    <ExpCard {...ed} key={ed.id} />
                                ))
                            }                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumApp
