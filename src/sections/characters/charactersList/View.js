import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator} from 'react-native';
import CharacterCell from 'Marvel/src/sections/characters/CharacterCell';
import Styles from './Styles' 

export default class view extends Component {

    componentWillMount(){
        this.props.fetchCharactersList()
    }

    onSelect(character) {
        this.props.updateSelectedCharacters(character)
    }

    renderFooter() {
        return <ActivityIndicator
                        size="large"
                        color="blue"
                        animating={ this.props.isFetching }
                        style={ { marginVertical: 20} }
                        
            />
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
            <View style={ Styles.container }>
                <FlatList
                    data={ this.props.list }
                    ListFooterComponent={ () => this.renderFooter() }
                    renderItem={ ({ item, index }) => this.renderCell(item, index) }
                    keyExtractor={ (item, index) => item.id }
                    extraData={ this.state }
                />
            </View>
        )
    }
}