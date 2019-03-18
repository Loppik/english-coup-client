import React from 'react';

import Navbar from '../../../navbar/containers/Navbar';

import styles from './mainPage.css';

class MainPage extends React.Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (!token) {
      const { history } = this.props;
      history.push('/login');
    }
  }

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
      <React.Fragment>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.leftSide} onClick={this.onAddClick}>
            <h1>Add</h1>
          </div>
          <div className={styles.rightSide} onClick={this.onLearningClick}>
            <h1>Learning</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MainPage;
