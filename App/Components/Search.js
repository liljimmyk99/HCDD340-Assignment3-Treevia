import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { Metrics, Colors } from '../Themes'
import { SearchBar } from 'react-native-elements'

export default function Search(props) {
	const [text, setText] = useState("");
	return (
		<View>
			<TextInput placeholder="Type Here...." onChangeText={text => setText(text)} value={text}/>
			{/* user input and a search button */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderWidth: 5,
		borderColor: Colors.bloodOrange
	}
});
