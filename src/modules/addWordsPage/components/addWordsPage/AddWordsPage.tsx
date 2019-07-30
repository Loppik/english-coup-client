import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../configs/config';


interface IOwnProps {
  dispatchAddUserword: any;
}

class AddWordsPage extends React.Component<IOwnProps> {
  state = {
    originalWord: '',
    translationWord: '',
    primaryTranslationWord: '',
  }

  onOriginalWordChange = (event: any) => {
    this.setState({ originalWord: event.target.value });
  }

  onTranslationWordChange = (event: any) => {
    this.setState({ translationWord: event.target.value });
  }

  onTranslateButtonClick = () => {
    const { originalWord } = this.state;
    axios.post(`${API_URL}/translation`, {original: originalWord})
      .then((response) => {
        this.setState({ translationWord: response.data[0].translation, primaryTranslationWord: response.data[0].translation })
      })
  }

  onAddButtonClick = () => {
    let { originalWord, translationWord, primaryTranslationWord } = this.state;
    translationWord = translationWord.trim();
    let custom = false;
    if (translationWord !== primaryTranslationWord) {
      custom = true;
    }
    if (originalWord !== '' && translationWord !== '') {
      this.props.dispatchAddUserword({ word: {original: originalWord, translation: translationWord, custom}}, this.onSuccessAddUserword);
    } else {
      // FIXME: info user
    }
  }

  onSuccessAddUserword = () => this.setState({ originalWord: '', translationWord: '', primaryTranslationWord: '' });

  render() {
    const { originalWord, translationWord } = this.state;
    return (
      <div style={{marginTop: '50px'}}>
        <input value={originalWord} onChange={this.onOriginalWordChange} />
        <input value={translationWord} onChange={this.onTranslationWordChange} />
        <button onClick={this.onTranslateButtonClick}>Перевести</button>
        <button onClick={this.onAddButtonClick}>Добавить</button>
      </div>
    )
  }
}

export default AddWordsPage;
