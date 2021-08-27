import React from 'react';
import './Patient.scss';
import PropTypes from 'prop-types'

//Componente de listado de Cajas con informacion inicial de un paciente
function Patient( {posts}) {

    return (
        <>
            {
                posts.map(post => (
                    <div className="patient d-flex flex-column  mr-3 mb-2 reset-padding col-md-5 col-lg-3 border" key={post.id}>
                        <div className="cajaOne bg-light w-100 border-bottom">
                            <div className="px-2 py-2">{post.name}</div>
                        </div>
                        
                        <div className="info d-flex flex-row">
                            <div className="w-50 border-right bg-light">
                                info <br/>                              
                            </div>
                            <div className="w-50 border-right bg-light">
                                caja 2
                            </div>
                        </div>

                        <div className="details bg-light option-item d-flex justify-content-around border-top ">
                            <div>
                                <i className="fas fa-file-download text-secondary"></i>
                            </div>
                            <div>
                                <i className="fas fa-info-circle text-secondary"></i>
                            </div>
                            <div>
                                <i className="fas fa-ellipsis-v text-secondary"></i>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

Patient.prototype = {
    posts: PropTypes.array.isRequired
}

export default Patient;
