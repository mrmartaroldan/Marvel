import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class characterCell extends Component {

    static defaultProps = {
         onSelect   : () => {},
         item       : {},
    }

    render () {

        const { item, onSelect } = this.props
        const image = item.thumbnail ? { uri: item.thumbnail.path + '/landscape_medium.' + item.thumbnail.extension } : null

        return (
            <View>
                <TouchableOpacity onPress={ () => onSelect( item ) }>
                    <Image 
                        source={image}
                        resizeMode={'cover'}
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>{ item.name }</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 200,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(254,000,000,0.2)',
    },

    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    age: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
    }


})