import React from 'react';

import {EmptyFunc, Word} from '@mdl/types';
import {IReactRouter} from '@mdl/interfaces';

import {EXERCISES_NAMES} from '@mdl/exercisesContainer/constants';
import ExercisesContainer from '@mdl/exercisesContainer/components/ExercisesContainer';

interface IOwnProps {
  dispatchGetLearnUserwords: EmptyFunc;
  dispatchFinishLearning: (learnedWords: Word[]) => void;
  learningWords: Word[];
  isLoading: boolean;
  isError: boolean;
}

interface IProps extends IOwnProps, IReactRouter {}

class LearningPage extends React.Component<IProps> {
  getExercisesNames = (): EXERCISES_NAMES[] => [EXERCISES_NAMES.VIEWING, EXERCISES_NAMES.CHOICE_ORIGINAL_TRANSLATION, EXERCISES_NAMES.CHOICE_TRANSLATION_ORIGINAL, EXERCISES_NAMES.TYPING];
  onFullComplete = (words: Word[]) => {
    this.props.dispatchFinishLearning(words);
    this.redirectToMainPage();
  };

  redirectToMainPage = (): void => {
    this.props.history.push('/');
  };

  render() {
    return(
      <ExercisesContainer
        dispatchGetWords={this.props.dispatchGetLearnUserwords}
        words={this.props.learningWords}
        isLoading={this.props.isLoading}
        isError={this.props.isError}
        exercisesNames={this.getExercisesNames()}
        onFullComplete={this.onFullComplete}
      />
    )
  }
}

export default LearningPage;
