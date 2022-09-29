import React from 'react';

// Importación de imágenes jpg, png y svg
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Importación de estilos
import './Page2.css'

function Page2(){
    return (
    <div>
        <nav className="navbar-brand p-3">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <i id="bell" className="btn effect float-start">
                            <img href="" src="./images/bell.png" width="40" alt="bell"/>
                        </i>
                    </div>
                    <div className="col-6 align-items-center">
                        <div className="form">
                            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" className="fa fa-search btn p-0"></FontAwesomeIcon>
                            <input type="search" className="form-control form-input fs-5 fw-lighter" placeholder="Buscar pacientes..."/>
                        </div>
                    </div>
                    <div className="col">
                        <span className="float-end text-light fs-4">
                            <img src="./images/profile-pic.png" className="img-thumbail rounded-circle mx-2" width="35px" alt="#"/>
                            José Luis González
                        </span>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container-fluid">
            <div className="row row-cols-1">
                <div className="col">
                    <a href="/#" id="bell" className="btn float-end effect">
                        <img href="#" src="./images/cross-btn.png" width="85" alt=""/>
                    </a>
                </div>
            </div>
        </div>

        <div className="container-fluid mt-2 mb-3 rounded shadow" style={{backgroundColor: '#EBECEF', width: '90%',}}>
            <div className="row align-items-stretch justify-content-center">
                    <img src="./images/profile-pic.png" className="img-thumbail rounded-circle" style={{width: '300px'}} id="profile-pic" alt="#"/>
            </div>
            <div className="row align-items-stretch justify-content-center">
                <div className="col-8 c-name rounded-2 align-self-center px-4 " style={{backgroundColor: '#869FF2'}}>
                    <h2 className="text-light fw-bold text-center" style={{fontWeight: '750px', fontSize: '65px'}}>Alberto Horacio Orozco Ramos</h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <div className="card">
                        <h1 className="card-title text-center rounded-top fs-1 fw-bolder p-2">Datos Generales</h1>
                        <div className="card-body">
                            <p className="card-text text-center">
                                <span className="fs-4 fw-bold">Edad: <span className="fs-4 fw-normal">20 años</span></span>
                                <br></br>
                                <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">En revisión</span></span>
                                <br></br>
                                <span className="fs-4 fw-bold">Peso: <span className="fs-4 fw-normal">68 Kg</span></span>
                                <br></br>
                                <span className="fs-4 fw-bold">Altura: <span className="fs-4 fw-normal">1.72 mts</span></span>
                            </p>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary fst-italic btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Más Información...</button>
                                
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title fs-2 fw-bold" id="exampleModalLabel">Datos Generales del Paciente</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body text-center">
                                                <p>
                                                    <span className="fs-4 fw-bold">Edad: <span className="fs-4 fw-normal">20 años</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">En revisión</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Peso: <span className="fs-4 fw-normal">68 Kg</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Altura: <span className="fs-4 fw-normal">1.72 mts</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Órdenes Médicas: <span className="fs-4 fw-normal">Texto descriptivo de las indicaciones proporcionadas por el médico</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Antecedentes de Interés: <span className="fs-4 fw-normal">Texto descriptivo con algunos antecedentes de interés para el doctor</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Medicamentos: <span className="fs-4 fw-normal">Lista de medicamentos que toma el paciente</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Planificación de Cuidados: <span className="fs-4 fw-normal">Texto descriptivo donde se describan las recomendaciones del médico</span></span>
                                                    <br></br>
                                                    <span className="fs-4 fw-bold">Otra información clínica pertinente: <span className="fs-4 fw-normal">Texto de ejemplo</span></span>
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last Updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card effect">
                        <h1 className="card-title text-center rounded-top fs-1 fw-bolder p-2">Datos de Presión Arterial</h1>
                        <div className="card-body">
                            <div className="row align-items-stretch justify-content-center">
                                <img src="./images/grafica-ejem.png" alt="" className="card-img-top img-fluid"/>
                                <img src="./images/cara-seria.png" alt="" className="w-50 img-fluid mb-3"/>
                            </div>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last Updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card effect">
                        <h1 className="card-title text-center rounded-top fs-1 fw-bolder p-2">Datos Semanales</h1>
                        <div className="card-body">
                            <div className="row align-items-stretch justify-content-center">
                                <img src="./images/grafica-ejem2.png" alt="" className="card-img-top w-75 img-fluid"/>
                                <img src="./images/cara-feliz.png" alt="" className="w-50 img-fluid mb-3"/>
                            </div>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last Updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Page2