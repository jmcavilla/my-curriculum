import React from 'react'
import Header from './components/Header'
import ExpCard from './components/ExpCard'
import { ListGroup, ListGroupItem, CardColumns, Card, CardGroup } from 'react-bootstrap'

const CurriculumApp = () => {

    const jobs = [
        {
            id: 4,
            position: 'Tech Leader',
            company: 'quadion',
            time: 'Abr-2019 / -',
            description: ''
        },
        {
            id: 3,
            position: 'Full stack Developer SR.',
            company: 'quadion',
            time: 'Jul-2017 / Mar-2019',
            description: ''
        },
        {
            id: 2,
            position: 'Java Developer SSR',
            company: 'indra',
            time: 'Ene-2014 / Jun-2017',
            description: ''
        },
        {
            id: 1,
            position: 'Java Developer',
            company: 'accenture',
            time: 'Nov-2011 / Ene-2014',
            description: 'Mi primer trabajo. Forme parte de varios equipos desarrollando en Java. Trabaje en proyectos para clientes como Telefonica, Telecom Italia e Iberdrola.'
        },
    ]

    return (
        <div className="container">
            <Header />
            <div className="row content__container">
                <div className="col-lg-6 col-sm-12">
                    <div className="content__block-left">
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h1 class="display-4">¿Quien soy?</h1>
                                <p class="lead">Me considero una persona comprometida y proactiva, siempre dispuesto a mejorar como profesional y ayudar a otros que lo logren. Me siento con la capacidad de acompañar y compartir mis conocimientos a personas con menor senioritis para contribuir al crecimiento personal de mis compañeros</p>
                            </div>
                        </div>
                    </div>
                    <div  className="content__block-left">
                        <h1>Idiomas</h1>
                        <ListGroup>
                            <ListGroupItem><i class="fas fa-globe-americas"></i> Español - Nativo</ListGroupItem>
                            <ListGroupItem><i class="fas fa-globe-americas"></i> Ingles - Intermedio</ListGroupItem>
                            <ListGroupItem><i class="fas fa-globe-americas"></i> Italiano - Basico</ListGroupItem>

                        </ListGroup>
                    </div>
                    <div className="content__block-left">
                        <h1>Tecnologias</h1>
                        {/* <CardColumns> */}
                        <CardGroup>

                            <Card>
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/React.svg`}  />
                                <Card.Body>
                                    <Card.Title>React JS</Card.Title>
                                    <Card.Text>
                                        He completado cursos sobre React para poder realizar una migracion de tecnologias para una importante empresa de Salud Argentina. Ademas, estoy realizando proyectos personales para continuar especializandome mas en el framework.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/Angular2.svg`}  />
                                <Card.Body>
                                    <Card.Title>Angular 2+</Card.Title>
                                    <Card.Text>
                                        Durante este año 2020 ademas de sumar conocimientos en ReactJS, decidi capacitarme en Angular 2+. Tome la decision de especializarme en el desarrollo javascript, por lo que, tomar la decision de estudiar Angular era necesaria. Participe en un proyecto para una importante entidad Bancaria Argentina/Española.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        {/* </CardColumns> */}
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1>Mi experiencia</h1>
                    <div class="card-group">

                        {
                            jobs.map( job => (
                                <ExpCard {...job} key={job.id} />
                            ))
                        }                        
                        {/* <Card position="Java Developer SSR" company="indra" time="Ene-2014 / Jun-2017"/>
                        <Card position="Technical Leader" company="quadion" time="Nov-2011 / Ene-2014"/> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurriculumApp
