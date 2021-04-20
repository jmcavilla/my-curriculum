import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Col, Jumbotron, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { getJobs } from '../helpers/jobs';
import ExpCard from './ExpCard'
import { ExpDataBlock } from './ExpDataBlock';

export const ExperienceBlock = () => {
    const { lang } = useSelector(state => state.i18n)
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(getJobs(lang));
    }, [jobs, lang]);
    return (
        <>
            
            <Jumbotron style={{ backgroundColor: '#111116', color: 'white', boxShadow: "10px 10px 16px 0px rgb(0 0 0 / 42%)"}}>
                <h4 style={{textAlign: 'center'}}>{lang == 'ES' ? `Experiencia` : 'Experience'}</h4>
                <hr style={{ color: 'gray', backgroundColor:'gray'}}></hr>
                {
                    jobs && jobs.map( (job,index) => (
                        <ExpCard 
                            key={index} 
                            position={job.position} 
                            company={job.company} 
                            time={job.time} 
                            description={job.description} 
                            type={(index%2 == 0) ? 'left' : 'right'}
                        
                        />

                    ))
                }
            </Jumbotron>   
        </>
    )
}
