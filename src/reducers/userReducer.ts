import {WorkoutProps} from '../components/Workout/interfaces';

const CHANGE_NAME = 'userReducer/changeName';
const CHANGE_WORKOUT_DAYS = 'userReducer/changeWorkoutDays';
const CHANGE_LEVEL = 'userReducer/changeLevel';
const ADD_WORKOUT = 'userReducer/addWorkout';
const EDIT_WORKOUT = 'useReducer/editWorkout';
const REMOVE_WORKOUT = 'userReducer/removeWorkout';
const ADD_PROGRESS = 'userReducer/addProgress';
const REMOVE_PROGRESS = 'userReducer/removeProgress';
const RESET = 'userReducer/reset';

export const changeName = (name: string) => ({
  type: CHANGE_NAME,
  payload: name,
});

export const changeWorkoutDays = (days: number[]) => ({
  type: CHANGE_WORKOUT_DAYS,
  payload: days,
});

export const changeLevel = (level: string) => ({
  type: CHANGE_LEVEL,
  payload: level,
});

export const addWorkout = (workout: WorkoutProps) => ({
  type: ADD_WORKOUT,
  payload: workout,
});

export const editWorkout = (workout: WorkoutProps) => ({
  type: EDIT_WORKOUT,
  payload: workout,
});

export const removeWorkout = (workout: WorkoutProps) => ({
  type: REMOVE_WORKOUT,
  payload: workout,
});

export const addProgress = (dateInfo: string) => ({
  type: ADD_PROGRESS,
  payload: dateInfo,
});

export const removeProgress = (dateInfo: string) => ({
  type: REMOVE_PROGRESS,
  payload: dateInfo,
});

export const reset = () => ({
  type: RESET,
});

const initialState = {
  name: '',
  level: '',
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: '',
  dailyProgress: ['2022-01-18', '2022-01-17'],
};

interface Action {
  type: string;
  payload: any;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.payload};
    case CHANGE_WORKOUT_DAYS:
      return {...state, workoutDays: action.payload};
    case CHANGE_LEVEL:
      return {...state, level: action.payload};
    case ADD_WORKOUT: {
      let newWorkouts: WorkoutProps[] = [...state.myWorkouts];
      newWorkouts.push(action.payload);

      return {...state, myWorkouts: newWorkouts};
    }
    case EDIT_WORKOUT: {
      let newWorkouts: WorkoutProps[] = [...state.myWorkouts];
      let index = newWorkouts.findIndex(
        workout => workout.id === action.payload.id,
      );
      newWorkouts[index] = action.payload;

      return {...state, myWorkouts: newWorkouts};
    }
    case REMOVE_WORKOUT: {
      let newWorkouts: WorkoutProps[] = [...state.myWorkouts];
      newWorkouts = newWorkouts.filter(
        (newWorkout: WorkoutProps) => newWorkout.id !== action.payload.id,
      );

      return {...state, myWorkouts: newWorkouts};
    }
    case ADD_PROGRESS: {
      let newDailyProgress = [...state.dailyProgress];

      if (!newDailyProgress.includes(action.payload)) {
        newDailyProgress.push(action.payload);
      }

      return {
        ...state,
        dailyProgress: newDailyProgress,
      };
    }
    case REMOVE_PROGRESS: {
      let oldDailyProgress = [...state.dailyProgress];
      let newDailyProgress = oldDailyProgress.filter(
        (dateOfDay: string) => dateOfDay !== action.payload,
      );

      return {...state, dailyProgress: newDailyProgress};
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
