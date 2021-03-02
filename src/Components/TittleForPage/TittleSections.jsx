import React from 'react';
import {Link} from 'react-router-dom';
import './TittleSections.scss';

function TittleSections({tittle,componentFather}) {
    return (
        <>            
            <div className="tittle-Patient d-flex justify-content-end mt-3">
                    <div className="tittle-name mr-auto">
                        <h2>{tittle}</h2>
                    </div>

                    <div className={componentFather !== 'SectionPatient' ? 'hidden': 'btn-patient'}>
                        <Link
                            to="/Ingreso"
                            className="mr-5"
                        >
                            <button type="button" className="btn">Ingreso de Paciente</button>
                        </Link>
                    </div>
                    <div className="inner">&nbsp;</div>
            </div>
            
        </>
    )
}

export default TittleSections
