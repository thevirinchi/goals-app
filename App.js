import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

	const [newGoal, setNewGoal] = useState("")
	const [goals, setGoals] = useState([])

	const goalChangeHandler = (text) => {
		setNewGoal(text)
	}

	const addGoalHandler = () => {
		if(newGoal.length>2){
			setGoals(currentGoals => [newGoal, ...currentGoals])
			setNewGoal("")
		}
	}

	return (
		<View style={styles.root}>
			<View style={styles.addGoals}>
				<TextInput placeholder="Enter a goal" style={styles.addGoals_Input} onChangeText={goalChangeHandler} value={newGoal}/>
				<Button title="ADD" style={styles.addGoals_Button} onPress={addGoalHandler}/>
			</View>
			<View style={styles.goals}>
				<View style={styles.heading_secondary_container}>
					<Text style={styles.heading_secondary}>Goals</Text>
				</View>
				<FlatList
					data={goals}
					renderItem={itemData=> (
						<View key={itemData.item} style={styles.goals_item}>
							<Text>{itemData.item}</Text>
						</View>
					)}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		paddingVertical: 40,
		paddingHorizontal: 32
	},
	heading_secondary_container:{
		paddingVertical: 10
	},
	heading_secondary:{
		fontSize: 16
	},
	addGoals: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%"
	},
	addGoals_Input: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		padding: 10,
		width: "80%"
	},
	addGoals_Button: {
		width: "20%"
	}, 
	goals: {
		paddingTop: 20,
		flexDirection: "column",
		width: "100%"
	},
	goals_item:{
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 8,
		backgroundColor: "#efefef",
		marginVertical: 4
	}
});
