import React from 'react';
import { connect } from 'react-redux';

import Viewing from '../learningPage/components/viewing/Viewing';
import Choice from '../learningPage/components/choice/Choice';
import Typing from '../learningPage/components/typing/Typing';

import { IReactRouter } from '@mdl/interfaces';
import { callApi } from '@dtl/actions';
import RESOURCES from '@dtl/resources';

interface IOwnProps {
  dispatchGetUserwords: any;
  dispatchFinishRepeat: any;
  repeatingWords: any;
  isLoading: any;
  isError: any;
}

interface IProps extends IOwnProps, IReactRouter {}

interface IState {
  studyModes: any[];
  index: number;
  wordsCount: number;
}

class Repeat extends React.Component<IProps> {
  state = {
    studyModes: [],
    index: 0, 
    wordsCount: 5
  }

  componentDidMount() {
    const { dispatchGetUserwords } = this.props;
    dispatchGetUserwords();
    this.setRepeatModes(); 
  }

  onCompleteMode = () => {
    this.setState((prev: IState) => ({ index: prev.index + 1 }));
  }

  onFinishRepeat = (words) => {
    this.props.dispatchFinishRepeat(words);
    this.redirectToRepeatPage();
  }

  redirectToRepeatPage = () => this.props.history.push('/repeat');

  setRepeatModes = () => this.setState({ studyModes: ['choice original-translation', 'choice translation-original'] }); 

  render() {
    console.log("=")
    const { studyModes, index, wordsCount } = this.state;
    const { repeatingWords, isLoading, isError } = this.props;

    if (isError) return <div>Bad situation (:</div>
    if (isLoading || repeatingWords === null || repeatingWords.length === 0) {
      return <div></div>
    }

    let component = <div></div>;
    switch (studyModes[index]) {
      case 'viewing':
        component = <Viewing words={repeatingWords} count={wordsCount} onComplete={this.onCompleteMode} />;
        break;
      case 'choice original-translation':
        component = <Choice words={repeatingWords} count={wordsCount} onComplete={this.onCompleteMode} isOriginalTranslation={true} />
        break;
      case 'choice translation-original':
        component = <Choice words={repeatingWords} count={wordsCount} onComplete={this.onCompleteMode} isOriginalTranslation={false} />
        break;
      case 'typing':
        component = <Typing words={repeatingWords} count={wordsCount} onComplete={this.onCompleteMode} />
        break;
      default:
        this.onFinishRepeat(repeatingWords);
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

const mapStateToProps = state => ({
  repeatingWords: state.data.repeatingWords.data,
  isLoading: state.data.repeatingWords.isLoading,
  isError: state.data.repeatingWords.isError,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetUserwords: () => dispatch(callApi({
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
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Repeat);
