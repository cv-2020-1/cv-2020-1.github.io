import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';
import React from 'react';
export default () => {
    return (
        <div className="jumbotron m-4 bg-gradient-orange">
            <h1 className="display-4">¡Bienvenido!</h1>
            <p className="lead">Este es el primer de muchos post que explican cada uno de los proyectos desarrollados a lo largo del semestre.</p>
            <hr className="my-4"></hr>
            <p>Toma asiento, ponte cómodo y disfruta :)</p>
            <a className="btn btn-lg btn-dark" href="https://github.com/cv-2020-1/cv-2020-1.github.io" role="button">Repositorio</a>
        </div>
    )
}