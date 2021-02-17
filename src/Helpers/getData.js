import axios from 'axios';

export const getData = async() => {
    const {data} = await axios.get(`https://rickandmortyapi.com/api/character`);
    const response  =  data.results;

    return response ;
}