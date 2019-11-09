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
}

interface IProps extends IOwnProps {}

class Typing extends React.Component<IProps> {
  readonly state: IState = {
    nowWordIndex: 0,
  };

  onInput = (event: any): void => { // TODO: normal type
    const { nowWordIndex } = this.state;
    if (this.props.words[nowWordIndex].original === event.target.value) {
      event.target.value = '';
      this.setState((prev: IState) => ({ nowWordIndex: prev.nowWordIndex + 1 }));
    }
  };

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
        <input type="text" onChange={this.onInput} /> {/* TODO: use common input element */}
      </React.Fragment>
    )
  }
}

export default Typing;
