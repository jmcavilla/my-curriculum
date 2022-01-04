import React, { useEffect, useState } from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getTranslate } from '../helpers/translate';
import { JumboInfo } from './JumboInfo';
import moment from 'moment';

export const InfoBlock = () => {
    const { lang } = useSelector(state => state.i18n)
    const [texts, setTexts] = useState(null)

    const getTexts = async (language) => {
        const data = await getTranslate('personalInfo',language);
        setTexts(data);
    }

    useEffect(() => {
        getTexts(lang)
    }, [lang]);

    return (
        <>
            {texts &&
            <>

                <div style={{
                    textAlign: 'center'
                }}>
                    <h1 style={{ color: '#000000' }}>Juan Manuel Cavilla</h1>
                    {/* <p style={{ color: '#000000' }}>{ texts.rol }</p> */}
                </div>
                <hr style={{ color: '#00e295', backgroundColor:'#00e295' }}></hr>
                <JumboInfo label={texts.country} info={'Argentina'}/>
                <JumboInfo label={texts.city} info={'Buenos Aires'}/>
                <JumboInfo label={texts.age} info={moment().diff('1991-08-07','years')}/>
                <hr style={{ color: '#00e295', backgroundColor:'#00e295' }}></hr>
                {
                    texts.languages.map( (lang, i) => (
                        <Row key={i}>
                            <Col>
                                <p>{lang.lang}</p>  
                            </Col>
                            <Col>
                                <ProgressBar variant="customColor" now={lang.perc} srOnly striped  />
                            </Col>
                        </Row>
                    ))
                }

            </>
            }
        </>
    )
}
