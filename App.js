import React, { Component } from 'react'
import {AppRegistry, View, Text} from 'react-native'
import Photos from './app/components/Photos/Photos'

export default class Photographs extends Component{
  render(){
    return(
      <View>
        <Photos/>
      </View>
    )
  }
}

AppRegistry.registerComponent('Photographs', () => Photographs)