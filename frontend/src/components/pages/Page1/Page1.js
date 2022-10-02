import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Importación de imágenes jpg, png y svg
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Importación de estilos
import './Page1.css'

function Page1(){
    return (
    <div>
        <nav className="navbar-brand p-3">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <i id="bell" className="btn effect-btn float-start">
                            <img src="./images/bell.png" width="40" alt="bell"/>
                        </i>
                    </div>
                    <div className="col-6 align-items-center">
                        <div className="form">
                            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" className="fa fa-search btn p-0 effect-btn"></FontAwesomeIcon>
                            <input type="search" className="form-control form-input fs-5 fw-lighter" placeholder="Buscar pacientes..."/>
                        </div>
                    </div>
                    <div className="col">
                        <span className="float-end text-light fs-4">
                            <div class="row align-items-center justify-content-center">
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle className="dropdown-name">
                                        <img src="./images/profile-pic.png" className="img-thumbail rounded-circle mx-3" width="40px" alt="#"/>
                                        José Luis González
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="/login" className="text-danger">
                                        <img src="./images/log-out.png" className="img-thumbail mx-2 text-danger" width="20px" alt="#"/>
                                        Cerrar Sesión
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container-fluid mb-4" style={{maxWidth: '1290px'}}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <h1 className="fw-bold p-title">Pacientes</h1>
                </div>
                <div className="col">
                    <a id="bell" className="btn float-end effect-btn" href="/page3">
                            <img src="./images/plus-btn.png" width="85" alt="plus"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row d-flex align-items-center justify-content-center px-5 mb-4">
                <a className="card effect" href="/page2" style={{textDecoration: 'none', maxWidth: '1250px'}}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-3">
                            <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                        </div>
                        <div className="col col-md py-4">
                            <div className="row d-flex justify-content-center align-items-center px-1 py-3">
                                <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2'}}>
                                    <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '45px'}}>Alberto Horacio Orozco Ramos</h2>
                                </div>
                                <div className="col">
                                    <img src="./images/cara-seria.png" alt="" className="img-fluid float-end" style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className="d-flex row p-1 d-flex justify-content-center text-dark">
                                <div id="c-datos" className="col-5 p-3 px-4">
                                        <span className="fs-4 fw-bold">Edad: <span className="fs-4 fw-normal">20 años</span></span>
                                        <br></br>
                                        <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">En revisión</span></span>
                                </div>
                                <div id="c-datos" className="col p-3 px-4 offset-1">
                                    <span className="fs-4 fw-bold">Órdenes médicas: <span className="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row d-flex align-items-center justify-content-center px-5 mb-4">
                <a className="card effect" href="/page2" style={{textDecoration: 'none', maxWidth: '1250px'}}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-3">
                            <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                        </div>
                        <div className="col col-md py-4">
                            <div className="row d-flex justify-content-center align-items-center px-1 py-3">
                                <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2'}}>
                                    <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '45px'}}>Sergio Hiroshi Carrera Monnier</h2>
                                </div>
                                <div className="col">
                                    <img src="./images/cara-feliz.png" alt="" className="img-fluid float-end" style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className="d-flex row p-1 d-flex justify-content-center text-dark">
                                <div id="c-datos" className="col-5 p-3 px-4">
                                        <span className="fs-4 fw-bold">Edad: <span className="fs-4 fw-normal">21 años</span></span>
                                        <br></br>
                                        <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">Estable</span></span>
                                </div>
                                <div id="c-datos" className="col p-3 px-4 offset-1">
                                    <span className="fs-4 fw-bold">Órdenes médicas: <span className="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row d-flex align-items-center justify-content-center px-5 mb-4">
                <a className="card effect" href="/page2" style={{textDecoration: 'none', maxWidth: '1250px'}}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-3">
                            <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                        </div>
                        <div className="col col-md py-4">
                            <div className="row d-flex justify-content-center align-items-center px-1 py-3">
                                <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2'}}>
                                    <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '45px'}}>Juan Daniel Rodríguez Oropeza</h2>
                                </div>
                                <div className="col">
                                    <img src="./images/cara-mala.png" alt="" className="img-fluid float-end" style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className="d-flex row p-1 d-flex justify-content-center text-dark">
                                <div id="c-datos" className="col-5 p-3 px-4">
                                        <span className="fs-4 fw-bold">Edad: <span className="fs-4 fw-normal">20 años</span></span>
                                        <br></br>
                                        <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">Crítico</span></span>
                                </div>
                                <div id="c-datos" className="col p-3 px-4 offset-1">
                                    <span className="fs-4 fw-bold">Órdenes médicas: <span className="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row d-flex align-items-center justify-content-center px-5 mb-4">
                <a className="card effect" href="/page2" style={{textDecoration: 'none', maxWidth: '1250px'}}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-3">
                            <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                        </div>
                        <div className="col col-md py-4">
                            <div className="row d-flex justify-content-center align-items-center px-1 py-3">
                                <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2'}}>
                                    <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '45px'}}>Ricardo José Olmedo Cañas</h2>
                                </div>
                                <div className="col">
                                    <img src="./images/cara-feliz.png" alt="" className="img-fluid float-end" style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className="d-flex row p-1 d-flex justify-content-center text-dark">
                                <div id="c-datos" className="col-5 p-3 px-4">
                                        <span className="fs-4 fw-bold">Edad: <span className="fs-4 fw-normal">20 años</span></span>
                                        <br></br>
                                        <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">Estable</span></span>
                                </div>
                                <div id="c-datos" className="col p-3 px-4 offset-1">
                                    <span className="fs-4 fw-bold">Órdenes médicas: <span className="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row d-flex align-items-center justify-content-center px-5 mb-4">
                <a className="card effect" href="/page2" style={{textDecoration: 'none', maxWidth: '1250px'}}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-3">
                            <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                        </div>
                        <div className="col col-md py-4">
                            <div className="row d-flex justify-content-center align-items-center px-1 py-3">
                                <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2'}}>
                                    <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '45px'}}>Omar Alonso López Valenzuela</h2>
                                </div>
                                <div className="col">
                                    <img src="./images/cara-seria.png" alt="" className="img-fluid float-end" style={{width: '200px'}}/>
                                </div>
                            </div>
                            <div className="d-flex row p-1 d-flex justify-content-center text-dark">
                                <div id="c-datos" className="col-5 p-3 px-4">
                                        <span className="fs-4 fw-bold">Edad: <span className="fs-4 fw-normal">20 años</span></span>
                                        <br></br>
                                        <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">En revisión</span></span>
                                </div>
                                <div id="c-datos" className="col p-3 px-4 offset-1">
                                    <span className="fs-4 fw-bold">Órdenes médicas: <span className="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Page1