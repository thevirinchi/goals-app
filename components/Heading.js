import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Heading = props => {
	switch (props.type) {
		case 1:
			return (
				<View style={styles.heading_secondary_container}>
					<Text style={styles.heading_secondary}>{props.text}</Text>
				</View>
			)
			break;
		case 2:
			return (
				<View style={styles.heading_tertiray_container}>
					<Text style={styles.heading_tertiray}>{props.text}</Text>
				</View>
			)
			break;
		default:
			return (
				<View style={styles.heading_primary_container}>
					<Text style={styles.heading_primary}>{props.text}</Text>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	heading_primary_container: { paddingVertical: 12 },
	heading_primary: { fontSize: 20 },
	heading_secondary_container: { paddingVertical: 10 },
	heading_secondary: { fontSize: 16 },
	heading_tertiary_container: { paddingVertical: 10 },
	heading_tertiray: { fontSize: 14 },
})

export default Heading;