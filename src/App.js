/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,FlatList,View, StatusBar } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import CharactersList from 'Marvel/src/sections/characters/CharactersList'
import * as WebServices from 'Marvel/src/webServices/WebServices'


export default class App extends Component {

  componentWillMount() {
    WebServices.configure()
    StatusBar.setBarStyle('light-content')
  }


  render() {
    return (

          <Router>
            <Scene key="root">
              <Scene
                key={ 'CharactersList' }
                component={ CharactersList }
              />
            </Scene>
          </Router>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
