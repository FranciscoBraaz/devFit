import React from 'react';
import {SwipeRow} from 'react-native-swipe-list-view';
import {useSourceImage} from '../../utils/useSourceImage';
import {ExerciseProps} from '../Workout/interfaces';
import {
  ExerciseDetails,
  ExerciseInfo,
  ExerciseMuscleImage,
  ExerciseName,
  ExercisesItemArea,
  ExercisesMuscleArea,
  ExerciseSwipe,
  ExerciseSwipeIcon,
} from './styles';

interface ExerciseItemProps {
  data: ExerciseProps;
  editAction: (item: ExerciseProps) => void;
  removeAction: (item: ExerciseProps) => void;
}

export function ExerciseItem({
  data,
  editAction,
  removeAction,
}: ExerciseItemProps) {
  return (
    <>
      <SwipeRow leftOpenValue={50} disableLeftSwipe={true}>
        <ExerciseSwipe
          underlayColor="#FF0000"
          onPress={() => removeAction(data)}>
          <ExerciseSwipeIcon source={require('../../assets/trash-white.png')} />
        </ExerciseSwipe>
        <ExercisesItemArea
          underlayColor="#FFF"
          onPress={() => editAction(data)}>
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
      </SwipeRow>
    </>
  );
}
