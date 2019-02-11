import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../configs/config';

import arrowLeft from '../../../../icons/arrow_left.svg';
import arrowRight from '../../../../icons/arrow_right.svg';
import styles from './learningPage.css';

class LearningPage extends React.Component {
  state = {
    learningWords: [],
    nowWatchWordIndex: 0,
    count: 5
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
  }

  swipeLeft = () => {
    const { nowWatchWordIndex, count } = this.state;
    if (nowWatchWordIndex === 0) {
      this.setState({ nowWatchWordIndex: count - 1 })
    } else {
      this.setState((prev) => ({ nowWatchWordIndex: prev.nowWatchWordIndex - 1 }))
    }
  }

  swipeRight = () => {
    const { nowWatchWordIndex, count } = this.state;
    if (nowWatchWordIndex === count - 1) {
      this.setState({ nowWatchWordIndex: 0 })
    } else {
      this.setState((prev) => ({ nowWatchWordIndex: prev.nowWatchWordIndex + 1 }))
    }
  }

  isAllWordsWatched = () => {
    const { learningWords, count } = this.state;
    const watchedWords = learningWords.filter((word) => word.watched);
    return watchedWords.length === count;
  }

  render() {
    const { learningWords, nowWatchWordIndex } = this.state;
    if (learningWords.length === 0) {
      return <div></div>
    }

    const nowWord = learningWords[nowWatchWordIndex];
    if (!nowWord.watched) {
      nowWord.watched = true;
    }
    const isAllWordsWatched = this.isAllWordsWatched();

    return (
      <div className={styles.content}>
        <div className={styles.cardAndSwitch}>
          <div className={styles.switch} onClick={this.swipeLeft}>
            <img src={arrowLeft} alt=""></img>
          </div>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <p>{ nowWord.original }</p>
              </div>
              <div className={styles.flipCardBack}>
                <p>{ nowWord.translation }</p>
              </div>
            </div>
          </div>
          <div className={styles.switch} onClick={this.swipeRight}>
            <img src={arrowRight} alt=""></img>
          </div>
        </div>
        {isAllWordsWatched && 
          <div className={styles.remembered}>
            <h4>Remembered</h4>
          </div>
        }
      </div>
    )
  }
}

export default LearningPage;
