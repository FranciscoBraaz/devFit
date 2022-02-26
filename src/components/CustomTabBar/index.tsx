import React, {useEffect, useState} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  NavigationHelpers,
  ParamListBase,
  useIsFocused,
  useRoute,
} from '@react-navigation/native';
import {
  TabBall,
  TabBallImage,
  TabBarArea,
  TabBarItem,
  TabBarRegular,
  TabImage,
} from './styles';
import {Alert, ImageSourcePropType, Text} from 'react-native';
import IconHome from 'react-native-vector-icons/AntDesign';
import IconList from 'react-native-vector-icons/Feather';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

interface ItemProps {
  type: string;
  text?: string;
  icon: ImageSourcePropType;
  route: string;
  index: number;
}

interface CustomTabBarProps extends BottomTabBarProps {
  items: ItemProps[];
}

export function CustomTabBar({navigation, items, state}: CustomTabBarProps) {
  return (
    <TabBarArea>
      {items.map((item, index) => (
        <TabBarItem key={index}>
          {item.type === 'regular' ? (
            <TabBarRegular
              underlayColor="transparent"
              onPress={() => navigation.navigate(item.route)}>
              <>
                {item.text === 'Início' ? (
                  <IconHome
                    name="home"
                    size={25}
                    color={state.index === item.index ? '#000' : '#777'}
                  />
                ) : (
                  <IconList
                    name="list"
                    size={25}
                    color={state.index === item.index ? '#000' : '#777'}
                  />
                )}
                <Text
                  style={{color: state.index === item.index ? '#000' : '#777'}}>
                  {item.text}
                </Text>
              </>
            </TabBarRegular>
          ) : (
            <TabBall
              underlayColor="#00FF00"
              onPress={() => navigation.navigate(item.route)}>
              <TabBallImage source={item.icon} />
            </TabBall>
          )}
        </TabBarItem>
      ))}
    </TabBarArea>
  );
}
