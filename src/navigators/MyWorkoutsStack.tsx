import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MyWorkouts} from '../screens/MyWorkouts';

const {Navigator, Screen} = createStackNavigator();

export default function MyWorkoutsStack() {
  return (
    <Navigator screenOptions={{cardStyle: {backgroundColor: '#fff'}}}>
      <Screen
        name="MyWorkouts"
        component={MyWorkouts}
        options={{title: 'Meus treinos'}}
      />
    </Navigator>
  );
}
