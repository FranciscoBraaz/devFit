import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import {Workout} from '../../components/Workout';
import {WorkoutProps} from '../../components/Workout/interfaces';
import {
  AddWorkoutArea,
  AddWorkoutImage,
  Container,
  WorkoutList,
} from './styles';

const AddWorkoutButton = () => (
  <AddWorkoutArea>
    <AddWorkoutImage source={require('../../assets/add.png')} />
  </AddWorkoutArea>
);

export function MyWorkouts() {
  //@ts-ignore
  const {myWorkouts} = useSelector(state => state.user);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddWorkoutButton />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  return (
    <Container>
      <WorkoutList
        data={myWorkouts}
        renderItem={({item, index}: any) => (
          <Workout item={item} editAction={() => {}} removeAction={() => {}} />
        )}
        keyExtractor={(item: any) => item.id}
      />
    </Container>
  );
}
