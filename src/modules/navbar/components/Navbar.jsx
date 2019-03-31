import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import DropDownMenu from './DropDownMenu';

import styles from './navbar.css';

class Navbar extends Component {
  componentDidMount() {
    /*
    if (this.props.user.accessToken == undefined) {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      if (tokens != null) {
        this.props.onSignIn(tokens);
      }
    }
    
    if (this.props.products.length == 0) {
      const products = JSON.parse(localStorage.getItem('products'));
      if (products != null) {
        this.props.onSetProductsToBasket(products);
      }
    }
    */
  }

  onExit = () => {
    localStorage.removeItem('token');
    const { history } = this.props;
    history.push('/login');
    console.log('exit')
  }


  render() {
    const { userData } = this.props;
    return (
      <div className={styles.navBar}>
        <div className={styles.menu}>
          <div className={styles.companyName}>
            <Link to="/">
              <p>English Coup</p>
            </Link>
          </div>
          
          {!userData && (
            <div>
              <Link to="/login">
                <div className={styles.btn}>Sign In</div>
              </Link>
              <Link to="/reg">
                <div className={styles.btn}>Sign Up</div>
              </Link>
            </div>
          )
          }
          {userData && (
            <div style={{display: 'flex'}}>
              <p style={{marginRight: 20, marginTop: 20}}>{ userData.email }</p>
              <div className={styles.btn} onClick={this.onExit}>Exit</div>
            </div>
          )
          }
        </div>
      </div>
    );
  }
}

export default Navbar;