import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Resource from '@/dataLoader/resources';
import { callApi } from '@/dataLoader/actions';

import Viewing from '../learningPage/components/viewing/Viewing';
import Choice from '../learningPage/components/choice/Choice';
import Typing from '../learningPage/components/typing/Typing';

interface IOwnProps {
  dispatchGetUserwords: any;
  dispatchFinishRepeat: any;
  repeatingWords: any;
  isLoading: any;
  isError: any;
  history: any;
}

interface IState {
  studyModes: Array<any>;
  index: number;
  wordsCount: number;
}

class Repeat extends React.Component<IOwnProps> {
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
    resource: Resource.RepeatingWords,
    type: 'get',
    url: '/userwords/repeat'
  })),

  dispatchFinishRepeat: (repeatingWords) => dispatch(callApi({
    resource: Resource.RepeatingWords,
    type: 'put',
    url: '/userwords',
    content: repeatingWords,
  })) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Repeat));
