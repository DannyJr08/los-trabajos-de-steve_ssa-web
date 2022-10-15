import React, { useContext, useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { db } from '../../../firebase-config'
import { collection, getDocs } from 'firebase/firestore';
import { signOut  } from 'firebase/auth'
import { auth } from "../../../firebase-config"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext"
import { Alert } from 'react-bootstrap';

// Importación de imágenes jpg, png y svg
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Importación de estilos
import './Page3.css'

function Page3 () {

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)

    const {currentUser} = useContext(AuthContext)
    const userUID = currentUser.uid;

    const [patients, setUsers] = useState([]);
    const pacientCollectionRef = collection(db, "Paciente");
    const [doctors, setDoctors] = useState([]);
    const medicoCollectionRef = collection(db, "Medico");

    useEffect(() => {
        const getUsers = async () => {
            try {
                const dataP = await getDocs(pacientCollectionRef);
                setUsers(dataP.docs.map((doc) => ({...doc.data(), id: doc.id})));

                const dataD = await getDocs(medicoCollectionRef);
                setDoctors(dataD.docs.map((doc) => ({...doc.data(), id: doc.id})));
            }
            catch (err) {
                console.log(err);
            }
        };
        getUsers()
    },[]);

    const handleLogOut = (e) => {
        e.preventDefault();

        signOut(auth)
        .then(() => {
            // Sign-out successful.
            dispatch({type: "LOGOUT"})
            navigate("/login")
        })
        .catch((error) => {
            console.log("Error");
        });
    }

    return (
        <div>
            <nav className="navbar-brand p-3">
                <div className="container-fluid">
                    <div className="row-4 d-flex justify-content-center align-items-center">
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
                                        {doctors.map((doctor) => {
                                            if (userUID === doctor.uid) {
                                                return (
                                                    <span className="fw-semibold d-none d-lg-inline">{doctor.nombrePila} {doctor.apellidoPaterno} {doctor.apellidoMaterno}</span>
                                                )
                                            }
                                        })}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item onClick={handleLogOut} className="text-danger">
                                        <img src="./images/log-out.png" className="img-thumbail mx-2 text-danger" width="20px" alt="#"/>
                                        <span className="fw-semibold">Cerrar Sesión</span>
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
                        <a href="/" id="bell" className="btn float-end effect-btn">
                            <img href="/#" src="./images/cross-btn.png" width="85" alt="cross"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <div className="col-6">
                        <label htmlFor="text" className="visually-hidden">Token</label>
                        <input type="text" className="form-control form-control-lg fs-3 fw-lighter" id="token-input" placeholder="Ingrese el token proporcionado por el paciente" aria-label=".form-control-lg example"/>
                    </div>
                    <div className="col-auto">
                    <button id="bell" className="btn float-end effect-btn">
                        <img src="./images/plus-btn.png" width="85" alt="plus"/>
                    </button>
                    </div>
                </div>

                {patients.map((patient) => {
                    if (patient.uidMedicos !== undefined) {
                        var count = 0;
                        for (let i = 0; i < patient.uidMedicos.length; i++) {
                            if (userUID === patient.uidMedicos[i]) {
                                count++;
                                return (
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-10">
                                            <div className="row align-items-center justify-content-center mb-4">
                                                <a className="card effect shadow" href="/page2" style={{textDecoration: 'none', maxWidth: '1400px'}}>
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col-md-3">
                                                            <img src="./images/profile-pic.png" alt="" className="img-fluid rounded-start p-5"/>
                                                        </div>
                                                        <div className="col col-md py-4">
                                                            <div className="row justify-content-center align-items-center px-1 py-3">
                                                                <div className="col-9 rounded-2 align-self-start p-3" style={{backgroundColor: '#869FF2'}}>
                                                                    <h2 className="text-light fw-bold text-center" style={{fontWeight: '750px', fontSize: '40px'}}>{patient.nombrePila} {patient.apellidoPaterno} {patient.apellidoMaterno}</h2>
                                                                </div>
                                                                <div className="col">
                                                                    <img src="./images/cara-seria.png" alt="" className="img-fluid float-end" style={{width: '150px'}}/>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex row p-1 d-flex justify-content-center text-dark">
                                                                <div id="c-datos" className="col-5 p-3 px-4">
                                                                        <span className="fs-6 fw-bold">Fecha de Nacimiento: <span className="fs-6 fw-normal">{patient.fechaNacimiento}</span></span>
                                                                        <br></br>
                                                                        <span className="fs-6 fw-bold">Estado de salud: <span className="fs-6 fw-normal">En revisión</span></span>
                                                                </div>
                                                                <div id="c-datos" className="col p-3 px-4 offset-1">
                                                                    <span className="fs-6   fw-bold">Órdenes médicas: <span className="fs-6 fw-normal">Texto breve de las indicaciones proporcionadas por el médico</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <button id="bell" className="btn float-end effect-btn">
                                                <img href="#" src="./images/minus-btn.png" width="85" alt="minus"/>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        if (count === 0) {
                            return (
                                <div className="container-fluid">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col" style={{maxWidth: '1290px'}}>
                                            <Alert variant="warning" className="fw-bold text-warning m-2 p-4 text-center" style={{fontSize: '45px'}}>
                                                <img src="./images/warning.png" className="img-thumbail" width="75px" alt="#"/>
                                                ¡Ups! Parece que no has añadido pacientes a tu lista :/
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    else {
                        return (
                            <div className="container-fluid">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col" style={{maxWidth: '1290px'}}>
                                        <Alert variant="warning" className="fw-bold text-warning m-2 p-4 text-center" style={{fontSize: '45px'}}>
                                            <img src="./images/warning.png" className="img-thumbail" width="75px" alt="#"/>
                                            ¡Ups! Parece que no has añadido pacientes a tu lista :/
                                        </Alert>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Page3