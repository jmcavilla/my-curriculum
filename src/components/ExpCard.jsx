import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const ExpCard = ({ position, company, time, description, type= 'left', allPositions, moreInfo, size }) => {
    const [showModal, setShowModal] = useState(false)
    console.log(allPositions)
    const handleOpenModal = () =>{
        setShowModal(!showModal)
    }
    return (
        <>
            {/* <div className="animate__animated card__img-container animate__slideInLeft">
                <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />
            </div> */}
            {/* <div className="media card__container "> */}
            <div className={`media card__container animate__animated ${type === 'left' ? 'animate__slideInLeft' : 'animate__slideInRight'}`}>

                <div className="card__img-container">
                    <img className={`card-img-top ${size}`} src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />

                </div>
                <div className="media-body card__body">
                    <h2 className="mt-0">{position}</h2>
                    <h5 className="card__p"><b>{company}</b> - {time} </h5>
                    {/* {description  && <Button variant="outline-warning" onClick={handleOpenModal}>+ INFO</Button>} */}
                </div>
                <div className='card__body'>

                    { description && description.trim() != '' &&
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
                {/* { type === 'left' ?
                    <>
                        <div className="media card__container animate__animated animate__slideInLeft">

                            <div className="card__img-container">
                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />

                            </div>
                            <div className="media-body card__body">
                                <h5 className="mt-0">{position}</h5>
                                <p className="card__p"><b>{company}</b> - {time} </p>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="media card__container animate__animated animate__slideInRight">
                            <div className="media-body card__body-right">
                                <h5 className="mt-0">{position}</h5>
                                <p className="card__p"><b>{company}</b> - {time} </p>
                            </div>
                            <div className="card__img-container">
                                <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />
                            </div>
                        </div>
                    </>
                } */}
            {/* </div> */}
            {/* <hr style={{ color: 'gray', backgroundColor:'gray'}}></hr>
            <Modal show={showModal} onHide={handleOpenModal}>
                <Modal.Header closeButton>
                    <Modal.Title><p  className="card__p">{position} - {company}</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                
            </Modal> */}
        </>
    )
}

export default ExpCard
