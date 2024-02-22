// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import SignIn from './pages/signIn';
import Menu from './pages/menu';
import RegisterViolator from './pages/registerViolator';
import Ticket from './pages/ticket';
import Payment from './pages/payment';
import Emergency from './pages/emergency';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="RegisterViolator" component={RegisterViolator} />
        <Stack.Screen name="Ticket" component={Ticket} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Emergency" component={Emergency} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
