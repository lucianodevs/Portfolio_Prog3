import "../css/Main.css"
import csharp from "../assets/csharp.svg"
import css from "../assets/css.svg"
import js from "../assets/javascript.svg"
import react from "../assets/react.svg"
import sql from "../assets/sql-server.svg"
import mySql from "../assets/mysql.svg"
import { Row, Col } from "react-bootstrap"
import proximamente from "../assets/proximamente.png"



const main = (props) => {
    
//destruturar
const {nombre, edad, direccion,email, tel, cuil, nacionalidad, estado_civil, equipo, hija,virtudes,hobbies, trabajos, cursos} = props.Datos



    return (
        <>
            <div className="conteiner">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Presentacion</p>
                            <br />
                            <p>Informacion Personal</p>
                            <p>+</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title">{nombre}</p>
                            <br />
                            <p>Edad: {edad}</p>
                            <p>Cuil: {cuil}</p>
                            <p>Email: {email}</p>
                            <p>Telefono: {tel}</p>
                            <p>Direccion: {direccion}</p>
                            <p>Nacionalidad: {nacionalidad}</p>


                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Skills</p>
                            <br />
                            <p>Algunos lenguajes que estoy aprendiendo En la UTN-FRT</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title">Lenguajes Aprendidos</p>
                            <Row md={2}>
                                <Col><p><img width="100" height="100" src={csharp} alt="" /></p></Col>
                                <Col><p><img width="100" height="100" src={css} alt="" /></p></Col>
                                <Col><p><img width="100" height="100" src={js} alt="" /></p></Col>
                                <Col><p><img width="100" height="100" src={react} alt="" /></p></Col>
                                <Col><p><img width="100" height="100" src={sql} alt="" /></p></Col>
                                <Col><p><img width="100" height="100" src={mySql} alt="" /></p></Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Acerca de mi</p>
                            <p>+</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title">Hobbie: {hobbies[0]}</p>
                            <br />
                            <p>Estado civil: {estado_civil}</p>
                            <p>Nombre Hija: {hija}</p>
                            <p>Hincha de : {equipo}</p>
                            <p>Virtud: {virtudes[2]}</p>
                            <p>Virtud: {virtudes[3]}</p>
                            <p>Virtud: {virtudes[4]}</p>

                        </div>
                    </div>
                </div>

            </div>

            <br />
            <br />
            <br />

            <div className="conteiner">

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Experiencias Laborales</p>
                            <p>+</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title">Trabajos: </p>
                            <br />
                            <p># {trabajos[0]}</p>
                            <p># {trabajos[1]}</p>
                            <p># {trabajos[2]}</p>
                            <p># {trabajos[3]}</p>

                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Cursos Realizados</p>
                            <p>+</p>
                        </div>
                        <div className="flip-card-back">
                            <p className=" title">Cursos Terminados</p>
                            <br />
                            <p># {cursos[0]}</p>
                            <p># {cursos[1]}</p>
                            <p># {cursos[2]}</p>
                            <p># {cursos[3]}</p>

                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Proyectos Realizados</p>
                            <p>+</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title"><img className="seis" src={proximamente} alt="" /></p>


                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
        </>
    )
}

export default main

