import React, { Component } from 'react'
import { View, FlatList, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { fetchCharacters } from '../../webServices/WebServices';
import CharacterCell from 'Marvel/src/sections/characters/CharacterCell';
import * as Constants from 'Marvel/src/webServices/Constants'

/** REDUX **/
import { connect } from 'react-redux'
import * as CharactersActions from 'Marvel/src/redux/actions/characters'

class CharactersList extends Component {

    constructor(props){
        super(props)
        this.state = {
            selected: null,
        }
    }

    componentWillMount(){
        this.props.fetchCharactersList()
    }

    onSelect(character) {
        this.setState({ selected: character })
        console.log("selected: ", this.state.selected)
    }

    renderCell(item){
        return (
            <CharacterCell
                item={ item }
                onSelect={ (character) => this.onSelect(character) }
            />
        )
    }

    render() {
        return (
            <View style={ styles.container }>
                <FlatList
                    data={ this.props.list }
                    renderItem={ ({ item, index }) => this.renderCell(item, index) }
                    keyExtractor={ (item, index) => item.id }
                    extraData={ this.state }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.characters.list
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        },
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(CharactersList)

const styles = StyleSheet.create({

    container: {
        flex: 1
    }
})
