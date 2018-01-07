/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,FlatList,View, StatusBar } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import * as WebServices from 'Marvel/src/webServices/WebServices'
import { Colors } from 'Marvel/src/commons'


/*** COMPONENTS */
import CharactersList from 'Marvel/src/sections/characters/charactersList/Container'
import CharacterDetail from 'Marvel/src/sections/characters/characterDetail/Container'
/***********/

/*** REDUX ***/
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './redux/reducers'
const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
/**********/

export default class App extends Component {

  componentWillMount() {
    WebServices.configure()
    StatusBar.setBarStyle('light-content')
  }


  render() {
    return (
        <Provider store={ store }>
          <Router>
            <Scene key="root">
              <Scene
                key={ 'CharactersList' }
                component={ CharactersList }
                hideNavBar
              />

            <Scene
              key={ 'CharacterDetail' }
              component={ CharacterDetail }
              navigationBarStyle={styles.navBar}
              navBarButtonColor={Colors.blue}
            />

            </Scene>

            
          </Router>
        </Provider>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },

  navBar: {
    backgroundColor: Colors.red
  }
});
