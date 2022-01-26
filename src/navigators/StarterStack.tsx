import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StarterIntro from '../screens/StarterIntro';
import {StarterName} from '../screens/StarterName';

const {Navigator, Screen} = createStackNavigator();

export function StarterStack() {
  return (
    <Navigator initialRouteName="StarterIntro">
      <Screen
        name="StarterIntro"
        component={StarterIntro}
        options={{headerShown: false}}
      />
      <Screen name="StarterName" component={StarterName} />
    </Navigator>
  );
}
