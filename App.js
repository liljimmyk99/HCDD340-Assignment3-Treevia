import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import Plants from './App/Components/Plants'
import Search from './App/Components/Search'

export default function App() {

  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);
 

  // retrieve lists of plants
  const loadPlants = async (plantSearch = '', plantFilter = '') => {
    setLoading(true);
    setPlants([]);
    let results = [];
    // if there is no search term, then get list of plants
    if (plantSearch !== '') {
      results = await APIRequest.requestSearchPlants(plantSearch);
    } else {
      results = await APIRequest.requestPlantList(plantFilter);
    }
    console.log(results);
    setLoading(false);
    setPlants(results);
  }

  useEffect(() => { loadPlants() }, []);


  return (
    <SafeAreaView style={styles.container}>

      {/* First, the logo */}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.logo}/>
      </View>

      {/* Then the search bar */}
      <Search style={styles.searchBar} search={loadPlants} ></Search>
      {/* And some plants */}
      <Plants style={styles.plantList} plants={plants}></Plants>

      {/* You can style and organize these however you want */}

      {/* Also, checkout the "./App/Config/APIRequest.js", if you want custom API calls or use test data*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  logoContainer: {

    borderWidth: 1,
    borderColor: Colors.bloodOrange

  },
  logo: {
    width: Metrics.screenWidth * 0.5,
    height: Metrics.screenWidth * 0.25,
    resizeMode: 'contain'
  },
  searchBar: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  plantList: {
    flex: 3,
    borderWidth: 2
  }
});
