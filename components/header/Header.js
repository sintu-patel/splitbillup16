/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component<{}> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.heading}>
          CMS | UP16
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#666666',
    height: 80,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    margin: 10,
    color: 'orange',
  }
});
