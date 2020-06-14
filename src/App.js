import React from 'react';
import './App.css';
import HomePage from './homepage/homePage';
import Footer from './components/FooterComponent/FooterComponent';
import {Route, Switch} from 'react-router-dom';
import GreenKartShoppingPage from './GreenKartShoppingPage/GreenKartShoppingPage';
import CartPage from './cartPage/cartPage';
import NavBar from './components/HeaderComponent/NavBar';
import LoginComponent from './components/SignInComponent/LoginComponent';
class App extends React.Component {
  render(){
    return (
      <div style={{'background-color': '#e8e3d8'
    }}>
      <NavBar></NavBar>
      <Switch>
      <Route>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/signin' component={LoginComponent} /> 
        <Route exact path='/greenKartShopping' component={GreenKartShoppingPage} /> 
        <Route exact path='/cart' component={CartPage} /> 
        </Route>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
 
}

export default App;
