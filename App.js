import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

import Heading from "./components/Heading"
import GoalItem from "./components/GoalItem"

export default function App() {

	const [newGoal, setNewGoal] = useState("")
	const [goals, setGoals] = useState([])

	useEffect (()=>{
		console.log(goals)
	}, [goals])

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
				<Heading text="Goals"/>
				<FlatList
					data={goals}
					renderItem={itemData=> (
						<GoalItem data={itemData} key={itemData}/>
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
});
