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
import { LanguageBlock } from '../components/LanguageBlock';
import QRBlock from '../components/QRBlock';
import TechBlock from '../components/TechBlock';

const Home = () => {
    let { lang } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLang(lang && lang.toUpperCase()))
    }, [])

    return (
        <>
            <Row>
                <Col md={9} xl={9}></Col>
                <Col md={3} xl={3}>
                    <div className="d-block" style={{ marginTop: '2.5em'}}>
                        <LanguageBlock showMobile={true}/>
                    </div>
                </Col>
            </Row>
            <Row style={{
                marginTop: '2em'
            }}>
                <Col xs={12} md={12} xl={12}>
                    <HelloBlock />
                </Col>
            </Row>
            <Row style={{
                marginTop: '2em'
            }}>
                <Col xs={12} md={12} xl={12}>
                    <QRBlock />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NumbersBlock />
                </Col>
            </Row>
            <Row style={{
                marginTop: '2em'
            }}>
                <Col xs={12} md={12} xl={12}>
                    <ExperienceBlock />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} xl={12}>
                    <TechBlock/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} xl={12}>
                    {/* <TechCarousel /> */}

                    <div className="footer" style={{ borderTop: '3px solid #00e295', color: 'black', backgroundColor: 'white'}}>
                        <p style={{ marginBottom: '0', color: 'rgb(122, 122, 122)'}}>© {moment().year()} All Rights Reserved.</p>
                        <p className="footer-email d-none d-lg-block">juanmcavilla.dev@gmail.com</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Home
