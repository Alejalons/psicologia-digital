import React, {useState} from 'react'
import './Form.scss';
import {InputData} from './FormData';

function Form() {

    const [patientClass, setPatientClass] = useState({
        name: '',
        age: 0,
        birthday: '',
        selecGenger: '',
        scholarship: '',
        selectMaritalStatus: '',
        profession: '',
        address: '',
        Cellphone: '',
        phone: '',
        email: '',
        consul: '',
        interview: '',
        clinicHistory: '',
        family: '',
        diagnosis: '',
        FamilyNucleus: ''
    })
    
    const handleOnchange = (e) => {
        e.preventDefault();

        setPatientClass({
            ...patientClass,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    const renderSwitch = (param, item)  => {
        switch(param) {
            case 'input':
                return  <input 
                            type={item.typeInput}
                            name={item.nameInput}
                            className={item.classNameInput} 
                            id={item.idInput}
                            autoComplete="off"
                            onChange={handleOnchange}
                        />;
            case 'select':
                return  <select name={item.nameInput}
                                className={item.classNameInput} 
                                id={item.idInput}
                                onChange={handleOnchange}
                        >
                            {
                                item.option.map((i, k) => {
                                    return (
                                        <option
                                            value={i.value}
                                            key={k}
                                        >{i.description}</option>
                                    )
                                })
                            }
                        </select>
            case 'textarea':
                return  <textarea
                            name={item.nameInput}
                            type={item.typeInput}
                            className={item.classNameInput}
                            id={item.idInput}
                            onChange={handleOnchange}
                            autoComplete="off"
                            rows="3"
                        />
            default:
                return <p>¡No info!</p>;
        }
    }

    return (
        <>
            <form className="g-3 row col-md-12 form-patient" onSubmit={handleSubmit}>
                <div className="btn-submit col-md-12 mb-2 d-flex justify-content-end">
                    <div>
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
                                                >{dat.nameLabel}</label>
                                                
                                                {renderSwitch(dat.typeInputTag, dat)}
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

export default Form;
