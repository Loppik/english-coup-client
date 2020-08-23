import React from 'react';
import { connect } from 'react-redux';

import { IReactRouter } from '@mdl/interfaces';
import { callApi } from '@dtl/actions';
import RESOURCES from '@dtl/resources';
import { EXERCISES_NAMES } from '@mdl/exercisesContainer/constants';
import { EmptyFunc, Word } from '@mdl/types';
import ExercisesContainer from '@mdl/exercisesContainer/components/ExercisesContainer';

interface IOwnProps {
  dispatchGetRepeatUserwords: EmptyFunc;
  dispatchFinishRepeat: (words: Word[]) => void;
  repeatingWords: Word[];
  isLoading: boolean;
  isError: boolean;
}

interface IProps extends IOwnProps, IReactRouter {}

class Repeat extends React.Component<IProps> {
  getExercisesNames = (): EXERCISES_NAMES[] => [EXERCISES_NAMES.VIEWING];
  onFullComplete = (words: Word[]) => {
    this.props.dispatchFinishRepeat(words);
    this.props.history.goBack();
  };

  render() {
    return(
      <ExercisesContainer
        dispatchGetWords={this.props.dispatchGetRepeatUserwords}
        words={this.props.repeatingWords}
        isLoading={this.props.isLoading}
        isError={this.props.isError}
        exercisesNames={this.getExercisesNames()}
        onFullComplete={this.onFullComplete}
      />
    )
  }
}

const mapStateToProps = state => ({
  repeatingWords: state.data.repeatingWords.data,
  isLoading: state.data.repeatingWords.isLoading,
  isError: state.data.repeatingWords.isError,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetRepeatUserwords: () => dispatch(callApi({
    resource: RESOURCES.REPEATING_WORDS,
    type: 'get',
    url: '/userwords/repeat'
  })),

  dispatchFinishRepeat: (repeatingWords) => dispatch(callApi({
    resource: RESOURCES.REPEATING_WORDS,
    type: 'put',
    url: '/userwords',
    content: repeatingWords,
  })) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Repeat);
