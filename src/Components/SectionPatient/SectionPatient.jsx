import React, {useState, useEffect} from 'react';
import Patient from './Patient';
import Pagination from './Pagination';
import {getData} from '../../Helpers/getData';
import {Link} from 'react-router-dom';
import './SectionPatient.scss';

function SectionPatient() {

    const [patients, setPatients] = useState([]);
    const [patientsFilter, setPatientsFilter] = useState([]);

    useEffect( () => {

        getData()
            .then( data => setPatients(data))
            .catch(err => console.warn(err));

    }, [])

    //================SEARCH=========================
    const handleInputChange = async (e) => {

        if(e.target.value === ''){
            setPatientsFilter(patients);
        }
        else {
            const result = await patients.filter(patient => patient.name.toLowerCase().includes(e.target.value.toLocaleLowerCase()))
            setPatientsFilter(result);
        }
    }

    // ==============PAGINATE=================
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // filterSearch();
    const currentPosts = (patientsFilter.length === 0) ? patients.slice(indexOfFirstPost, indexOfLastPost): patientsFilter.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    // ==========================================

    return (
        <>
            <div className="body-container">
                <div className="SectionPatient d-flex flex-column ">

                    <div className="tittle-Patient d-flex justify-content-end mt-3">
                        <div className="tittle-name mr-auto">
                            <h2>Listado de Pacientes</h2>
                        </div>
                        <div className="btn-patient">
                            <Link
                                to="/Ingreso"
                                className="mr-5"
                            >
                                <button type="button" className="btn">Ingreso de Paciente</button>
                            </Link>
                            
                        </div>
                        <div className="inner">&nbsp;</div>
                    </div>

                    {/* crear otro componente */}
                    <div className="SearchPatient d-flex mt-3">
                        <div className="input-icons ml-auto ">
                            
                            <i className="fas fa-search icon"></i>

                            <input 
                                type="text"
                                className="input-field"
                                placeholder="Buscador.."
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="container body-patient mt-2 d-flex flex-wrap align-content-start">

                        <Patient
                            posts = {currentPosts}
                        />

                        <Pagination 
                            postsPerPage={postsPerPage}
                            totalPosts={patients.length}
                            paginate={paginate}
                        />

                    </div>

                </div>
            </div>
        </>
    )
}

export default SectionPatient
