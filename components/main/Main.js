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

export default class Main extends Component<{}> {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.heading}>
          {this.props.data.pageName}
        </Text>
        <Text style={styles.text}>
          {this.props.data.content}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    margin: 10,
    color: 'navy',
  },
  text: {
    fontSize: 14,
    margin: 10,
    color: 'navy',
  }
});
