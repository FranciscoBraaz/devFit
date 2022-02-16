import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CustomTabBar} from '../components/CustomTabBar';
import {Home} from '../screens/Home';
import {TempScreen} from '../screens/TempScreen';
import {HomeStack} from './HomeStack';
import MyWorkoutsStack from './MyWorkoutsStack';

const {Navigator, Screen} = createBottomTabNavigator();

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
    route: 'WorkoutStack',
  },
  {
    type: 'regular',
    text: 'Meus treinos',
    icon: require('../assets/myworkouts.png'),
    route: 'MyWorkoutsStack',
  },
];

export function AppTab() {
  return (
    <Navigator
      tabBar={(props: BottomTabBarProps) => (
        <CustomTabBar {...props} items={tabs} />
      )}>
      <Screen name="HomeStack" component={HomeStack} />
      <Screen name="MyWorkoutsStack" component={MyWorkoutsStack} />
      <Screen name="TempScreen2" component={TempScreen} />
    </Navigator>
  );
}
