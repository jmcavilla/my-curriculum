import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const TechBlock = () => {
    return (
        <div className="content__block">
            <h1>Tecnologías</h1>
            <CardGroup >
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
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/react_native.png`}  />
                    <Card.Body>
                        <Card.Title>React Native</Card.Title>
                        <Card.Text>
                            Durante los ultimos años estuve utilizando Angular JS como principal framework para el desarrollo de la web de una importante Compañia de salud de la Republica Argentina. Aunque vieja, me ayudo a ingresar en el hermoso mundo del desarrollo web.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/ionic.png`}  />
                    <Card.Body>
                        <Card.Title>Ionic</Card.Title>
                        <Card.Text>
                            Durante los ultimos años estuve utilizando Angular JS como principal framework para el desarrollo de la web de una importante Compañia de salud de la Republica Argentina. Aunque vieja, me ayudo a ingresar en el hermoso mundo del desarrollo web.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/angularjs.png`}  />
                    <Card.Body>
                        <Card.Title>Angular JS</Card.Title>
                        <Card.Text>
                            Durante los ultimos años estuve utilizando Angular JS como principal framework para el desarrollo de la web de una importante Compañia de salud de la Republica Argentina. Aunque vieja, me ayudo a ingresar en el hermoso mundo del desarrollo web.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/java.jpg`}  />
                    <Card.Body>
                        <Card.Title>Java</Card.Title>
                        <Card.Text>
                            Java fue el lenguaje donde comence mi etapa profesional en el area de Sistemas. Durante 6 años me forme en este lenguaje llegando a rendir la certificacion Java 1.6 resultando en desaprobarla por tan solo 2 puntos. Luego, de muchos años mi decision fue dejar de lado un poco el seguir actualizandome en esta tecnologia para dejar lugar a formas mas actuales de hacer backend como NodeJS.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default TechBlock
