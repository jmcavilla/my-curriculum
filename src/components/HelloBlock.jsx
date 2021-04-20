import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const HelloBlock = () => {
    const { lang } = useSelector(state => state.i18n);

    const text_es = "¡Bienvenidos a mi web personal! Aca les contare un poco mas sobre mi y sobre mi carrera profesional y lo que puedo ofrecer como Desarrollador.";
    const text_en = "Welcome to my personal web! Here you will find information about me, abount my professional career and what can i offer to you as a Developer.";

    return (
        <>
            <Jumbotron 
                style={{ 
                    // backgroundColor: '#20202a', 
                    color: 'white', 
                    boxShadow: "10px 10px 16px 0px rgb(0 0 0 / 42%)",
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/code.jpg)`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '200px',
                    padding: '0'
                }}>
                    <div style={{
                        backgroundColor: 'rgb(32, 32, 42, 0.8)',
                        height: '100%',
                        padding: '30px'
                    }}>
                        <h1>{lang === 'ES' ? `Hola, Mundo!` : `Hello, world!`}</h1>
                        <p>
                            {lang === 'ES' ? text_es : text_en}
                        </p>
                    </div>
            </Jumbotron>
        </>
    )
}
