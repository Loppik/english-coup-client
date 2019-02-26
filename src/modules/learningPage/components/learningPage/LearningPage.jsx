import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../configs/config';

import Viewing from '../viewing/Viewing';
import ChoiceOriginalTranslation from '../choiceOriginalTranslation/choiceOriginalTranslation';

class LearningPage extends React.Component {
  state = {
    learningWords: [],
    studyModes: [],
    index: 0, 
    wordsCount: 5
  }

  componentDidMount() {
    axios.get(`${API_URL}/userword`)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ learningWords: response.data })
        }
      })
      .catch((err) => {
        // FIXME: error handler
      })
    this.setState({ studyModes: ['choice original-translation', 'viewing'] });
  }

  onCompleteMode = () => {
    this.setState((prev) => ({ index: prev.index + 1 }));
  }

  render() {
    const { learningWords, studyModes, index, wordsCount } = this.state;
    if (learningWords.length === 0) {
      return <div></div>
    }

    let component;
    switch (studyModes[index]) {
      case 'viewing':
        component = <Viewing words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} />;
        break;
      case 'choice original-translation':
        component = <ChoiceOriginalTranslation words={learningWords} count={wordsCount} onComplete={this.onCompleteMode} />
        break;
      case 'choice translation-original':
        break;
      default:
        component = <div>You are awesome</div>
        break;
    }

    return (
      component 
    )
  }
}

export default LearningPage;
