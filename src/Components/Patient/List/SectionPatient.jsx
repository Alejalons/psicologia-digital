import React, {useState, useEffect} from 'react';
import Patient from './Patient';
import Pagination from './Pagination';
import TittleSections from '../../TittleForPage/TittleSections';
import './SectionPatient.scss';
import {useFetchPatient} from "../../../Hooks/useFetchPatient";
import Loanding from '../../Loanding/Loanding';

function SectionPatient() {
    
    const {data:patients, loanding} = useFetchPatient();
    const [patientsFilter, setPatientsFilter] = useState([]);
    

    //================SEARCH=========================
    // FUNCION PARA BUSCAR PACIENTE POR NOMBRE 
    const handleInputChange = async (e) => {

        if(e.target.value === ''){
            setPatientsFilter(patients);
        }
        else {
            const result = await patients.filter(patient => patient.name.toLowerCase().includes(e.target.value.toLocaleLowerCase()))
            setPatientsFilter(result);
        }
    }

    // ==============PAGINATE===================
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

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
                    
                    <TittleSections
                        tittle="Listado de Pacientes"
                        componentFather="SectionPatient"
                    />

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

                    <div className="container body-patient mt-2 d-flex flex-wrap justify-content-center no-gutters">

                        {
                            loanding && <Loanding />
                        }
                        
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
