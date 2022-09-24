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
        <div class="container w-80 bg-primary mt-4 mb-3 rounded shadow">
        <div class="row align-items-stretch">
            <div class="col rounded-start p-5 pt-3 pb-3" style="background-color: #C6D0F2;">
                <div class="text-center mb-4">
                    <h3 class="page-title">Bienvenido a</h3>
                    <h1 class="page-title">Salud - OS</h1>
                    <h2 class="page-title">¡Te Saluda!</h2>
                </div>
                <form novalidate>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-floating mb-1">
                                    <input type="text" id="name" class="form-control" name="firstname" placeholder="Escriba su nombre(s)" required> </input>
                                    <label for="email" class="form-label text-form" style="opacity: 0.5">Nombre(s)</label>
                                    <div class="invalid-feedback">Campo vacío</div>
                                    <div class="valid-feedback">Válido</div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-floating mb-2">
                                    <input type="text" id="name" class="form-control" name="lastname" placeholder="Escriba su apellido parterno" required> </input>
                                    <label for="email" class="form-label text-form" style="opacity: 0.5">Apellido Paterno</label>
                                    <div class="invalid-feedback">Campo vacío</div>
                                    <div class="valid-feedback">Válido</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-floating mb-3">
                                    <input type="text" id="name" class="form-control" name="lastname" placeholder="Escriba su apellido materno" required> </input>
                                    <label for="email" class="form-label text-form" style="opacity: 0.5">Apellido Materno</label>
                                    <div class="invalid-feedback">Campo vacío</div>
                                    <div class="valid-feedback">Válido</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="email" id="email" class="form-control" placeholder="Escriba su correo electrónico" required> </input>
                        <label for="email" class="form-label text-form" style="opacity: 0.5">Correo Electrónico</label>
                        <div class="invalid-feedback">Correo inválido</div>
                        <div class="valid-feedback">Correo válido</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" id="name" class="form-control" name="firstname" placeholder="Escriba su cédula profesional" required> </input>
                        <label for="email" class="form-label text-form" style="opacity: 0.5">Cédula Profesional</label>
                        <div class="invalid-feedback">Campo vacío</div>
                        <div class="valid-feedback">Válido</div>
                    </div>
                    <div class="form-floating">
                        <input type="password" id="email" class="form-control" placeholder="Escriba su contraseña" required> </input>
                        <label for="email" class="form-label text-form" style="opacity: 0.5">Contraseña</label>
                        <div class="invalid-feedback">Contraseña Inválida</div>
                        <div class="valid-feedback">Contraseña válida</div>
                    </div>
                    <div class="col-auto mb-1">
                        <span id="passwordHelpInLine" class="form-text">Debe ser entre 8-20 caracteres.</span>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" id="email" class="form-control" placeholder="Escriba nuevamente su contraseña" required> </input>
                        <label for="email" class="form-label text-form" style="opacity: 0.5">Confirmar Contraseña</label>
                        <div class="invalid-feedback">Contraseña Inválida</div>
                        <div class="valid-feedback">Contraseña válida</div>
                    </div>
                    <button class="btn btn-primary btn-lg w-100 text-form">Registrarte</button>
                </form>
                
            </div>

            <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-end">

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