import React from 'react';
import { StyleSheet } from 'react-native';
import {Navigation} from 'react-native-navigation';

import registerScreens from './app/mobile/views/index';

export default class App {

    constructor(){
        registerScreens();
        this.startApp();
    }

    startApp() {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'app.Login'
            }
        });

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
