import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import * as CharactersActions from 'Marvel/src/redux/actions/Characters'
import View from './View'

const mapStateToProps = (state) => {
    return{
        character : state.characters.item
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect (mapStateToProps,mapDispatchToProps)(View)