import * as types from '../types/characters'
import { fetchCharacters } from 'Marvel/src/webServices/WebServices';

function updateCharactersList(value){
    return{
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
}

//Carga del WS el listado
export function fetchCharactersList() {
    return (dispatch, getState) => {
        fetchCharacters().then( (response) => {
            const list = response.data.results 
            dispatch(updateCharactersList(list))
        }).catch( error => {
            console.log("error: ", error)
        })
    }
}