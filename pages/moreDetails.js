import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default MoreDetails = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.heading}>Information about the violator</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
});