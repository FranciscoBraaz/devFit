import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StarterIntro from '../screens/StarterIntro';

const {Navigator, Screen} = createStackNavigator();

export function StarterStack() {
  return (
    <Navigator
      initialRouteName="StarterIntro"
      screenOptions={{headerShown: false}}>
      <Screen name="StarterStack" component={StarterIntro} />
    </Navigator>
  );
}
