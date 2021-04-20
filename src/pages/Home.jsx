import React, { useState, useEffect } from 'react'
import { Col, Row, } from 'react-bootstrap'
import WhoBlock from '../components/WhoBlock'
import { getEducation } from '../helpers/education';
import { InfoBlock } from '../components/InfoBlock';
import { ExperienceBlock } from '../components/ExperienceBlock';
import { useDispatch, useSelector } from 'react-redux';
import { TechCarousel } from '../components/TechCarousel'
import { NumbersBlock } from '../components/NumbersBlock'
import moment from 'moment'
import { HelloBlock } from '../components/HelloBlock'
import { useParams } from 'react-router';
import { setLang } from '../store/i18n/i18nReducer';

const Home = () => {
    let { lang } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLang(lang && lang.toUpperCase()))
    }, [])

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
                            <p className="footer-email d-none d-lg-block">juanmcavilla.dev@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            }   
        </>
    )
}

export default Home
