import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StarterIntro from '../screens/StarterIntro';
import {StarterName} from '../screens/StarterName';
import {StarterDays} from '../screens/StarterDays';
import {StarterLevel} from '../screens/StarterLevel';
import {StarterRecommendations} from '../screens/StarterRecommendations';

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
      <Screen name="StarterDays" component={StarterDays} />
      <Screen name="StarterLevel" component={StarterLevel} />
      <Screen
        name="StarterRecommendations"
        component={StarterRecommendations}
      />
    </Navigator>
  );
}
