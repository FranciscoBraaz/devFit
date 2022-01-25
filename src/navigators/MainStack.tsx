import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import React from 'react';
import {StarterStack} from './StarterStack';

const {Navigator, Screen} = createStackNavigator();

export function MainStack() {
  return (
    <Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
      <Screen name="Preload" component={Preload} />
      <Screen name="StarterStack" component={StarterStack} />
      {/* <Screen name="AppTab" component={AppTab} /> */}
    </Navigator>
  );
}
