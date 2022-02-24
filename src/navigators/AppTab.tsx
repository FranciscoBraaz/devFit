import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CustomTabBar} from '../components/CustomTabBar';
import WorkoutChecklist from '../screens/WorkoutChecklist';
import {WorkoutSelect} from '../screens/WorkoutSelect';
import {HomeStack} from './HomeStack';
import MyWorkoutsStack from './MyWorkoutsStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabs = [
  {
    type: 'regular',
    text: 'Início',
    icon: require('../assets/home.png'),
    route: 'HomeStack',
  },
  {
    type: 'big',
    icon: require('../assets/dumbbell.png'),
    route: 'WorkoutSelect',
  },
  {
    type: 'regular',
    text: 'Meus treinos',
    icon: require('../assets/myworkouts.png'),
    route: 'MyWorkoutsStack',
  },
];

export const Tabs = () => (
  <Tab.Navigator
    tabBar={(props: BottomTabBarProps) => (
      <CustomTabBar {...props} items={tabs} />
    )}>
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="MyWorkoutsStack" component={MyWorkoutsStack} />
  </Tab.Navigator>
);

export function AppTab() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppTabs" component={Tabs} />
      <Stack.Screen
        name="WorkoutSelect"
        component={WorkoutSelect}
        options={{title: 'Escolha seu treino', headerShown: true}}
      />
      <Stack.Screen
        name="WorkoutChecklist"
        component={WorkoutChecklist}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
