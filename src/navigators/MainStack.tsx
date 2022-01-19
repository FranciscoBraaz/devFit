import {createStackNavigator} from '@react-navigation/stack';
import AppTab from '../screens/AppTab';
import Preload from '../screens/Preload';
import StarterPack from '../screens/StarterStack';
import React from 'react';

const {Navigator, Screen} = createStackNavigator();

export function MainStack() {
  return (
    <Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
      <Screen name="Preload" component={Preload} />
      <Screen name="StarterStack" component={StarterPack} />
      <Screen name="AppTab" component={AppTab} />
    </Navigator>
  );
}
