import * as types from '../types/Characters'
import { fetchCharacters } from 'Marvel/src/webServices/WebServices';

function updateCharactersList(value){
    return{
        type: types.CHARACTERS_UPDATE_LIST,
        list: value
    }
}

function setCharacterFetching(value){
    return{
        type: types.CHARACTER_SET_FETCHING,
        list: value
    }
}

export function updateCharacterSelected(character) {
    return {
        type: types.UPDATE_CHARACTER_SELECTED,
        character
    }
}

export function fetchCharactersList() {
    return (dispatch, getState) => {

        dispatch(setCharacterFetching(true))
        fetchCharacters().then( (response) => {
            //Se desactiva el fetching cuando termine de cargar la lista
            dispatch(setCharacterFetching(false))

            const list = response.data.results 
            dispatch(updateCharactersList(list))
        }).catch( error => {
            dispatch(setCharacterFetching(false))
            console.log("error: ", error)
        })
    }
}

export function postCharacter() {
    return (dispatch, getState) => {
        fetchCharacters().then( (response) => {
            const list = response.data.results 
            dispatch(updateCharactersList(list))
        }).catch( error => {
            console.log("error: ", error)
        })
    }
}