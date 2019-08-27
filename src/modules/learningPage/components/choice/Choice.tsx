import React from 'react';

import { Word, EmptyFunc } from '@mdl/types';

import styles from './choice.css';

interface IOwnProps {
  words: Word[];
  count: number;
  onComplete: EmptyFunc;
  isOriginalTranslation: boolean;
}

interface IState {
  nowWordIndex: number;
}

interface IProps extends IOwnProps {}
class Choice extends React.Component<IProps, IState> {
  state: IState = {
    nowWordIndex: 0,
  }

  getRandomInt = (max: number) => Math.floor(Math.random()*max);

  shuffle = (ar: Array<any>) => {
    let index: number = ar.length, randIndex, temp;
    while (index !== 0 ) {
      randIndex = this.getRandomInt(index);
      index -= 1;

      temp = ar[randIndex];
      ar[randIndex] = ar[index];
      ar[index] = temp;
    }
    return ar;
  }

  getFourOptions = () => {
    const { nowWordIndex } = this.state;
    let w = this.props.words.slice();
    let res = [w[nowWordIndex]];
    w.splice(nowWordIndex, 1);
    while (res.length !== 4) {
      const randIndex = this.getRandomInt(w.length);
      const randWord = w[randIndex];
      w.splice(randIndex, 1);
      res.push(randWord);
    }
    return this.shuffle(res);
  }

  clickOnOption = (option: Word) => {
    const { words } = this.props;
    if (option.wordId === words[this.state.nowWordIndex].wordId) {
      this.setState((prev: any) => ({ nowWordIndex: prev.nowWordIndex + 1 }));
    } else {
      alert('Увы и ах, но данный ответ неверный') // FIXME: awesome output
    }
  }

  render() {
    const { words, count, onComplete, isOriginalTranslation } = this.props;
    const { nowWordIndex } = this.state;
    const options: Word[] = this.getFourOptions();
    if (words.length === 0) {
      return <div></div>
    }
    if (nowWordIndex === count) {
      onComplete();
      return <div></div>
    }
    const mainWord: Word = words[nowWordIndex];
    return (
      <div className={styles.content}>
        <h3>{ isOriginalTranslation ? mainWord.original : mainWord.translation }</h3>
        { options.map((option) => <div className={styles.option} key={option.wordId} onClick={() => this.clickOnOption(option)}>{ isOriginalTranslation ? option.translation : option.original }</div>) }
      </div>
    )
  }
}

export default Choice;
