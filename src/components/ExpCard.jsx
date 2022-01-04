import React from 'react'

const ExpCard = ({ position, company, time, description, type= 'left', allPositions, moreInfo, size }) => {
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
                        allPositions && allPositions.map( ({title, period}) => {
                            return (
                                <div className="media-body">
                                    <h6 className="mt-0 position">{title} - ({period})</h6>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='card__body'>
                    {
                        moreInfo && moreInfo.map( ({title, subtitle}) => {
                            return (
                                <div className="media-body">
                                    <h6 className="mt-0 moreInfo">{title}</h6>
                                    <p className="">{subtitle} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr style={{ color: '#00e295', backgroundColor:'#00e295'}}></hr>
        </>
    )
}

export default ExpCard
