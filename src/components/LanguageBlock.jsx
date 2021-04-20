import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../store/i18n/i18nReducer';

export const LanguageBlock = ({ showMobile = false}) => {
    const dispatch = useDispatch();
    const { lang } = useSelector(state => state.i18n)
    const changeLang = ( lang ) => {
        dispatch(setLang(lang));
    }
    return (
        <>
            <Col>
                <Row>
                    <Col xs="6">
                        <div style={{ 
                            fontSize: '1.2em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '15%',
                        }}>
                            <Button 
                                variant={lang === 'EN' ? "warning" : "outline-warning"}
                                onClick={() => changeLang('EN')}
                            >
                            <i className="fas fa-globe" style={{ marginRight: '3px'}}></i>EN
                            </Button>
                            
                        </div>

                    </Col>
                    <Col xs="6">
                        <div style={{ 
                            fontSize: '1.2em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '15%',
                        }}>
                            <Button 
                                variant={lang === 'ES' ? "warning" : "outline-warning"}
                                onClick={() => changeLang('ES')}
                            >
                                <i className="fas fa-globe" style={{ marginRight: '3px'}}></i>ES
                            </Button>
                            
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
