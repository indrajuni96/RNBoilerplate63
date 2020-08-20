import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Example } from '../screens'

const ExampleStack = createStackNavigator();

const ExampleStackScreen = () => {
  return (
    <ExampleStack.Navigator>
      <ExampleStack.Screen name="Example" component={Example} />
    </ExampleStack.Navigator>
  )
}

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <ExampleStackScreen />
    </NavigationContainer>
  )
}

export default RootStackScreen