import React from 'react';

import arrowLeft from '../../../../icons/arrow_left.svg';
import arrowRight from '../../../../icons/arrow_right.svg';

import styles from './viewing.css';

class Viewing extends React.Component {
  state = {
    words: [],
    nowWatchWordIndex: 0,
    count: null,
    onComplete: null,
  }

  componentDidMount() {
    this.setState({ words: this.props.words, count: this.props.count, onComplete: this.props.onComplete });
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
    const { words, count } = this.state;
    const watchedWords = words.filter((word) => word.watched);
    return watchedWords.length === count;
  }

  render() {
    const { words, nowWatchWordIndex, onComplete } = this.state;
    if (words.length === 0) {
      return <div></div>
    }

    const nowWord = words[nowWatchWordIndex];
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
          <div className={styles.remembered} onClick={onComplete}>
            <h4>Remembered</h4>
          </div>
        }
      </div>
    )
  }
}

export default Viewing;
