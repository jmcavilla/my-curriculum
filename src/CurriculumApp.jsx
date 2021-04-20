import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpCard from './components/ExpCard'
import { Button, Col, Form, FormControl, Image, Jumbotron, ListGroup, ListGroupItem, Nav, Navbar, NavDropdown, ProgressBar, Row, } from 'react-bootstrap'
import WhoBlock from './components/WhoBlock'
import TechBlock from './components/TechBlock'
import { getJobs } from './helpers/jobs';
import { getTechs } from './helpers/technologies';
import { getEducation } from './helpers/education';
import { InfoBlock } from './components/InfoBlock';
import { ExperienceBlock } from './components/ExperienceBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from './store/i18n/i18nReducer';
import Slider from 'react-slick';
import { TechCarousel } from './components/TechCarousel'
import { NumbersBlock } from './components/NumbersBlock'
import { LanguageBlock } from './components/LanguageBlock'
import moment from 'moment'
import { HelloBlock } from './components/HelloBlock'

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
        <>
            {
                <Row style={{
                    marginTop: '2em'
                }}>
                    <Col xs={12} md={3} xl={3}>
                        <InfoBlock />
                    </Col>
                    <Col xs={12} md={9} xl={9}>
                        <HelloBlock />
                        <WhoBlock />
                        <NumbersBlock />
                        <TechCarousel />
                        <ExperienceBlock />
                        <div className="footer" style={{boxShadow: '10px 10px 16px 0px rgb(0 0 0 / 42%)'}}>
                            <p style={{ marginBottom: '0', color: 'rgb(122, 122, 122)'}}>© {moment().year()} All Rights Reserved.</p>
                            <p class="footer-email d-none d-lg-block">juanmcavilla.dev@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            }   
        </>
    )
}

export default CurriculumApp
