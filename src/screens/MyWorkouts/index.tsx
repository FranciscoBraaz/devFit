import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Workout} from '../../components/Workout';
import {WorkoutProps} from '../../components/Workout/interfaces';
import {removeWorkout} from '../../reducers/userReducer';
import {
  AddWorkoutArea,
  AddWorkoutImage,
  Container,
  WorkoutList,
} from './styles';

interface AddWorkoutButtonProps {
  handleClick: () => void;
}

const AddWorkoutButton = ({handleClick}: AddWorkoutButtonProps) => (
  <AddWorkoutArea onPress={handleClick} underlayColor="transparent">
    <AddWorkoutImage source={require('../../assets/add.png')} />
  </AddWorkoutArea>
);

export function MyWorkouts() {
  //@ts-ignore
  const {myWorkouts} = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddWorkoutButton handleClick={handleAddWorkout} />,
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  function handleAddWorkout() {
    navigation.navigate('EditWorkout');
  }

  function handleRemoveWorkout(workout: WorkoutProps) {
    dispatch(removeWorkout(workout));
  }

  function handleEditWorkout(workout: WorkoutProps) {
    navigation.navigate('EditWorkout', {workout});
  }

  return (
    <Container>
      <WorkoutList
        data={myWorkouts}
        renderItem={({item, index}: any) => (
          <Workout
            item={item}
            editAction={handleEditWorkout}
            removeAction={handleRemoveWorkout}
          />
        )}
        keyExtractor={(item: any, index: number) => String(index)}
      />
    </Container>
  );
}
