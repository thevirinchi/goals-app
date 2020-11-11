import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
	return (
		<TouchableOpacity onPress={props.onGoalPress.bind(this, props.data.item.id)}>
			<View key={toString(props.data.item.id)} style={styles.goals_item}>
				<Text>{props.data.item.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	goals_item: {
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 8,
		backgroundColor: "#efefef",
		marginVertical: 4
	}
})

export default GoalItem;