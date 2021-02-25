import React, {useState} from 'react'
import TittleSections from '../SectionTittle/TittleSections'
import Form from './Form'

function FormPatient() {
    
    return (
        <>
            <div className="body-container">
                <div className="col-12 d-flex flex-column mb-5">
                    <TittleSections 
                        tittle="Ingreso de Nuevo Paciente"
                        componentFather="FormPatent"
                    />
                    
                    <div className="block-form bg-light mt-5 border border-1 rounded">
                        <Form />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default FormPatient
