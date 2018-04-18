/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import GirisEkrani from './src/screens/GirisEkrani';

export default class App extends Component<Props> {
  render() {
    return <GirisEkrani/>
  }
}

