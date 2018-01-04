import * as types from '../types/Characters'

const initialState = {
    isFetching: false,
    list: [],
    item: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case types.CHARACTERS_UPDATE_LIST:
            return {
                ...state,
                list: action.list
            };

        case types.UPDATE_CHARACTER_SELECTED:
            return {
                ...state,
                item: action.character
            };

        case types.CHARACTER_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value 
            }

        default:
            return state;
    }
}