import React from 'react';

// Importación de imágenes jpg, png y svg

// Importación de estilos
import './Login.css'

function Login(){
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
            <div class="col rounded-start p-5 pb-3" style="background-color: #C6D0F2;">
                <div class="text-center mb-5">
                    <h3 class="page-title">Bienvenido a</h3>
                    <h1 class="page-title">Salud - OS</h1>
                    <h2 class="page-title">¡Te Saluda!</h2>
                </div>

                <form novalidate>
                    <div class="form-floating mb-3">
                        <input type="email" id="email" class="form-control" placeholder="Escriba su correo electrónico" required> </input>
                        <label for="email" class="form-label text-form" style="opacity: 0.5">Correo Electrónico</label>
                        <div class="invalid-feedback">Correo inválido</div>
                        <div class="valid-feedback">Correo válido</div>
                    </div>
                    <div class="form-floating mb-0">
                        <input type="password" id="email" class="form-control" placeholder="Escriba su contraseña" required> </input>
                        <label for="email" class="form-label text-form" style="opacity: 0.5">Contraseña</label>
                        <div class="invalid-feedback">Contraseña Inválida</div>
                        <div class="valid-feedback">Contraseña válida</div>
                    </div>
                    <div class="form-check form-check form-check-inline my-2">
                        <input type="checkbox" id="email" class="form-check-input"> </input>
                        <label for="email" class="form-check-label text-form">Recuérdame</label>
                    </div>
                    <div class="my-3">
                        <span><a class="text-form" href="#">¿Olvidaste tu contraseña?</a></span>
                    </div>
                    <button class="btn btn-primary btn-lg w-100 mb-2 text-form">Iniciar Sesión</button>
                    <div class="my-1">
                        <span class="text-form">¿No tienes cuenta? <a href="#">Regístrate aquí</a> </span>
                    </div>
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

export default Login