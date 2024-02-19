import React, { useState} from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default SignIn = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleLogin = () => {
        console.log('Signed In...');
    };

    const changePage = () => {
        console.log('Changing Page...');
    }

    return (
        <View style={styles.container}>

            <Text
            style={styles.heading}>SIGN IN</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
            />

            <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Select your role" value="" />
                <Picker.Item label="Traffic Sargent" value="TrafficSargent" />
                <Picker.Item label="Traffic Inspector" value="TrafficInspector" />
                <Picker.Item label="Member of Traffic Central Team" value="CentralTeam" />
                <Picker.Item label="Member of Medical Emergency Team" value="MedicalTeam" />
            </Picker>

            <Text
            onPress={handleLogin} 
            style={styles.button}>SIGN IN</Text>

            <Text
            style={styles.login}
            onPress={() => navigation.navigate('Login')}>Already Have an Account? Log In</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 30,
    },
    picker: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 15,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        margin: 10,
        borderRadius: 15,
    },
    button: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'lightgreen',
        margin: 10,
    },
    login: {
        color: 'blue',
        width: '90%',
        fontWeight: 'bold',
        textAlign: 'right',
    }
});