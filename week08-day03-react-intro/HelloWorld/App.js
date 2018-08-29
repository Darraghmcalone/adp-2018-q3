/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SectionList, Platform, StyleSheet, Text, View, ScrollView, Button, Dimensions, FlatList, ActivityIndicator } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = { data: ['Thing 1', 'Thing 2'] };
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <SectionList
          sections={[
            { title: "ADP", data: ["Bob", "Alice"] },
            { title: "WDP", data: ["Anne", "Mary", "Joe"] }
          ]}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
          keyExtractor={(item, index)=>index}
        />
      );
    }
  }
  componentDidMount() {
    let endpoint = 'https://api.github.com/users/octocat/repos';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if (this.state.data && this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }
}
var { height, width } = Dimensions.get('window');
console.log(height, width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: width / 2,
    height: height / 2,
  },
  box1: {
    backgroundColor: 'powderblue',
  },
  box2: {
    backgroundColor: 'skyblue',
  },
  box3: {
    backgroundColor: 'steelblue',
  },
  box4: {
    backgroundColor: 'midnightblue',
  },
});
