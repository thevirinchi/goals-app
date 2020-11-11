import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const GoalItem = props => {
	return (
		<View key={props.data.item} style={styles.goals_item}>
			<Text>{props.data.item}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	goals_item:{
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 8,
		backgroundColor: "#efefef",
		marginVertical: 4
	}
})

export default GoalItem;