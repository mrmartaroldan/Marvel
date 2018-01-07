import React, { Component } from 'react';
import { View, Image, Text} from 'react-native';
import Styles from './Styles' 

export default class view extends Component {

    onSelect(character) {

    }

    renderFooter() {
    }

    render() {
        const item = this.props.character
        const image = item.thumbnail ? { uri: item.thumbnail.path + '/landscape_medium.' + item.thumbnail.extension } : null
        console.log("image", image)
        console.log("this.props.character", this.props.character)
        return (
            <View style={ Styles.container }>
                <Image 
                    source={image}
                    resizeMode={'cover'}
                    style={Styles.image}
                />
            </View>
        )
    }
}