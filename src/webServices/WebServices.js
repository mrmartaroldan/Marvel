import axios from 'axios'
import * as Constants from './Constants'

export function configure() {
    axios.defaults.baseURL = Constants.BASE_URL_MARVEL;
    axios.defaults.headers.post['Content-type'] = 'application/json';
    axios.defaults.headers.common['Referer'] = 'marmotix.com';
    
}

export function fetchCharacters() {
    const url = '/characters?apikey=' + Constants.MARVEL_PUBLIC_KEY
    return new Promise(function(resolve, reject) {

        axios.get(url).then( response => {
            if(response.data)
                resolve( response.data)
            else
                reject( response )

        }).catch( error => {
            reject( error )
        });
    })
}


export function fetchAlter(url) {
    return axios.get(url).then((response) => {
        
        return response.data

    }).catch( error => {

        if(error.response) {
            throw { code: error.response.status, msg: error.response.data, error: error}
        } else {
            throw { code: 500, msg: error.message, error: error}
        }
    });
}

export function post(url,data) {
    return new Promise(function(resolve, reject) {

        axios.post(url, data).then( response => {
            if(response.data)
                resolve( response.data)
            else
                reject( response )

        }).catch( error => {
            reject( error )
        });
    })
}

export function postAlternativo(url, data){
    return axios.post(url,data).then( response => {
        return response.data
    }).catch( error => {
        if(error.response) {
            throw { code: error.response.status, msg: error.response.data, error: error}
        } else {
            throw { code: 500, msg: error.message, error: error}
        }
    })
}