import React from 'react'
import { Button } from 'react-bootstrap';


const Header = () => {
    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/juan-manuel-cavilla-152a1739/')
    }

    const handleGithub = () => {
        window.open('https://github.com/jmcavilla');
    }

    const handleEmail = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=juanmcavilla@gmail.com');
    }

    const handleDownloadPDF = () => {
        window.open(`${process.env.PUBLIC_URL}/cv.pdf`)
    }

    return (
        <div className="row header__container">
                <div className="col-lg-3 col-sm-12">
                    <div className="header__img-container animate__animated animate__bounceInLeft animate__slow">
                        <img className="header__img" src={`${process.env.PUBLIC_URL}/images/my-photo-2.jpeg`}></img>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="header__info-container animate__animated animate__bounceInDown animate__slow">
                        <h1>
                            Juan Manuel Cavilla
                        </h1>
                        <h2>
                            07/08/1991
                        </h2>
                        <h3>
                            Buenos Aires, Argentina
                        </h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="header__info-container animate__animated animate__bounceInRight animate__slow">

                        <h5 className="header__link" onClick={handleLinkedin}>
                            <i className="fab fa-linkedin"></i> 
                            Linkedin
                        </h5>
                        <h5 className="header__link" onClick={handleGithub}>
                            <i className="fab fa-github-square"></i> 
                            GitHub
                        </h5>
                        <h5 className="header__link" onClick={handleEmail}>
                            <i className="fas fa-envelope"></i> 
                            juanmcavilla@gmail.com
                        </h5>
                        {/* <div> */}
                            <Button variant="outline-primary" onClick={handleDownloadPDF} block>Descargar PDF</Button>
                        {/* </div> */}

                    </div>
                </div>
            </div>
    )
}

export default Header
