/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import data from './data/data';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }
  }

  activatePage(index) {
    this.setState({
      activePage: index
    })
  }

  renderNav() {
      const nav = data.pages.map((item, index) => (
        <Button
          key={index}
          onPress={this.activatePage.bind(this, index)}
          title={item.pageName}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
        ));
        return nav;
  }

  render() {
    const pageData = data.pages[this.state.activePage];
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.nav}>
          {this.renderNav()}
        </View>
        <Main data={pageData} />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});
