import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';

export default function Preload() {
  const navigation = useNavigation();
  const state = useSelector(state => state.user);

  navigation.reset({
    index: 0,
    routes: [{name: 'StarterStack'}],
  });

  // if (!state.name) {
  //   navigation.reset({
  //     index: 0,
  //     routes: [{name: 'StarterStack'}],
  //   });
  // } else {
  //   navigation.reset({
  //     index: 0,
  //     routes: [{name: 'AppTab'}],
  //   });
  // }
  return null;
}
