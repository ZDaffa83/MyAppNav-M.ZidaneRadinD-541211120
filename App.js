import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';

import Login from './components/Login';
import Portofolio from './components/Porto';
import Register from './components/Register';

const Stack = createStackNavigator();

function CustomHeaderBackButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('./assets/icon/back.png')} style={{ width: 24, height: 24, marginLeft: 10 }} />
    </TouchableOpacity>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name='Sign Up'
          component={Register}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name='Home'
          component={Portofolio}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#3366CC',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 16,
            },
            headerLeft: () => 
            <CustomHeaderBackButton navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
