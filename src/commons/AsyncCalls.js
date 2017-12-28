import axios from 'axios'

export function getCharactersList(publicApiKey) {
    const url = '/characters?apiKey=' + publicApiKey
    axios.get(url).then((reponse) => {

        console.log("fetch response: ", response)

    }).catch((error) => {

        console.log("fetch error: ", error)

    });
}

export function getHousesList(){
    const fetchUrl ='/casas'
    return axios.get(fetchUrl)
    .then((response) => {
        console.log("axios get response: ", response);
        const list = response.data && response.data.records ? response.data.records : []
        return list
   })
   .catch((error) => {
        console.log("axios get error: ", error);
        return []
   });
}