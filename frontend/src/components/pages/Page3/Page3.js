import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Importación de imágenes jpg, png y svg
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Importación de estilos
import './Page3.css'

function Page3(){
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

    <div className="container-fluid mb-4" style={{maxWidth: '1350px'}}>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6">
                <h1 id="p-title" className="fw-bold mx-2">Agregar o quitar pacientes</h1>
            </div>
            <div className="col">
                <a href="/page1" id="bell" className="btn float-end effect-btn">
                    <img href="/#" src="./images/cross-btn.png" width="85" alt="cross"/>
                </a>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row mb-5 justify-content-center">
            <div className="col-6">
                <label htmlFor="text" className="visually-hidden">Token</label>
                <input type="text" className="form-control form-control-lg fs-4 fw-lighter" id="token-input" placeholder="Ingrese el token proporcionado por el paciente" aria-label=".form-control-lg example"/>
            </div>
            <div className="col-auto">
                <button className="btn btn-lg btn-primary mb-3 effect" id="token-input">Agregar</button>
            </div>
        </div>

        <div className="row justify-content-center align-items-center">
            <div className="col-10">
                <div className="row align-items-center justify-content-center mb-4 effect">
                    <div className="card" style={{maxWidth: '1400px'}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3">
                                <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                            </div>
                            <div className="col col-md py-4">
                                <div className="row justify-content-center align-items-center px-1 py-3">
                                    <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2', width: 'auto'}}>
                                        <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '40px'}}>Alberto Horacio Orozco Ramos</h2>
                                    </div>
                                    <div className="col">
                                        <img src="./images/cara-seria.png" alt="" className="img-fluid float-end" style={{width: '150px'}}/>
                                    </div>
                                </div>
                                <div className="row p-1 d-flex justify-content-center">
                                    <div id="c-datos" className="col-5 p-3 px-4">
                                            <span className="fs-6   fw-bold">Edad: <span className="fs-6   fw-normal">20 años</span></span>
                                            <br></br>
                                            <span className="fs-6   fw-bold">Estado de salud: <span className="fs-6   fw-normal">En revisión</span></span>
                                    </div>
                                    <div id="c-datos" className="col p-3 px-4 offset-1">
                                        <span className="fs-6   fw-bold">Órdenes médicas: <span className="fs-6   fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <i id="bell" className="btn float-end effect-btn">
                    <img href="#" src="./images/minus-btn.png" width="85" alt="minus"/>
                </i>
            </div>
        </div>
        <div className="row justify-content-center align-items-center">
            <div className="col-10">
                <div className="row align-items-center justify-content-center mb-4 effect">
                    <div className="card" style={{maxWidth: '1400px'}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3">
                                <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                            </div>
                            <div className="col col-md py-4">
                                <div className="row justify-content-center align-items-center px-1 py-3">
                                    <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2', width: 'auto'}}>
                                        <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '40px'}}>Sergio Hiroshi Carrera Monnier</h2>
                                    </div>
                                    <div className="col">
                                        <img src="./images/cara-feliz.png" alt="" className="img-fluid float-end" style={{width: '150px'}}/>
                                    </div>
                                </div>
                                <div className="row p-1 d-flex justify-content-center">
                                    <div id="c-datos" className="col-5 p-3 px-4">
                                            <span className="fs-6   fw-bold">Edad: <span className="fs-6   fw-normal">21 años</span></span>
                                            <br></br>
                                            <span className="fs-6   fw-bold">Estado de salud: <span className="fs-6   fw-normal">Estable</span></span>
                                    </div>
                                    <div id="c-datos" className="col p-3 px-4 offset-1">
                                        <span className="fs-6   fw-bold">Órdenes médicas: <span className="fs-6   fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <i id="bell" className="btn float-end effect-btn">
                    <img href="#" src="./images/minus-btn.png" width="85" alt="minus"/>
                </i>
            </div>
        </div>
        <div className="row justify-content-center align-items-center">
            <div className="col-10">
                <div className="row align-items-center justify-content-center mb-4 effect">
                    <div className="card" style={{maxWidth: '1400px'}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3">
                                <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                            </div>
                            <div className="col col-md py-4">
                                <div className="row justify-content-center align-items-center px-1 py-3">
                                    <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2', width: 'auto'}}>
                                        <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '40px'}}>Juan Daniel Rodríguez Oropeza</h2>
                                    </div>
                                    <div className="col"> 
                                        <img src="./images/cara-mala.png" alt="" className="img-fluid float-end" style={{width: '150px'}}></img>
                                    </div>
                                </div>
                                <div className="row p-1 d-flex justify-content-center">
                                    <div id="c-datos" className="col-5 p-3 px-4">
                                            <span className="fs-6   fw-bold">Edad: <span className="fs-6   fw-normal">20 años</span></span>
                                            <br></br>
                                            <span className="fs-6   fw-bold">Estado de salud: <span className="fs-6   fw-normal">Crítico</span></span>
                                    </div>
                                    <div id="c-datos" className="col p-3 px-4 offset-1">
                                        <span className="fs-6   fw-bold">Órdenes médicas: <span className="fs-6   fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <i id="bell" className="btn float-end effect-btn">
                    <img href="#" src="./images/minus-btn.png" width="85" alt="minus"/>
                </i>
            </div>
        </div>
        <div className="row justify-content-center align-items-center">
            <div className="col-10">
                <div className="row align-items-center justify-content-center mb-4 effect">
                    <div className="card" style={{maxWidth: '1400px'}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3">
                                <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                            </div>
                            <div className="col col-md py-4">
                                <div className="row justify-content-center align-items-center px-1 py-3">
                                    <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2', width: 'auto'}}>
                                        <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '40px'}}>Ricardo José Olmedo Cañas</h2>
                                    </div>
                                    <div className="col">
                                        <img src="./images/cara-feliz.png" alt="" className="img-fluid float-end" style={{width: '150px'}}/>
                                    </div>
                                </div>
                                <div className="row p-1 d-flex justify-content-center">
                                    <div id="c-datos" className="col-5 p-3 px-4">
                                            <span className="fs-6   fw-bold">Edad: <span className="fs-6   fw-normal">20 años</span></span>
                                            <br></br>
                                            <span className="fs-6   fw-bold">Estado de salud: <span className="fs-6   fw-normal">Estable</span></span>
                                    </div>
                                    <div id="c-datos" className="col p-3 px-4 offset-1">
                                        <span className="fs-6   fw-bold">Órdenes médicas: <span className="fs-6   fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <i id="bell" className="btn float-end effect-btn">
                    <img href="#" src="./images/minus-btn.png" width="85" alt="minus"/>
                </i>
            </div>
        </div>
        <div className="row justify-content-center align-items-center">
            <div className="col-10">
                <div className="row align-items-center justify-content-center mb-4 effect">
                    <div className="card" style={{maxWidth: '1400px'}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3">
                                <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                            </div>
                            <div className="col col-md py-4">
                                <div className="row justify-content-center align-items-center px-1 py-3">
                                    <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2', width: 'auto'}}>
                                        <h2 className="text-light fw-bold text-start" style={{fontWeight: '750px', fontSize: '40px'}}>Omar Alonso López Valenzuela</h2>
                                    </div>
                                    <div className="col">
                                        <img src="./images/cara-seria.png" alt="" className="img-fluid float-end" style={{width: '150px'}}/>
                                    </div>
                                </div>
                                <div className="row p-1 d-flex justify-content-center">
                                    <div id="c-datos" className="col-5 p-3 px-4">
                                            <span className="fs-6   fw-bold">Edad: <span className="fs-6   fw-normal">20 años</span></span>
                                            <br></br>
                                            <span className="fs-6   fw-bold">Estado de salud: <span className="fs-6   fw-normal">En revisión</span></span>
                                    </div>
                                    <div id="c-datos" className="col p-3 px-4 offset-1">
                                        <span className="fs-6   fw-bold">Órdenes médicas: <span className="fs-6   fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <i id="bell" className="btn float-end effect-btn">
                    <img href="#" src="./images/minus-btn.png" width="85" alt="minus"/>
                </i>
            </div>
        </div>
    </div>
</div>
    )
}

export default Page3