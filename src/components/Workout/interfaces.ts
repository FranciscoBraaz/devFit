export interface ExerciseProps {
  id: string;
  load: string;
  muscle: string;
  name: string;
  reps: string;
  sets: string;
}

export interface WorkoutProps {
  exercises: ExerciseProps[];
  id: string;
  name: string;
}
