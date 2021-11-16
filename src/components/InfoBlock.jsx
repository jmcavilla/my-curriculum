import React, { useEffect, useState } from 'react'
import { Button, Col, Image, Jumbotron, ProgressBar, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getTranslate } from '../helpers/translate';
import { JumboInfo } from './JumboInfo';
import { QRCode } from "react-qr-svg";
import { LanguageBlock } from './LanguageBlock';
import moment from 'moment';

export const InfoBlock = () => {
    const { lang } = useSelector(state => state.i18n)
    const [texts, setTexts] = useState(null)

    const getTexts = async () => {
        const data = await getTranslate('personalInfo',lang);
        setTexts(data);
    }

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/juan-manuel-cavilla-152a1739/')
    }

    const handleGithub = () => {
        window.open('https://github.com/jmcavilla');
    }

    const handleEmail = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=juanmcavilla.dev@gmail.com');
    }

    const handleDownloadPDF = () => {
        if(lang === 'ES'){
            window.open(`${process.env.PUBLIC_URL}/cv.pdf`)
        }else {
            window.open(`${process.env.PUBLIC_URL}/cv_en.pdf`)
        }
    }

    useEffect(() => {
        getTexts()
    }, [lang]);

    return (
        <>
            {texts &&
            <>
                <Jumbotron style={{ backgroundColor: '#20202a', color: 'white', boxShadow: "10px 10px 16px 0px rgb(0 0 0 / 42%)" }}>
                    <div style={{
                                margin: '0px 30px 0 30px',
                            }}>
                        <Image 
                            src={`${process.env.PUBLIC_URL}/images/my-photo-2.jpeg`} 
                            roundedCircle 
                            width="100%"
                            style={{
                                border: '0.2em solid #ffc107',
                            }}
                        />
                    </div>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <h5>Juan Manuel Cavilla</h5>
                        <p style={{ color: '#7a7a7a' }}>{ texts.rol }</p>
                    </div>
                    <Button style={{ width: '100%'}} variant="warning" onClick={handleDownloadPDF}>{lang === 'ES' ? `Descargar CV` : `Download CV`}</Button>
                    <hr style={{ color: 'gray', backgroundColor:'gray'}}></hr>
                    <Row>
                        <div className="icons-container" >
                            <i className="fab fa-linkedin" onClick={handleLinkedin}></i> 
                            <i className="fab fa-github-square" onClick={handleGithub}></i> 
                            <i className="fas fa-envelope" onClick={handleEmail}></i> 
                        </div>
                    </Row>
                    <hr style={{ color: 'gray', backgroundColor:'gray'}}></hr>
                    <div className="d-none d-lg-block">

                        <QRCode
                            bgColor="#20202a"
                            fgColor="#FFFFFF"
                            level="Q"
                            style={{ width: '100%' }}
                            value={lang === 'ES' ? `${window.location.href}/cv.pdf` : `${window.location.href}/cv_en.pdf` }
                        />
                    </div>
                    <div className="d-block" style={{ marginTop: '2.5em'}}>
                        <LanguageBlock showMobile={true}/>
                    </div>
                </Jumbotron>
                <Jumbotron style={{ backgroundColor: '#111116', color: 'white', boxShadow: "10px 10px 16px 0px rgb(0 0 0 / 42%)"}}>
                    <JumboInfo label={texts.country} info={'Argentina'}/>
                    <JumboInfo label={texts.city} info={'Buenos Aires'}/>
                    <JumboInfo label={texts.age} info={moment().diff('1991-08-07','years')}/>
                    <hr style={{ color: 'gray', backgroundColor:'gray'}}></hr>
                    {
                        texts.languages.map( (lang, i) => (
                            <Row key={i}>
                                <Col>
                                    <p>{lang.lang}</p>  
                                </Col>
                                <Col>
                                    <ProgressBar variant={lang.variant} now={lang.perc} srOnly striped  />
                                </Col>
                            </Row>
                        ))
                    }
                    <hr style={{ color: 'gray', backgroundColor:'gray'}}></hr>
                </Jumbotron>
            </>
            }
        </>
    )
}
