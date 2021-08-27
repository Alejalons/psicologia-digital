import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import {InputData} from './FormData';
import {renderSwitch} from '../../../Helpers/getTypeInput';
import PatientContext from '../../../Context/Patient/PatientContext';

function Form({handleOnchange,handleSubmit, whereIs}) {
    
    //context de paciente state
    const _patientContext = useContext(PatientContext);
    const {errorForm, mostrarHolaMundo} = _patientContext;
    //==

    const isValid = (nameInput) => {
        try {
            const result = whereIs[0].find( element => element  === nameInput );
            if(result === undefined){
                return false;
            }else{
                return true;
            }
        } catch (error) {
            console.warn(error)
        }
    };

    return (
        <>
            <form className="g-3 row col-md-12 form-patient" onSubmit={handleSubmit}>
                <div className="btn-submit col-md-12 mb-2 d-flex justify-content-end">
                    <div>
                        <button
                            type="button"
                            className="cancel-patient btn btn-light mr-2"
                            onClick={mostrarHolaMundo}
                        >test</button>  

                        <button
                            type="button"
                            className="cancel-patient btn btn-light mr-2"
                        >Cancelar</button>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary submit-patient"
                        >Agregar Paciente</button>
                    </div>
                </div>
                {
                    InputData.map((item, key) => {
                        return (
                            <div className={item.classnameBox} key={key}>
                                {
                                    item.boxone.map((dat, index) => {
                                        return (
                                            <div 
                                                className={dat.classNameDiv}
                                                key={index}
                                            > 
                                                <label
                                                    htmlFor={dat.htmlforLabel}
                                                    className={dat.classNameLabel}
                                                >{dat.nameLabel}:</label>
                                                
                                                {renderSwitch(dat.typeInputTag, dat,handleOnchange, isValid)}
                                                
                                                {
                                                    isValid(dat.nameInput) && <p className="text-danger">Debe Ingresar {dat.nameLabel}</p>
                                                }
                                                
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </form>
        </>
    )
}
Form.prototype = {
    handleOnchange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    // whereIs: PropTypes.useState.isRequired
}
export default Form;
