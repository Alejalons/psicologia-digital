import React, {useState} from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className= 'Navbar-left d-flex col-lg-2 bg-light'>
                <div className="container d-flex container-items flex-column align-items-start col-lg-12">

                    <div className="mt-3 w logo row ">
                        <div className="col-2 mr-3">
                            <i className={click ? 'fas fa-compress-alt': 'fas fa-expand-alt'} onClick={handleClick}></i>
                        </div>
                        <div className=" text-center">
                            <img src="./images/LogoEliz.png" alt=""/>
                        </div>
                    </div>

                    <div className="mt-3 w btn-add ">
                        <Link
                            to="/Crear"
                            className="navbar-new"
                        >
                            <p className="text-btn text-left mt-2 mb-2 ml-4">Ingreso <br/> de Paciente</p><i className="fas fa-plus-circle mt-3"></i>
                        </Link>
                    </div>

                    <div className="mt-3 w nav-items">
                        <div className="link w row">
                            <div className="icon-1 text-center">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="name">
                                <Link
                                    to="/"
                                    className="nav-link"
                                >
                                    Inicio
                                </Link>
                            </div>
                            <div className="icon-1 text-center">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                            
                        </div>
                        <div className="link w row">
                            <div className="icon-1 text-center">
                                <i class="fas fa-user-friends"></i>
                            </div>
                            <div className="name">
                                <Link
                                    to="/Paciente"
                                    className="nav-link"
                                >
                                    Paciente
                                </Link>
                            </div>
                            <div className="icon-1 text-center">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div className="link w row">
                            <div className="icon-1 text-center">
                                <i class="fas fa-user-friends"></i>
                            </div>
                            <div className="name">
                                <Link
                                    to="/Otros"
                                    className="nav-link"
                                >
                                    Otros
                                </Link>
                            </div>
                            <div className="icon-1 text-center">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="user-people  w  mt-auto mb-3">
                        <div className="people mt-2 mr-3">
                            <img src="./images/people.jpg" alt=""/>
                        </div>
                        <div className="description mt-2 ">
                            <p className="name text-justify">Caskantr <br/> Psicóloga</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Navbar
