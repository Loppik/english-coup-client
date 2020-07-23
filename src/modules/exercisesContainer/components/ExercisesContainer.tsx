import * as React from 'react';
import {EmptyFunc, Word} from '@mdl/types';
import { EXERCISES_NAMES } from '../constants';
import { getExerciseComponent } from '../helpers';

import styles from './exercisesContainer.css';
import { shuffleArrayElements } from '@mdl/helpers';

interface IOwnProps {
  dispatchGetWords: EmptyFunc;
  words: Word[];
  isLoading: boolean;
  isError: boolean;
  exercisesNames: EXERCISES_NAMES[];
  onFullComplete: (words: Word[]) => void;
}

interface IState {
  exerciseIndex: number;
}

interface IProps extends IOwnProps {}

class ExercisesContainer extends React.Component<IProps, IState> {
  readonly state: IState = {
    exerciseIndex: 0
  };

  componentDidMount(): void {
    this.props.dispatchGetWords();
  }

  onCompleteExercise = (): void => {
    this.setState((prev: IState) => ({ exerciseIndex: prev.exerciseIndex + 1 }));
  };

  render() {
    const { exerciseIndex } = this.state;
    const { exercisesNames, words, isLoading, isError } = this.props;
    const wordsCount = words.length;

    if (isError) return <div>Bad situation (:</div> // TODO:
    if (isLoading || words === null || words.length === 0) {
      return <div/>
    }

    const component = getExerciseComponent(exercisesNames[exerciseIndex], shuffleArrayElements(words), wordsCount, this.onCompleteExercise);
    if (!component) this.props.onFullComplete(words);

    return (
      <React.Fragment>
        {!isLoading && !isError && (
          <div className={styles.content}>
            {component}
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default ExercisesContainer;
