import React from 'react';
import {useSourceImage} from '../../utils/useSourceImage';
import {
  ExerciseDetails,
  ExerciseInfo,
  ExerciseMuscleImage,
  ExerciseName,
  ExercisesItemArea,
  ExercisesMuscleArea,
} from './styles';

export function ExerciseItem({data}: any) {
  return (
    <ExercisesItemArea>
      <>
        <ExercisesMuscleArea>
          <ExerciseMuscleImage source={useSourceImage(data.muscle)} />
        </ExercisesMuscleArea>
        <ExerciseInfo>
          <ExerciseName>{data.name}</ExerciseName>
          <ExerciseDetails>
            {`${data.sets} séries - ${data.reps} rep ${
              data.load ? ` - ${data.load} kg` : ''
            }`}
          </ExerciseDetails>
        </ExerciseInfo>
      </>
    </ExercisesItemArea>
  );
}
