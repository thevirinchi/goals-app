import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ConfirmDialogue = props => {
	return (
		<Modal visible={props.mode} animationType={props.animation}>
			<View style={styles.container}>
				<Text style={styles.text}>{props.text}</Text>
				<View style={styles.buttons}>
					<View style={{ width: "40%" }}><Button title={props.successText} onPress={props.onSuccessHandler} /></View>
					<View style={{ width: "40%" }}><Button title={props.cancelText} onPress={props.onCancelHandler} /></View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" },
	text: { paddingVertical: 10, paddingHorizontal: 8 },
	buttons: { flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: "80%", }
})

export default ConfirmDialogue;