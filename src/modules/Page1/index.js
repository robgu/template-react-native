import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import * as actions from './state';

@connect(
  (state)=> state.page1,
  actions
)
export default class Page1 extends Component {

  onChangeA = (value) => {
    this.props.setState({ a: value });
  }

  onChangeB = (value) => {
    this.props.setState({ b: value });
  }

  onSubmit = () => {
    this.props.calc();
  }

  render = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.calc}>
          <TextInput
            style={{flex: 1, borderWidth: 1 }}
            value={`${this.props.a}`}
            onChangeText={this.onChangeA}
            onSubmitEditing={this.onSubmit}
          />
          <Text style={{flex: 1}}>+</Text>
          <TextInput
            style={{flex: 1, borderWidth: 1 }}
            value={`${this.props.b}`}
            onChangeText={this.onChangeB}
            onSubmitEditing={this.onSubmit}
          />
          <Text style={{flex: 1}}>={this.props.result}</Text>
        </View>
        <TouchableHighlight onPress={Actions.page3} >
          <Text>跳到 Page 3</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calc: {
    flexDirection: 'row',
  }
})
