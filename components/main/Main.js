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
      <View>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 20,
    margin: 10,
    color: 'navy',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    margin: 10,
    color: 'navy',
    lineHeight: 30,
  }
});
