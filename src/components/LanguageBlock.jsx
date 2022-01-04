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
                <Row>
                    <Col xs="6">
                        <div style={{ 
                            fontSize: '1.2em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Button 
                                variant={lang === 'EN' ? "customColor" : "outline-customColor"}
                                onClick={() => changeLang('EN')}
                                style={{
                                    width: '100%'
                                }}
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
                        }}>
                            <Button 
                                variant={lang === 'ES' ? "customColor" : "outline-customColor"}
                                onClick={() => changeLang('ES')}
                                style={{
                                    width: '100%'
                                }}
                            >
                                <i className="fas fa-globe" style={{ marginRight: '3px'}}></i>ES
                            </Button>
                            
                        </div>
                    </Col>
                </Row>
        </>
    )
}
