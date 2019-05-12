import React from 'react';

import Viewing from '../viewing/Viewing';
import Choice from '../choice/Choice';
import Typing from '../typing/Typing';

class LearningPage extends React.Component {
  state = {
    studyModes: [],
    index: 0, 
    wordsCount: 5
  }

  componentDidMount() {
    const { dispatchGetUserwords } = this.props;
    dispatchGetUserwords();
    this.setStudyModes(); 
  }

  onCompleteMode = () => {
    this.setState((prev) => ({ index: prev.index + 1 }));
  }

  onFinishLearning = (words) => {
    this.props.dispatchFinishLearning(words);
    this.redirectToLearnPage();
  }

  redirectToLearnPage = () => this.props.history.push('/learn');

  setStudyModes = () => this.setState({ studyModes: ['viewing', 'choice original-translation', 'choice translation-original', 'typing'] }); 

  render() {
    const { studyModes, index, wordsCount } = this.state;
    const { learningWords, isLoading, isError } = this.props;

    if (isError) return <div>Bad situation (:</div>
    if (isLoading || learningWords === null || learningWords.length === 0) {
      return <div></div>
    }

    let component;
    switch (studyModes[index]) {
      case 'viewing':
        component = <Viewing words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} />;
        break;
      case 'choice original-translation':
        component = <Choice words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} isOriginalTranslation={true} />
        break;
      case 'choice translation-original':
        component = <Choice words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} isOriginalTranslation={false} />
        break;
      case 'typing':
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
