import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import TermsAndConditions from './pages/terms/TermsAndConditions';
import Login from './pages/login/Login';
import Page404 from './pages/page404/Page404';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import Favourite from './pages/favourite/Favourite'
import './utils/utility-classes.css';
import Product from './pages/product/Product';

function App() {
  return(
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/favourite" component={Favourite}/>
        <Route path="/about" component={About}/>
        <Route path="/terms-and-conditions" component={TermsAndConditions}/>
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
