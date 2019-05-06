import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../configs/config';

class AddWordsPage extends React.Component {
  state = {
    originalWord: '',
    translationWord: '',
    primaryTranslationWord: '',
  }

  onOriginalWordChange = (event) => {
    this.setState({ originalWord: event.target.value });
  }

  onTranslationWordChange = (event) => {
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
      axios.post(`${API_URL}/userwords`, { user_id: 2, word: {original: originalWord, translation: translationWord, custom}})
      .then((response) => {
        if (response.status === 200) {
          this.setState({ originalWord: '', translationWord: '', primaryTranslationWord: '' });
        }
      })
      .catch((err) => {
        // FIXME: error handler
      })
    } else {
      // FIXME: info user
    }
  }

  render() {
    const { originalWord, translationWord } = this.state;
    return (
      <div>
        <input value={originalWord} onChange={this.onOriginalWordChange} />
        <input value={translationWord} onChange={this.onTranslationWordChange} />
        <button onClick={this.onTranslateButtonClick}>Translate</button>
        <button onClick={this.onAddButtonClick}>Add</button>
      </div>
    )
  }
}

export default AddWordsPage;
