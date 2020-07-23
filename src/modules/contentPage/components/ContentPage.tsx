import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../header/Header';
import LeftMenu from '../../leftMenu/LeftMenu';

import MainPage from '../../mainPage/MainPage';
import AddWordsPage from '../../addWordsPage/containers/AddWordsPage';
import LearnPage from '../../learnPage/LearnPage';
import RepeatPage from '../../repeatPage/RepeatPage';

import { IReactRouter } from '@mdl/interfaces';

import styles from './contentPage.css';

interface IProps extends IReactRouter {}

const ContentPage = ({ history }) => {

  const historyPush = (path: string) => history.push(path);


  return (
    <React.Fragment>
      <Header historyPush={historyPush} />
      <div className={styles.container}>
        <div>
          <LeftMenu historyPush={historyPush} />
        </div>
        <div>
          <Switch>
            <Route path='/add' component={AddWordsPage} />
            <Route path='/learn' component={LearnPage} />
            <Route path='/repeat' component={RepeatPage} />
            <Route path='/' component={MainPage} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContentPage;
