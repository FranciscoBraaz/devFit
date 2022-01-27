const CHANGE_NAME = 'userReducer/changeName';
const CHANGE_WORKOUT_DAYS = 'userReducer/changeWorkoutDays';

export const changeName = (name: string) => ({
  type: CHANGE_NAME,
  payload: name,
});

export const changeWorkoutDays = (days: number[]) => ({
  type: CHANGE_WORKOUT_DAYS,
  payload: days,
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
    default:
      return state;
  }
};

export default reducer;
