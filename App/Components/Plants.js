import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser';


export default function Plants(props) {
  const [result, setResult] = useState(null);
  let content
  const _handlePressButtonAsync = async (link) => {
    let result = await WebBrowser.openBrowserAsync(link);
    setResult(result);
  };

  const renderPlant = ({index, item}) => {
    return(
      <TouchableOpacity style={styles.container} onPress={() => {_handlePressButtonAsync(item.image_url)}}>
        <Text style={styles.nameHeader}>{item.common_name}</Text>
        <Text>Scientific Name: <Text style={{fontWeight: 'bold'}}>{item.scientific_name}</Text></Text>
        <Text>This plant comes from the <Text style={{fontStyle: 'italic'}}>{item.family}</Text> family and the <Text style={{fontStyle: 'italic'}}>{item.genus}</Text> genus</Text>
      </TouchableOpacity>
    );
  }
  //Conditional Rendering
  if (props.status){
    console.log("Loading in Prog")
    content = (
      <ActivityIndicator 
      size="large"/>
    )
  } else {
    console.log("Loading in Done")
    content = (
    <View style={styles.flatlist}>
      <FlatList
        data={props.plants}
        refreshing={props.status}
        onRefresh={async () => {props.refresh(); console.log("I was triggered")}}
        renderItem={renderPlant}
        keyExtractor={(item,index) => {
          return item + index.toString()
        }}
      />
    </View>
  )
  }
  return content
  
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
