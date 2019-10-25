import React from 'react';

import { Word, EmptyFunc } from '@mdl/types';
import { getRandomInt, shuffleArrayElements } from '@mdl/helpers';

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

  componentDidMount() {
    console.log('did mount');
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    console.log('+++++++');
  }

  componentWillUnmount(): void {
    console.log('unmount')
  }

  getFourOptions = () => {
    const { nowWordIndex } = this.state;
    let w = this.props.words.slice();
    let res = [w[nowWordIndex]];
    w.splice(nowWordIndex, 1);
    while (res.length !== 4) {
      const randIndex = getRandomInt(0, w.length - 1);
      const randWord = w[randIndex];
      if (randWord) {
        res.push(randWord);
        w.splice(randIndex, 1);
      }
    }
    console.log('correct', res);
    return shuffleArrayElements(res);
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
    console.log(options, nowWordIndex)
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