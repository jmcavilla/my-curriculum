import React from 'react'

const Header = () => {
    return (
        <div className="row header__container">
                <div className="col-lg-3 col-sm-12">
                    <div className="header__img-container">
                        <img className="header__img" src={`${process.env.PUBLIC_URL}/images/my-photo.jpeg`}></img>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="header__info-container">
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
                    <div className="header__info-container">

                        <h5 className="header__link">
                            <i class="fab fa-linkedin"></i> 
                            Linkedin
                        </h5>
                        <h5 className="header__link">
                            <i class="fab fa-github-square"></i> 
                            GitHub
                        </h5>
                        <h5 className="header__link">
                            <i class="fas fa-envelope"></i> 
                            juanmcavilla@gmail.com
                        </h5>
                    </div>
                </div>
            </div>
    )
}

export default Header
