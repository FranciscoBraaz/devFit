import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {
  TabBall,
  TabBallImage,
  TabBarArea,
  TabBarItem,
  TabBarRegular,
  TabImage,
} from './styles';
import {ImageSourcePropType, Text} from 'react-native';

interface ItemProps {
  type: string;
  text?: string;
  icon: ImageSourcePropType;
  route: string;
}

interface CustomTabBarProps {
  navigation: NavigationHelpers<ParamListBase>;
  items: ItemProps[];
}

export function CustomTabBar({navigation, items}: CustomTabBarProps) {
  return (
    <TabBarArea>
      {items.map((item, index) => (
        <TabBarItem key={index}>
          {item.type === 'regular' ? (
            <TabBarRegular
              underlayColor="transparent"
              onPress={() => navigation.navigate(item.route)}>
              <>
                <TabImage source={item.icon} />
                <Text style={{color: '#333'}}>{item.text}</Text>
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
