import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ExpCard = ({ position, company, time, description, type= 'left' }) => {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () =>{
        setShowModal(!showModal)
    }
    return (
        <>
            <div className="media card__container ">
               { type == 'left' ?
               <>
                    <div className="card__img-container">
                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />

                    </div>
                    <div className="media-body card__body">
                        <h5 className="mt-0">{position}</h5>
                        <p className="card__p"><b>{company}</b> - {time} </p>
                        {/* {description  && <Button variant="outline-warning" onClick={handleOpenModal}>+ INFO</Button>} */}
                    </div>
                </>
                :
                <>
                    <div className="media-body card__body-right">
                        <h5 className="mt-0">{position}</h5>
                        <p className="card__p"><b>{company}</b> - {time} </p>
                        {/* {description  && <Button variant="outline-warning" onClick={handleOpenModal}>INFO +</Button>} */}
                    </div>
                    <div className="card__img-container">
                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/${company}.png`} alt={`${company}`} />
                    </div>
                </>
                }
            </div>
            <hr style={{ color: 'gray', backgroundColor:'gray'}}></hr>
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
