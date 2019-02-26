import React from 'react';

import styles from './choiceOriginalTranslation.css';

class ChoiceOriginalTranslation extends React.Component {
  state = {
    words: [],
    nowWordIndex: 0,
    count: null,
    onComplete: null,
  }

  componentDidMount() {
    this.setState({ words: this.props.words, count: this.props.count, onComplete: this.props.onComplete })
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

  getFourTranslationOptions = () => {
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

  clickOnOption = translation => {
    const { words, nowWordIndex } = this.state;
    if (translation.word_id === words[nowWordIndex].word_id) {
      this.setState((prev) => ({ nowWordIndex: prev.nowWordIndex + 1 }));
    } else {
      alert('Увы и ах, но данный ответ неверный')
    }
  }

  render() {
    const { words, nowWordIndex, count, onComplete } = this.state;
    const translationOptions = this.getFourTranslationOptions();
    if (words.length === 0) {
      return <div></div>
    }
    if (nowWordIndex === count) {
      onComplete();
      return <div></div>
    } 
    return (
      <div className={styles.content}>
        <h3>{ words[nowWordIndex].original }</h3>
        { translationOptions.map((translation) => <div className={styles.option} key={translation.word_id} onClick={() => this.clickOnOption(translation)}>{ translation.translation }</div>) }
      </div>
    )
  }
}

export default ChoiceOriginalTranslation;
