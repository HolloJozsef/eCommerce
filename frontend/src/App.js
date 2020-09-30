import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header"> 
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Shopify</Link>
        </div> 
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    </header>
    <aside className="sidebar">
        <h3>Shopping category</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Suspension</a>
            </li>
            <li>
                <a href="index.html">Engine</a>
            </li>
        </ul>
    </aside>
        <main className="main">
            <div className="content">
              <Route path="/product/:id" component={ProductScreen}/>
             <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
               
            </div>
           
        </main>
        <footer className="footer">
            @HolloJozsef All rights reserved.
        </footer>
</div>
</BrowserRouter>
  );
}

export default App;
