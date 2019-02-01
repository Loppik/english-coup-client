import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../configs/config';
 
import styles from './addWordsPage.css'

class AddWordsPage extends React.Component {
  state = {
    originalWord: '',
    translationWord: '',
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
        this.setState({ translationWord: response.data[0].translation })
      })
  }

  onAddButtonClick = () => {
    const { originalWord, translationWord } = this.state;
    console.log(`${originalWord} - ${translationWord}`);
  }

  render() {
    const { originalWord, translationWord } = this.state;
    return (
      <div className={styles.addWordsContent}>
        <input value={originalWord} onChange={this.onOriginalWordChange} />
        <input value={translationWord} onChange={this.onTranslationWordChange} />
        <button onClick={this.onTranslateButtonClick}>Translate</button>
        <button onClick={this.onAddButtonClick}>Add</button>
      </div>
    )
  }
}

export default AddWordsPage;
