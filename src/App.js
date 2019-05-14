import React from 'react';
import './App.css';
import ListItem from './component/ListItem/ListItem'
import Card from './component/Card/card'

function App() {
  return (
    <div class="container">
    <h3>React+Redux Shopping Cart Example</h3>
    <div class="row">
    <ListItem />
    <Card />
    </div>
    </div>
  );
}

export default App;
