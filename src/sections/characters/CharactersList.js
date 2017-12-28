import React, { Component } from 'react'
import { View, FlatList, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { AsyncCalls } from 'Marvel/src/commons'
import { fetch } from 'Marvel/src/webServices/WebServices'
import { fetchAlter, fetchHouses, fetchCharacters } from '../../webServices/WebServices';
import CharacterCell from 'Marvel/src/sections/characters/CharacterCell';
import * as Constants from 'Marvel/src/webServices/Constants'

export default class CharactersList extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [],
            selected: null,
        }
    }

    componentWillMount(){
        fetchCharacters().then( (response) => {
            this.setState({ list: response.data.results })
        }).catch( error => {
            console.log("error: ", error)
        })
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
                    data={ this.state.list }
                    renderItem={ ({ item, index }) => this.renderCell(item, index) }
                    keyExtractor={ (item, index) => item.id }
                    extraData={ this.state }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }
})
