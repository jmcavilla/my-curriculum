import React from 'react'
import { useSelector } from 'react-redux';

const ExpCard = ({ position, company, time, description, type= 'left', allPositions, moreInfo, size, projects }) => {
    const { lang } = useSelector(state => state.i18n)
    const goToStore = (url) => {
        window.open(url)
    }

    return (
        <>
            <div className={`media card__container animate__animated ${type === 'left' ? 'animate__slideInLeft' : 'animate__slideInRight'}`}>

                <div className="card__img-container">
                    <img className={`card-img-top ${size}`} src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />

                </div>
                <div className="media-body card__body">
                    <h2 className="mt-0">{position}</h2>
                    <h5 className="card__p"><b>{company}</b> - {time} </h5>
                </div>
                <div className='card__body'>

                    { description && description.trim() !== '' &&
                        <div className="media-body">
                            <p className="">{description} </p>
                        </div>
                    }
                </div>
                <div className='card__body'>
                    {
                        allPositions && allPositions.map( ({title, period}, i) => {
                            return (
                                <div key={i} className="media-body">
                                    <h6 className="mt-0 position">{title} - ({period})</h6>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='card__body'>
                    {
                        moreInfo && moreInfo.map( ({title, subtitle}, i) => {
                            return (
                                <div className="media-body" key={i}>
                                    <h6 className="mt-0 moreInfo">{title}</h6>
                                    <p className="">{subtitle} </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='card__body'>
                    <h4 style={{textAlign: 'center'}}>{lang === 'ES' ? `Proyectos` : 'Projects'}</h4>
                    {
                        projects.map( ({title, photo, web, android, ios, color, description}, i) => (
                            <div key={i} className='card__project-container'>
                                <div className="card__img-container" style={{ backgroundColor: color}}>
                                    <img className={`card-img-top large`} src={`${process.env.PUBLIC_URL}/images/${photo}`} alt={`${photo}`} />
                                </div>
                                <div className="media-body">
                                    <h4 className="mt-0">{title}</h4>
                                </div>
                                <div className="media-body" key={i}>
                                    <p className="mt-1">{description}</p>
                                </div>
                                <div className='card__store-container'>
                                    {
                                        android && android.trim() !== '' &&
                                        <img 
                                            className={`card-img-top store`} 
                                            src={`${process.env.PUBLIC_URL}/images/google_play.png`} 
                                            alt={`${photo}`} 
                                            onClick={() => goToStore(android)}
                                        />
                                    }

                                    {
                                        ios && ios.trim() !== '' &&
                                        <img 
                                            className={`card-img-top store`} 
                                            src={`${process.env.PUBLIC_URL}/images/ios_store.png`} 
                                            alt={`${photo}`} 
                                            onClick={() => goToStore(android)}
                                        />
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr style={{ color: '#00e295', backgroundColor:'#00e295'}}></hr>
        </>
    )
}

export default ExpCard
