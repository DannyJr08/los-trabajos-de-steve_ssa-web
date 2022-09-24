import React from 'react';

// Importación de imágenes jpg, png y svg

// Importación de estilos
import './Page1.css'

function Page1(){
    // const form = document.querySelector("form")

    //     form.addEventListener('submit', e => {
    //         if (!form.checkValidity()) {
    //             e.preventDefault()
    //         }

    //         form.classNameList.add('was-validated')
    //     })
    return (
        <div>
            <nav class="navbar-brand p-3">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col">
                    <i id="bell" class="btn">
                        <img src="/LPage/img/bell.png" width="40"> </img>
                    </i>
                </div>
                <div class="col-6 align-items-center">
                    <div class="form">
                        <i id="search-icon" class="fa fa-search btn p-0"></i>
                        <input type="search" class="form-control form-input" placeholder="Buscar Pacientes..."> </input>
                    </div>
                </div>
                <div class="col">
                    <span class="float-end text-light fs-4">
                        <img src="/LPage/img/profile-pic.png" class="img-thumbail rounded-circle" width="35px" alt="#"> </img>
                        José Luis González
                    </span>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row d-flex justify-content-center align-items-center px-5">
            <div class="col">
                <h1 id="p-title" class="px-4 py-2">Pacientes</h1>
            </div>
            <div class="col">
                <i id="bell" class="btn float-end">
                        <img src="/LPage/img/plus-btn.png" width="85"> </img>
                    </i>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center mb-4">
            <div class="card" style="max-width: 1250px">
                <div class="row">
                    <div class="col-md-3">
                        <img src="/LPage/img/profile-pic.png" alt="" class="img-fluid rounded-start p-5"> </img>
                    </div>
                    <div class="col-md py-4">
                        <div class="card-body">
                            <h5 class="c-title text-light fw-bold">Alberto Horacio Orozco Ramos</h5>
                        </div>
                        <div class="row p-3 d-flex justify-content-center">
                            <div id="c-datos" class="col-5 p-3">
                                    <span class="fs-3 fw-bold">Edad: <span class="fs-3 fw-normal">20 años</span></span>
                                    <br></br>
                                    <span class="fs-3 fw-bold">Estado de salud: <span class="fs-3 fw-normal">En revisión</span></span>
                            </div>
                            <div class="col"></div>
                            <div id="c-datos" class="col-6 p-4">
                                <span class="fs-4 fw-bold">Órdenes médicas: <span class="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center mb-4">
            <div class="card" style="max-width: 1250px">
                <div class="row">
                    <div class="col-md-3">
                        <img src="/LPage/img/profile-pic.png" alt="" class="img-fluid rounded-start p-5"></img>
                    </div>
                    <div class="col-md py-4">
                        <div class="card-body">
                            <h5 class="c-title text-light fw-bold">Sergio Hiroshi Carrera Monnier</h5>
                        </div>
                        <div class="row p-3 d-flex justify-content-center">
                            <div id="c-datos" class="col-5 p-3">
                                <div class="row justify-content-center align-content-center">
                                    <span class="fs-3 fw-bold">Edad: <span class="fs-3 fw-normal">21 años</span></span>
                                    <span class="fs-3 fw-bold">Estado de salud: <span class="fs-3 fw-normal">Estable</span></span>
                                </div>
                            </div>
                            <div class="col-1"></div>
                            <div id="c-datos" class="col-6 p-4">
                                <span class="fs-4 fw-bold">Órdenes médicas: <span class="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <div class="row align-items-center justify-content-center mb-4">
            <div class="card" style="max-width: 1250px">
                <div class="row">
                    <div class="col-md-3">
                        <img src="/LPage/img/profile-pic.png" alt="" class="img-fluid rounded-start p-5"> </img>
                    </div>
                    <div class="col-md py-4">
                        <div class="card-body">
                            <h5 class="c-title text-light fw-bold">Juan Daniel Rodríguez Oropeza</h5>
                        </div>
                        <div class="row p-3 d-flex justify-content-center">
                            <div id="c-datos" class="col-5 p-3">
                                <div class="row justify-content-center align-content-center">
                                    <span class="fs-3 fw-bold">Edad: <span class="fs-3 fw-normal">20 años</span></span>
                                    <span class="fs-3 fw-bold">Estado de salud: <span class="fs-3 fw-normal">En revisión</span></span>
                                </div>
                            </div>
                            <div class="col-1"></div>
                            <div id="c-datos" class="col-6 p-4">
                                <span class="fs-4 fw-bold">Órdenes médicas: <span class="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center mb-4">
            <div class="card" style="max-width: 1250px">
                <div class="row">
                    <div class="col-md-3">
                        <img src="/LPage/img/profile-pic.png" alt="" class="img-fluid rounded-start p-5"> </img>
                    </div>
                    <div class="col-md py-4">
                        <div class="card-body">
                            <h5 class="c-title text-light fw-bold">Ricardo José Olmedo Cañas</h5>
                        </div>
                        <div class="row p-3 d-flex justify-content-center">
                            <div id="c-datos" class="col-5 p-3">
                                <div class="row justify-content-center align-content-center">
                                    <span class="fs-3 fw-bold">Edad: <span class="fs-3 fw-normal">20 años</span></span>
                                    <span class="fs-3 fw-bold">Estado de salud: <span class="fs-3 fw-normal">Crítico</span></span>
                                </div>
                            </div>
                            <div class="col-1"></div>
                            <div id="c-datos" class="col-6 p-4">
                                <span class="fs-4 fw-bold">Órdenes médicas: <span class="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center mb-4">
            <div class="card" style="max-width: 1250px">
                <div class="row">
                    <div class="col-md-3">
                        <img src="/LPage/img/profile-pic.png" alt="" class="img-fluid rounded-start p-5"> </img>
                    </div>
                    <div class="col-md py-4">
                        <div class="card-body">
                            <h5 class="c-title text-light fw-bold">Omar Alonso López Valenzuela</h5>
                        </div>
                        <div class="row p-3 d-flex justify-content-center">
                            <div id="c-datos" class="col-5 p-3">
                                <div class="row justify-content-center align-content-center">
                                    <span class="fs-3 fw-bold">Edad: <span class="fs-3 fw-normal">20 años</span></span>
                                    <span class="fs-3 fw-bold">Estado de salud: <span class="fs-3 fw-normal">Estable</span></span>
                                </div>
                            </div>
                            <div class="col-1"></div>
                            <div id="c-datos" class="col-6 p-4">
                                <span class="fs-4 fw-bold">Órdenes médicas: <span class="fs-4 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Register