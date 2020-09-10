import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ExpCard = ({ position, company, time, description }) => {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () =>{
        setShowModal(!showModal)
    }
    return (
        <>
        {/* <div className="card" style={{
            width: '18rem'
            }}>
                <div className="card__img-container">
                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />

                </div>
            <div className="card-body">
                <h3>{position}</h3>
                <h4>{company}</h4>
                <p>{time}</p>
            </div>
        </div> */}
        
            <div class="media card__container">
                <div className="card__img-container">
                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />

                </div>
                <div class="media-body card__body">
                    <h5 class="mt-0">{position}</h5>
                    <p className="card__p"><b>{company}</b> - {time} </p>
                    <Button variant="outline-primary" onClick={handleOpenModal}>+ INFO</Button>
                </div>
            </div>
            <Modal show={showModal} onHide={handleOpenModal}>
                <Modal.Header closeButton>
                    <Modal.Title><p  className="card__p">{position} - {company}</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                
            </Modal>
        </>
    )
}

export default ExpCard
