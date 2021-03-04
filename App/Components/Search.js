import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { Metrics, Colors } from '../Themes'
import { SearchBar } from 'react-native-elements'

export default function Search(props) {
	const [text, setText] = useState("");

	useEffect(() => {
		console.log(text)
	}, [text])

	return (
		<View style={styles.container}>
			<TextInput placeholder="Type Here...." onChangeText={text => setText(text)} value={text} onSubmitEditing={async () => {props.search(text); console.log("I was clicked")}}/>
			{/* user input and a search button */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderWidth: 1,
		borderColor: Colors.bloodOrange
	}
});
