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
        <div className="container w-80 bg-primary mt-3 mb-3 rounded shadow">
        <div className="row align-items-stretch">
            <div className="col rounded-start p-5" style={{backgroundColor: '#C6D0F2'}}>
                <div className="text-center mb-5">
                    <h3 className="page-title">Bienvenido a</h3>
                    <h1 className="page-title">Salud - OS</h1>
                    <h2 className="page-title">¡Te Saluda!</h2>
                </div>

                <form novalidate>
                    <div className="form-floating mb-3">
                        <input type="email" id="email" className="form-control" placeholder="Escriba su correo electrónico" required></input>
                        <label for="email" className="form-label text-form" style={{opacity: 0.5}}>Correo Electrónico</label>
                        <div className="invalid-feedback">Correo inválido</div>
                        <div className="valid-feedback">Correo válido</div>
                    </div>
                    <div className="form-floating mb-0">
                        <input type="password" id="email" className="form-control" placeholder="Escriba su contraseña" required></input>
                        <label for="email" className="form-label text-form" style={{opacity: 0.5}}>Contraseña</label>
                        <div className="invalid-feedback">Contraseña Inválida</div>
                        <div className="valid-feedback">Contraseña válida</div>
                    </div>
                    <div className="form-check form-check form-check-inline my-2">
                        <input type="checkbox" id="email" className="form-check-input"></input>
                        <label for="email" className="form-check-label text-form">Recuérdame</label>
                    </div>
                    <div className="my-3">
                        <span><a className="text-form" href="#">¿Olvidaste tu contraseña?</a></span>
                    </div>
                    <button className="btn btn-primary btn-lg w-100 mb-2 text-form">Iniciar Sesión</button>
                    <div className="my-1">
                        <span className="text-form">¿No tienes cuenta? <a href="#">Regístrate aquí</a> </span>
                    </div>
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

export default Login