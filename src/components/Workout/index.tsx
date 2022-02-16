import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useSourceImage} from '../../utils/useSourceImage';
import {WorkoutProps} from './interfaces';
import {
  MuscleGroup,
  MuscleImage,
  MuscleScroll,
  WorkoutActions,
  WorkoutButton,
  WorkoutButtonImage,
  WorkoutContainer,
  WorkoutInfo,
  WorkoutTitle,
} from './styles';

interface WorkoutPropsComponent {
  item: WorkoutProps;
  modifyWorkouts?: (item: WorkoutProps) => void;
  editAction?: () => void;
  removeAction?: () => void;
}

export function Workout({
  item,
  modifyWorkouts,
  editAction,
  removeAction,
}: WorkoutPropsComponent) {
  //@ts-ignore
  const {myWorkouts} = useSelector(state => state.user);
  const [included, setIncluded] = useState(() => {
    let index = myWorkouts.findIndex(
      (myWorkout: WorkoutProps) => myWorkout.id === item.id,
    );
    if (index < 0) {
      return false;
    } else {
      return true;
    }
  });
  let muscleGroups: string[] = [];

  for (let i in item.exercises) {
    if (!muscleGroups.includes(item.exercises[i].muscle)) {
      muscleGroups.push(item.exercises[i].muscle);
    }
  }

  function toggleWorkout() {
    if (!included) {
      setIncluded(true);
    } else {
      setIncluded(false);
    }

    modifyWorkouts && modifyWorkouts(item);
  }

  function editWorkout() {}

  function removeWorkout() {}

  return (
    <WorkoutContainer>
      <WorkoutInfo>
        <WorkoutTitle>{item.name}</WorkoutTitle>
        <MuscleScroll horizontal={true}>
          {muscleGroups.map((muscle: string) => (
            <MuscleGroup>
              <MuscleImage source={useSourceImage(muscle)} />
            </MuscleGroup>
          ))}
        </MuscleScroll>
      </WorkoutInfo>
      <WorkoutActions>
        {modifyWorkouts && (
          <WorkoutButton onPress={toggleWorkout} underlayColor="transparent">
            <WorkoutButtonImage
              source={
                included
                  ? require('../../assets/check-black.png')
                  : require('../../assets/add.png')
              }
            />
          </WorkoutButton>
        )}
        {editAction && (
          <WorkoutButton onPress={editWorkout} underlayColor="transparent">
            <WorkoutButtonImage
              source={require('../../assets/edit-black.png')}
            />
          </WorkoutButton>
        )}
        {removeAction && (
          <WorkoutButton onPress={removeWorkout} underlayColor="transparent">
            <WorkoutButtonImage
              source={require('../../assets/trash-black.png')}
            />
          </WorkoutButton>
        )}
      </WorkoutActions>
    </WorkoutContainer>
  );
}
