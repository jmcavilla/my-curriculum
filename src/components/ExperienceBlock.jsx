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
            
            <Jumbotron className='jumbotron__main'>
                <h2 style={{textAlign: 'center', marginBottom: '60px'}}>{lang == 'ES' ? `Experiencia` : 'Experience'}</h2>
                <hr style={{ color: '#00e295', backgroundColor:'#00e295'}}></hr>
                {
                    jobs && jobs.map( (job,index) => (
                        <ExpCard 
                            key={index} 
                            position={job.position} 
                            company={job.company} 
                            time={job.time} 
                            description={job.description} 
                            type={(index%2 == 0) ? 'left' : 'right'}
                            allPositions={job.allPositions}
                            moreInfo={job.moreInfo}
                            size={job.size}
                        />

                    ))
                }
            </Jumbotron>   
        </>
    )
}
