import React from 'react';

import styles from './typing.css';

class Typing extends React.Component {
  state = {
    words: [],
    nowWordIndex: 0,
    count: null,
    onComplete: null,
  }

  componentDidMount() {
    this.setState({ words: this.props.words, count: this.props.count, onComplete: this.props.onComplete });
  }

  onInput = event => {
    const { words, nowWordIndex } = this.state;
    if (words[nowWordIndex].original === event.target.value) {
      event.target.value = '';
      this.setState((prev) => ({ nowWordIndex: prev.nowWordIndex + 1 }));
    }
  }

  render() {
    const { words, nowWordIndex, count, onComplete } = this.state;

    if (words.length === 0) {
      return <div></div>
    }
    if (nowWordIndex === count) {
      onComplete();
      return <div></div>
    }

    const word = words[nowWordIndex]
    console.log(word)
    return (
      <div className={styles.content}>
        <h3>{word.translation}</h3>
        <input type="text" onChange={this.onInput} />
      </div>
    )
  }
}

export default Typing;
