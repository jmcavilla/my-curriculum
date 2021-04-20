import React, { useEffect, useState } from 'react'
import { Jumbotron } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Slider from 'react-slick'
import { getTechs } from '../helpers/technologies';

export const TechCarousel = () => {
    const { lang } = useSelector(state => state.i18n);
    const [techs, setTechs] = useState([]);
    useEffect(() => {
        setTechs(getTechs());
    }, []);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
             <Jumbotron style={{ backgroundColor: '#20202a', color: 'white', boxShadow: "10px 10px 16px 0px rgb(0 0 0 / 42%)"}}>
                <h4 style={{textAlign: 'center'}}>{lang == 'ES' ? `Tecnologías` : 'Technologies'}</h4>
                <div>
                    <Slider  {...settings}>
                        {
                            techs && techs.map( tech => (
                                <div>
                                    <div style={{
                                        justifyContent: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        minHeight: '200px'
                                    }}>
                                        <img src={tech.img} alt={tech.name} width="100" />
                                        <span>{tech.name}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Jumbotron>
        </>
    )
}
