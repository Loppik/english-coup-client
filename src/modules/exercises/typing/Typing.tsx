import React from 'react';

import { Word, EmptyFunc } from '@mdl/types';

import styles from './typing.css';

interface IOwnProps {
  words: Word[];
  count: number;
  onComplete: EmptyFunc;
}

interface IState {
  nowWordIndex: number;
  inputValue: string;
  isDisplayNextWordButton: boolean;
  inputRef: any;
  iAmHereAnimation: boolean;
  intervalId: number;
}

interface IProps extends IOwnProps {}

class Typing extends React.Component<IProps> {
  readonly state: IState = {
    nowWordIndex: 0,
    inputValue: '',
    isDisplayNextWordButton: false,
    inputRef: null,
    iAmHereAnimation: false,
    intervalId: -1
  };

  componentDidMount() {
    this.startAnimationInterval();
  }

  startAnimationInterval = () => {
    const intervalId = setInterval(() => {
      this.setState({ iAmHereAnimation: true });
      setTimeout(() => this.setState({ iAmHereAnimation: false }), 1000);
    }, 10000);
    this.setState({ intervalId });
  }
  deleteAnimationInterval = () => clearInterval(this.state.intervalId);
  refreshAnimationInterval = () => {
    this.deleteAnimationInterval();
    this.startAnimationInterval();
  }

  onInput = (event) => {
    this.onChangeInputValue(event.target.value);
  }

  onChangeInputValue = (newValue): void => { // TODO: normal type
    const { nowWordIndex } = this.state;
    if (this.props.words[nowWordIndex].original === newValue) {
      this.setState({ inputValue: '' });
      this.setState((prev: IState) => ({ nowWordIndex: prev.nowWordIndex + 1 }));
    } else {
      this.setState({ inputValue: newValue });
    }

    this.refreshAnimationInterval();
  };

  helpClick = () => {
    const { inputValue, nowWordIndex, inputRef } = this.state;
    const needWord = this.props.words[nowWordIndex].original;

    let lastFitLetterIndex = 0;
    const allFitLetters = inputValue.split('').every((letter, index) => {
      lastFitLetterIndex = index;
      return letter === needWord.charAt(index);
    });

    let newInputValue;
    if (allFitLetters) {
      const nextLetter = needWord.charAt(inputValue.length);
      newInputValue = inputValue + nextLetter;
    } else {
      const inputValueFitPart = inputValue.split('').slice(0, lastFitLetterIndex).join('');
      const nextLetter = needWord.charAt(lastFitLetterIndex);
      newInputValue = inputValueFitPart + nextLetter;
    }
    this.setState({ inputValue: newInputValue });

    if (newInputValue.length !== needWord.length) {
      inputRef && inputRef.focus();
      this.onChangeInputValue(newInputValue);
    } else {
      this.setState({ isDisplayNextWordButton: true });
    }
  }

  nextWordClick = () => {
    this.setState({ isDisplayNextWordButton: false });
    this.onChangeInputValue(this.state.inputValue);
  }

  render() {
    const { words, count, onComplete } = this.props;
    const { nowWordIndex } = this.state;

    if (words.length === 0) {
      return <div/>
    }
    if (nowWordIndex === count) {
      onComplete();
      return <div/>
    }

    const word = words[nowWordIndex];
    return (
      <React.Fragment>
        <h3>{word.translation}</h3>
        <input
          ref={(elem) => !this.state.inputRef && this.setState({ inputRef: elem })}
          type="text"
          value={this.state.inputValue}
          onChange={this.onInput}
        /> {/* TODO: use common input element */}
        <div>
          {this.state.isDisplayNextWordButton ? (
            <button style={{ backgroundColor: 'green', marginTop: '20px' }} onClick={this.nextWordClick}>></button>
          ) : (
            <button
              className={this.state.iAmHereAnimation ? styles.iamhere : ''}
              style={{ marginTop: '20px' }}
              onClick={this.helpClick}
            >
              help me
            </button>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Typing;
