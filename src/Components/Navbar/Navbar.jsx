import React, {useState, useEffect} from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMovileMenu = () => setClick(false);

    const showNavbar = () => {
        if(window.innerWidth <= 960){
            setClick(false);
        }
    }
    useEffect( () => {
        showNavbar();
    }, []);
    window.addEventListener('resize', showNavbar);

    return (
        <>
            <div className={click ? 'expander l-navbar bg-light': "l-navbar bg-light"} id="navbar">
                <nav className="nav">
                    <div className="d-flex flex-column justify-content-between">
                        <div className="nav__brand">
                            <i 
                                className={click ? 'fas fa-expand-alt nav__toggle': 'fas fa-compress-alt nav__toggle'}
                                onClick={handleClick}
                            ></i>
                            <img src="./images/LogoEliz.png" className="nav__logo" alt=""/>
                        </div>

                        <div className="nav__list">
                            {SidebarData.map((item, index) => {
                                return (
                                    <Link to={item.path}
                                        className="Link-l"
                                        key={index}
                                        onClick={closeMovileMenu}
                                    >
                                        <div  className="nav__link row d-flex flex-row">
                                            <div className="icon-link">
                                                <i className={item.icon}/>
                                            </div>
                                            <div className="name-link">
                                                <p className="nav__name ">{item.title}</p>
                                            </div>
                                            <div className="icon-arrow text-right">
                                                <i className="fas fa-chevron-right text-right"></i>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                )
                            })}
                        </div>

                        <div className="user-people mt-auto  ">
                            <div className="people mt-2 mr-3">
                                <img src="./images/people.jpg" alt=""/>
                            </div>
                            <div className="description mt-2 ">
                                <p className="name">Caskantr <br/> Psicóloga</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
        </>
    )
}

export default Navbar
