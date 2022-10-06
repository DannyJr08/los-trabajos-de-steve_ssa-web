import React from 'react';

// Importación de imágenes jpg, png y svg

// Importación de estilos
import './Register.css'

function Register(){
    // const form = document.querySelector("form")

    //     form.addEventListener('submit', e => {
    //         if (!form.checkValidity()) {
    //             e.preventDefault()
    //         }

    //         form.classNameList.add('was-validated')
    //     })
    return (
    <div className="container w-80 bg-primary mt-4 mb-3 rounded shadow">
        <div className="row align-items-stretch">
            <div className="col rounded-start p-5 pt-3 pb-3" style={{backgroundColor: '#C6D0F2'}}>
                <div className="text-center mb-4">
                    <h3 className="page-title">Bienvenido a</h3>
                    <h1 className="page-title">Salud - OS</h1>
                    <h2 className="page-title">¡Te Saluda!</h2>
                </div>
                <form novalidate>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-floating mb-1">
                                    <input type="text" id="name" className="form-control" name="firstname" placeholder="Escriba su nombre(s)" required/>
                                    <label htmlFor="email" className="form-label text-form" style={{opacity: '0.5'}}>Nombre(s)</label>
                                    <div className="invalid-feedback">Campo vacío</div>
                                    <div className="valid-feedback">Válido</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-2">
                                    <input type="text" id="name" className="form-control" name="lastname" placeholder="Escriba su apellido parterno" required/>
                                    <label htmlFor="email" className="form-label text-form" style={{opacity: '0.5'}}>Apellido Paterno</label>
                                    <div className="invalid-feedback">Campo vacío</div>
                                    <div className="valid-feedback">Válido</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="text" id="name" className="form-control" name="lastname" placeholder="Escriba su apellido materno" required/>
                                    <label htmlFor="email" className="form-label text-form" style={{opacity: '0.5'}}>Apellido Materno</label>
                                    <div className="invalid-feedback">Campo vacío</div>
                                    <div className="valid-feedback">Válido</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="email" id="email" className="form-control" placeholder="Escriba su correo electrónico" required/>
                        <label htmlFor="email" className="form-label text-form" style={{opacity: '0.5'}}>Correo Electrónico</label>
                        <div className="invalid-feedback">Correo inválido</div>
                        <div className="valid-feedback">Correo válido</div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" id="name" className="form-control" name="firstname" placeholder="Escriba su cédula profesional" required/>
                        <label htmlFor="email" className="form-label text-form" style={{opacity: '0.5'}}>Cédula Profesional</label>
                        <div className="invalid-feedback">Campo vacío</div>
                        <div className="valid-feedback">Válido</div>
                    </div>
                    <div className="form-floating">
                        <input type="password" id="email" className="form-control" placeholder="Escriba su contraseña" required/>
                        <label htmlFor="email" className="form-label text-form" style={{opacity: '0.5'}}>Contraseña</label>
                        <div className="invalid-feedback">Contraseña Inválida</div>
                        <div className="valid-feedback">Contraseña válida</div>
                    </div>
                    <div className="col-auto mb-1">
                        <span id="passwordHelpInLine" className="form-text">Debe ser entre 8-20 caracteres.</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" id="email" className="form-control" placeholder="Escriba nuevamente su contraseña" required/>
                        <label htmlFor="email" className="form-label text-form" style={{opacity: '0.5'}}>Confirmar Contraseña</label>
                        <div className="invalid-feedback">Contraseña Inválida</div>
                        <div className="valid-feedback">Contraseña válida</div>
                    </div>
                    <button className="btn btn-primary btn-lg w-100 text-form">Registrarte</button>
                    <span class="text-form fs-6">¿Ya tienes cuenta? <a href="/login">Inicia sesión</a> </span>
                </form>
            </div>

            <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-end">

            </div>

        </div>
    </div>
    /* <script>
        const form = document.querySelector("form")

        form.addEventListener('submit', e => {
            if (!form.checkValidity()) {
                e.preventDefault()
            }

            form.classNameList.add('was-validated')
        })
    </script> */
    )
}

export default Register