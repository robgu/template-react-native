import React, { Component } from 'react';
import { AsyncStorage, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Actions, Scene, TabBar } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import store from '../../store';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Router from './components/Router';

export default class Main extends Component {
  render = () => {
    return (
      <Provider store={store}>
          <Router sceneStyle={{ backgroundColor: '#FFFFFF' }} >
            <Scene key="root" >
              <Scene key="main" type="reset" tabs hideNavBar>
                <Scene key="page1" title="Page1" component={Page1} />
                <Scene key="page2" title="Page2" component={Page2} />
              </Scene>
              <Scene key="page3" hideNavBar={false} title="Page3" component={Page3} />
            </Scene>
          </Router>
      </Provider>
    );
  }
}
