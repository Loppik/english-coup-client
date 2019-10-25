import React from 'react';

import { EmptyFunc, Word } from '@mdl/types';
import { STUDY_MODES } from '../../constants';

import Viewing from '../viewing/Viewing';
import Choice from '../choice/Choice';
import Typing from '../typing/Typing';

interface IOwnProps {
  dispatchGetUserwords: EmptyFunc;
  dispatchFinishLearning: (learnedWords: Word[]) => void;
  learningWords: Word[];
  isLoading: boolean;
  isError: boolean;
}

interface IState {
  studyModes: STUDY_MODES[];
  index: number;
  wordsCount: number;
}

interface IProps extends IOwnProps {};

class LearningPage extends React.Component<IProps, IState> {
  readonly state: IState = {
    studyModes: [],
    index: 0, 
    wordsCount: 5
  }

  componentDidMount() {
    this.props.dispatchGetUserwords();
    this.setStudyModes(); 
  }

  onCompleteMode = () => {
    this.setState((prev: IState) => ({ index: prev.index + 1 }));
  }

  onFinishLearning = (words: Word[]) => {
    this.props.dispatchFinishLearning(words);
    this.redirectToMainPage();
  }

  redirectToMainPage = () => {
    // this.props.history.push('/'); // FIXME:
  }

  setStudyModes = () => this.setState({ studyModes: [STUDY_MODES.VIEWING , STUDY_MODES.CHOICE_ORIGINAL_TRANSLATION , STUDY_MODES.CHOICE_TRANSLATION_ORIGINAL, STUDY_MODES.TYPING] }); 

  render() {
    const { studyModes, index, wordsCount } = this.state;
    const { learningWords, isLoading, isError } = this.props;

    if (isError) return <div>Bad situation (:</div> // TODO:
    if (isLoading || learningWords === null || learningWords.length === 0) {
      return <div></div>
    }

    let component;
    switch (studyModes[index]) {
      case STUDY_MODES.VIEWING:
        component = <Viewing words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} />;
        break;
      case STUDY_MODES.CHOICE_ORIGINAL_TRANSLATION:
        component = <Choice words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} isOriginalTranslation={true} />
        break;
      case STUDY_MODES.CHOICE_TRANSLATION_ORIGINAL:
        component = <Choice words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} isOriginalTranslation={false} />
        break;
      case STUDY_MODES.TYPING:
        component = <Typing words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} />
        break;
      default:
        this.onFinishLearning(learningWords);
        break; 
    }

    return (
      <React.Fragment>
        {!isLoading && !isError && (
          component
        )}
      </React.Fragment>
    )
  }
}

export default LearningPage;
