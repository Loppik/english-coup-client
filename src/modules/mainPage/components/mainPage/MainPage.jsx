import React from 'react';

import styles from './mainPage.css';

class MainPage extends React.Component {
  onAddClick = () => {
    const { history } = this.props;
    history.push('/add');
  }

  onLearningClick = () => {
    const { history } = this.props;
    history.push('/learning');
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.leftSide} onClick={this.onAddClick}>
          <h1>Add</h1>
        </div>
        <div className={styles.rightSide} onClick={this.onLearningClick}>
          <h1>Learning</h1>
        </div>
      </div>
    )
  }
}

export default MainPage;
