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

export default class Footer extends Component<{}> {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.heading}>
          Footer
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#666666',
    height: 50,
  },
  heading: {
    fontSize: 20,
    margin: 10,
    color: 'white',
  }
});
