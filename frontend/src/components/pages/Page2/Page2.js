import React, { useState, useContext, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { db } from '../../../firebase-config'
import { collection, getDocs } from 'firebase/firestore';
import { signOut  } from 'firebase/auth'
import { auth } from "../../../firebase-config"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext"

// Importación de imágenes jpg, png y svg
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Importación de estilos
import './Page2.css'

function Page2(){

    const patientUID = localStorage.getItem('patient');
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    }, []);

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
                            <img href="" src="./images/bell.png" width="40" alt="bell"/>
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
                            <div className="row align-items-center justify-content-center">
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

        <div className="container-fluid p-3">
            <div className="row row-cols-1">
                <div className="col">
                    <a href="/" id="bell" className="btn float-end effect-btn">
                        <img href="/#" src="./images/cross-btn.png" width="85" alt=""/>
                    </a>
                </div>
            </div>
        </div>

        {patients.map((patient) => {
            if (patientUID === patient.uid) {
                return (
                    <div className="container-fluid mt-2 mb-3 rounded shadow" style={{backgroundColor: '#EBECEF', width: '90%'}}>
                        <div className="row align-items-stretch justify-content-center">
                                <img src="./images/profile-pic.png" className="img-thumbail rounded-circle" style={{width: '300px'}} id="profile-pic" alt="#"/>
                        </div>
                        <div className="row align-items-stretch justify-content-center">
                            <div className="col-8 c-name rounded-2 align-self-center px-4 " style={{backgroundColor: '#869FF2'}}>
                                <h2 className="text-light fw-bold text-center" style={{fontWeight: '750px', fontSize: '65px'}}>{patient.nombrePila} {patient.apellidoPaterno} {patient.apellidoMaterno}</h2>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                            <div className="col">
                                <div className="card effect">
                                    <h1 className="card-title text-center rounded-top fs-1 fw-bolder p-2">Datos Generales</h1>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            <span className="fs-4 fw-bold">Fecha de Nacimiento: <span className="fs-4 fw-normal">{patient.fechaNacimiento}</span></span>
                                            <br></br>
                                            <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">En revisión</span></span>
                                            <br></br>
                                            <span className="fs-4 fw-bold">Peso: <span className="fs-4 fw-normal">{patient.peso} Kg</span></span>
                                            <br></br>
                                            <span className="fs-4 fw-bold">Altura: <span className="fs-4 fw-normal">{patient.altura} cm</span></span>
                                        </p>
                                        <div className="d-grid gap-2">
                                            <Button className="btn fst-italic btn-lg" variant="outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" onClick={handleShow}>Más Información...</Button>
            
                                            <Modal centered show={show} onHide={handleClose} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title className="modal-title fs-2 fw-bold">Datos Generales del Paciente</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body className="modal-body text-center">
                                                    <p>
                                                        <span className="fs-4 fw-bold">Fecha de Nacimiento: <span className="fs-4 fw-normal">{patient.fechaNacimiento}</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Estado de salud: <span className="fs-4 fw-normal">En revisión</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Peso: <span className="fs-4 fw-normal">{patient.peso} Kg</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Altura: <span className="fs-4 fw-normal">{patient.altura} cm</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Órdenes Médicas: <span className="fs-4 fw-normal">Texto descriptivo de las indicaciones proporcionadas por el médico</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Antecedentes de Interés: <span className="fs-4 fw-normal">Texto descriptivo con algunos antecedentes de interés para el doctor</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Medicamentos: <span className="fs-4 fw-normal">Lista de medicamentos que toma el page2</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Planificación de Cuidados: <span className="fs-4 fw-normal">Texto descriptivo donde se describan las recomendaciones del médico</span></span>
                                                        <br></br>
                                                        <span className="fs-4 fw-bold">Otra información clínica pertinente: <span className="fs-4 fw-normal">Texto de ejemplo</span></span>
                                                    </p>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="primary" onClick={handleClose}>Listo</Button>
                                                </Modal.Footer>
                                            </Modal>
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
                )
            }
        })}
    </div>
    )
}

export default Page2