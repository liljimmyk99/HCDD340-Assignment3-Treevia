import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser';

export default function Plants(props) {

  const renderPlant = ({index, item}) => {
    return(
      <View style={styles.container}>
        <Text style={styles.nameHeader}>{item.common_name}</Text>
        <Text>Scientific Name: <Text style={{fontWeight: 'bold'}}>{item.scientific_name}</Text></Text>
        <Text>This plant comes from the <Text style={{fontStyle: 'italic'}}>{item.family}</Text> family and the <Text style={{fontStyle: 'italic'}}>{item.genus}</Text> genus</Text>
      </View>
    );
  }

  return (
    <View style={styles.flatlist}>
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
  flatlist: {
    flex: 1,
    width: "100%"
  },
  container: {
    height: 80,
    width: '100%',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },
  nameHeader: {
    fontWeight: 'bold',
    fontSize: 20
    
  }
});
