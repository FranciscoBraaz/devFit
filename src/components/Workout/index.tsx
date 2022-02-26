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
  addAction?: (item: WorkoutProps) => void;
  editAction?: (item: WorkoutProps) => void;
  removeAction?: (item: WorkoutProps) => void;
  goAction?: () => void;
  index?: number;
}

export function Workout({
  item,
  addAction,
  editAction,
  removeAction,
  goAction,
  index,
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
      addAction && addAction(item);
    } else {
      setIncluded(false);
      removeAction && removeAction(item);
    }
  }

  function editWorkout() {
    editAction && editAction(item);
  }

  function removeWorkout() {
    removeAction && removeAction(item);
  }

  return (
    <WorkoutContainer style={{marginTop: index && index === 1 ? 20 : 0}}>
      <WorkoutInfo>
        <WorkoutTitle>{item.name}</WorkoutTitle>
        <MuscleScroll horizontal={true}>
          {muscleGroups.map((muscle: string, index: number) => (
            <MuscleGroup key={index}>
              <MuscleImage source={useSourceImage(muscle)} />
            </MuscleGroup>
          ))}
        </MuscleScroll>
      </WorkoutInfo>
      <WorkoutActions>
        {addAction && (
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
        {goAction && (
          <WorkoutButton onPress={goAction} underlayColor="transparent">
            <WorkoutButtonImage
              source={require('../../assets/play-black.png')}
            />
          </WorkoutButton>
        )}
      </WorkoutActions>
    </WorkoutContainer>
  );
}
