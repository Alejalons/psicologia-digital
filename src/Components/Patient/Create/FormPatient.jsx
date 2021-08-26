import React, {useState} from 'react';
import Error from '../../Error/Error';
import TittleSections from '../../TittleForPage/TittleSections';
import Form from './Form';

function FormPatient() {

    const [error, setError] = useState({
        exists: false,
        msj: ''
    });
    const [whereIs, setWhereIs] = useState([]);
    
    //modelo de los pacientes
    const [patientClass, setPatientClass] = useState({
        name: '',
        age: '',
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


        const item = [];
        //patientClass por cada atributos
        for(const property in patientClass)
        {
            if (patientClass[property] === '') {

                //indica en que campos(nombre o la edad) hay errores
                //recopila todo y lo garda en whereIs mandandolo a form
                item.push(property);

                setError({
                    exists: true,
                    msj: '- Todos los campos Son Obligatorio'
                })
            }
            else if(item.length === 0) //si no existe campos donde hay errores
            {
                setError({
                    exists: false,
                    msj: ''
                })
            }

        }
        setWhereIs([item]);

        console.log(item.length);
    }
    return (
        <>
            <div className="body-container">
                <div className="col-12 d-flex flex-column mb-5">
                    <TittleSections 
                        tittle="Ingreso de Nuevo Paciente"
                        componentFather="FormPatent"
                    />
                    
                    <div className="block-form bg-light mt-5 border border-1 rounded">
                        <Form
                            handleOnchange = {handleOnchange}
                            handleSubmit = {handleSubmit}
                            whereIs = {whereIs}
                        />
                    </div>

                </div>
                {error.exists && <Error message= {error.msj}/>}

            </div>
            
        </>
    )
}

export default FormPatient
