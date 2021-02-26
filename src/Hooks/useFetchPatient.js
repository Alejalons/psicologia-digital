import {useState, useEffect} from 'react';
import {getData} from '../Helpers/getData';


export const useFetchPatient = () => {
    const [patients, setPatients] = useState({
        data: [],
        loanding: true
    });

    useEffect( () => {

        getData()
            .then( patient => {
                // setTimeout(() => {

                    setPatients({
                        data: patient,
                        loanding: false
                    })

                // }, 3000)
            })
            .catch(err => console.warn(err));

    }, [])

    return patients;

};