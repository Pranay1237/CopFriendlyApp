import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in...');
  };

  const changepage = () => {
    console.log('Changing Page...');
  }

  return (
    <View style={styles.container}>
      
      <Text
      style={styles.heading}>LOGIN</Text>

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

      <Text
      style={styles.button}
      onPress={handleLogin}>LOGIN</Text>

      <Text 
      style={styles.signin}
      onPress={() => navigation.navigate('Signin')}>Don't Have an Account? Sign in</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 30,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    margin: 10,
  },
  button: {
    width: '90%',
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    padding: 10,
    color: 'white',
  },
  signin: {
    color: 'blue',
    width: '90%',
    fontWeight: 'bold',
    textAlign: 'right',
  }
});
