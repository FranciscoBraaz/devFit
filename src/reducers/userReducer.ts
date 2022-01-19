const CHANGE_NAME = 'userReducer/changeName';

export const changeName = (name: string) => ({
  type: CHANGE_NAME,
  payload: name,
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
    default:
      return state;
  }
};

export default reducer;
