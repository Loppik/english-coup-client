import React from 'react';

import { Word, EmptyFunc } from '@mdl/types';
import arrowLeft from '@src/icons/arrow_left.svg';
import arrowRight from '@src/icons/arrow_right.svg';

import styles from './viewing.css';

interface IOwnProp {
  words: Word[];
  count: number;
  onComplete: EmptyFunc;
}

interface IState {
  nowWatchWordIndex: number;
  watchedWordsIds: number[];
}

interface IProps extends IOwnProp {};

class Viewing extends React.Component<IProps, IState> {
  state: IState = {
    nowWatchWordIndex: 0,
    watchedWordsIds: [],
  }

  swipeLeft = () => {
    const { nowWatchWordIndex } = this.state;
    if (nowWatchWordIndex === 0) {
      this.setState({ nowWatchWordIndex: this.props.count - 1 })
    } else {
      this.setState((prev: IState) => ({ nowWatchWordIndex: prev.nowWatchWordIndex - 1 }))
    }
  }

  swipeRight = () => {
    const { nowWatchWordIndex } = this.state;
    if (nowWatchWordIndex === this.props.count - 1) {
      this.setState({ nowWatchWordIndex: 0 })
    } else {
      this.setState((prev: IState) => ({ nowWatchWordIndex: prev.nowWatchWordIndex + 1 }))
    }
  }

  isAllWordsWatched = () => this.state.watchedWordsIds.length === this.props.count;

  render() {
    const { words, onComplete } = this.props;
    const { nowWatchWordIndex, watchedWordsIds } = this.state;
    if (words.length === 0) { // THINK:
      return <div></div>
    }

    const nowWord = words[nowWatchWordIndex];
    if (!watchedWordsIds.includes(nowWord.wordId)) {
      watchedWordsIds.push(nowWord.wordId);
    }
    const isAllWordsWatched = this.isAllWordsWatched();

    return (
      <div className={styles.content}>
        <div className={styles.cardAndSwitch}>
          <div className={styles.switcher} onClick={this.swipeLeft}>
            <img src={arrowLeft} alt="Назад"></img> {/* TODO: multi language */}
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
          <div className={styles.switcher} onClick={this.swipeRight}>
            <img src={arrowRight} alt="Вперёд"></img> {/* TODO: multi language */}
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
