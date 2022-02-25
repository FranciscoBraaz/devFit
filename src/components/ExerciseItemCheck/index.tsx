import React from 'react';
import {DayItem} from '../../screens/HomeConfig/styles';
import {useSourceImage} from '../../utils/useSourceImage';
import {ExerciseProps} from '../Workout/interfaces';
import {
  ExercisesItemArea,
  ExercisesMuscleArea,
  ExerciseInfo,
  ExerciseMuscleImage,
  ExerciseDetails,
  ExerciseName,
  ExerciseCheck,
  ExerciseDone,
  ExerciseUndone,
  ExerciseCount,
  ExerciseCountText,
} from './styles';

interface ExerciseCheckProps extends ExerciseProps {
  done: boolean;
}

interface ExerciseItemCheck {
  data: ExerciseCheckProps;
  index: number;
  checkAction: () => void;
}

export function ExerciseItemCheck({
  data,
  index,
  checkAction,
}: ExerciseItemCheck) {
  return (
    <ExercisesItemArea>
      <>
        <ExerciseCount>
          <ExerciseCountText>{index + 1}.</ExerciseCountText>
        </ExerciseCount>
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
        <ExerciseCheck onPress={checkAction} underlayColor="transparent">
          {data.done ? (
            <ExerciseDone source={require('../../assets/check-white.png')} />
          ) : (
            <ExerciseUndone />
          )}
        </ExerciseCheck>
      </>
    </ExercisesItemArea>
  );
}
