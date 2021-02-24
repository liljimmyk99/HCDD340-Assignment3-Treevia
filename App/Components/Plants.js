import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser';

export default function Plants(props) {

  return (
    <View >
      <FlatList
        data={props.plants}
        renderItem={renderPlant}
        keyExtractor={(item,index) => {
          return item + index.toString()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // create styles as necessary
});
