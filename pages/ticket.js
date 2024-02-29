import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default Ticket = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Issue Ticket</Text>
            <View style={styles.box}>
                <Text>Ticket</Text>
                <View style={styles.details}>
                    <Text style={styles.label}>Violation Type</Text>
                    <Text> : </Text>
                    <Text style={styles.value}>Speeding</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
    },
    box: {
        backgroundColor: "white",
        borderRadius: 20,
        height: "50%",
        width: "90%",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 30,
    },
    details: {
        flexDirection: "row",
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        width: 100,
    },
    value: {
        flex: 1,
    },
});