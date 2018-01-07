import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import * as CharactersActions from 'Marvel/src/redux/actions/Characters'
import View from './View'

const mapStateToProps = (state) => {
    return{
        list:       state.characters.list,
        selected:   state.characters.item,
        isFetching: state.characters.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        },

        updateSelectedCharacters: (character) => {
            dispatch(CharactersActions.updateCharacterSelected(character))
            Actions.CharacterDetail({ title: character.name })
        },

    }
}

export default connect (mapStateToProps,mapDispatchToProps)(View)
