import React from 'react';
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
}

export function Workout({item}: WorkoutPropsComponent) {
  let muscleGroups: string[] = [];

  for (let i in item.exercises) {
    if (!muscleGroups.includes(item.exercises[i].muscle)) {
      muscleGroups.push(item.exercises[i].muscle);
    }
  }

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
        <WorkoutButton>
          <WorkoutButtonImage source={require('../../assets/add.png')} />
        </WorkoutButton>
      </WorkoutActions>
    </WorkoutContainer>
  );
}
