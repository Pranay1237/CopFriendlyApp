import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { REGISTER_API } from "./urls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default SignIn = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const [name, setName] = useState('');

    const handleLogin = async () => {
        if (password !== repass) {
            alert('Passwords do not match');
            return;
        }
        try {
            console.log(REGISTER_API)
            console.log({
                name: name,
                email: username,
                password: password,
            })
            const res = await axios.post(REGISTER_API, {
                name: name,
                email: username,
                password: password,
            });
            if (res.status === 200) {
                alert('User Created');
                console.log(res.data);
                await AsyncStorage.setItem('user', JSON.stringify(res.data));
                // navigation.navigate('Login');
                if(res.data.role === 'CentralTeam') {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'TrafficTeam' }],
                    });
                } else if(res.data.role === '') {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MedicalTeam' }],
                    });
                } else {
                    navigation.reset({
                    index: 0,
                    routes: [{ name: 'experiment' }],
                    });
                }
                // navigation.reset({
                //     index: 0,
                //     routes: [{ name: 'Menu' }],
                // });
            }
        }
        catch (error) {
            console.log(error);
        }



        // console.log('Signed In...');

        // navigation.navigate('Menu');

        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Menu' }],
        // });
    };



    const changepage = () => {
        navigation.navigate('Login');

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <View style={styles.container}>
            <Text
                style={styles.heading}>SIGN IN</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={repass}
                onChangeText={setRepass}
            />
            {/* <Picker
                style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Select your role" value="" />
                <Picker.Item label="Traffic Sargent" value="TrafficSargent" />
                <Picker.Item label="Traffic Inspector" value="TrafficInspector" />
                <Picker.Item label="Member of Traffic Central Team" value="CentralTeam" />
                <Picker.Item label="Member of Medical Emergency Team" value="MedicalTeam" />
            </Picker> */}

            <Text
                onPress={handleLogin}
                style={styles.button}>SIGN IN</Text>

            <Text
                style={styles.login}
                onPress={changepage}>Already Have an Account? Log In</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 70,
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
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'right',
    }
});