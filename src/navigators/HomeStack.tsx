import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../screens/Home';
import {HomeConfig} from '../screens/HomeConfig';

const {Navigator, Screen} = createStackNavigator();

export function HomeStack() {
  return (
    <Navigator screenOptions={{cardStyle: {backgroundColor: '#fff'}}}>
      <Screen name="Home" component={Home} />
      <Screen name="HomeConfig" component={HomeConfig} />
    </Navigator>
  );
}
