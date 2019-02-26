import React from 'react';

import styles from './choice.css';

class Choice extends React.Component {
  state = {
    words: [],
    nowWordIndex: 0,
    count: null,
    onComplete: null,
    isOriginalTranslation: true
  }

  componentDidMount() {
    this.setState({ words: this.props.words, count: this.props.count, onComplete: this.props.onComplete, isOriginalTranslation: this.props.isOriginalTranslation })
  }

  getRandomInt = max => Math.floor(Math.random()*max);

  shuffle = ar => {
    let index = ar.length, randIndex, temp;
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
    const { words, nowWordIndex } = this.state;
    let w = words.slice();
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

  clickOnOption = option => {
    const { words, nowWordIndex } = this.state;
    if (option.word_id === words[nowWordIndex].word_id) {
      this.setState((prev) => ({ nowWordIndex: prev.nowWordIndex + 1 }));
    } else {
      alert('Увы и ах, но данный ответ неверный')
    }
  }

  render() {
    const { words, nowWordIndex, count, onComplete, isOriginalTranslation } = this.state;
    const options = this.getFourOptions();
    if (words.length === 0) {
      return <div></div>
    }
    if (nowWordIndex === count) {
      onComplete();
      return <div></div>
    }
    const mainWord = words[nowWordIndex];
    return (
      <div className={styles.content}>
        <h3>{ isOriginalTranslation ? mainWord.original : mainWord.translation }</h3>
        { options.map((option) => <div className={styles.option} key={option.word_id} onClick={() => this.clickOnOption(option)}>{ isOriginalTranslation ? option.translation : option.original }</div>) }
      </div>
    )
  }
}

export default Choice;
