//Displays list of item to purchase.
//Abilty to add, edit and delete them.
// Once clicked purchased, modal window pop up to enter price that will then update the budget.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {rxGetItem} from '../../redux/shopList/actions';

function ShopList() {
  const [list, setList] = useState({
    shop_list: ""
  });
  const stateFormChang = e => {
    setList({
      ...list,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="Add-Item">
      <h1>Shopping List Options</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <select>
            <option>Party Hats</option>
            <option>Confetti</option>
            <option>Pizza, Soda, Chips, Cake</option>
            <option>Decorations</option>
            <option>Chairs and Table</option>
            <option>Balloons</option>
            <option>Games</option>
            <option>Music</option>
            <option>Select All Above</option>
          </select>
        </label>
        <Link to="/">
          <button type="button">Add to Cart</button>
        </Link>
      </form>
    </div>
  );
}
//Dont know exactly where I should link to 
// having trouble finding specific items from api 
const mapStateToProps = state => {
  return {
    item: state.shopReducer.item,
    id: state.shopReducer.id,
    error: state.shopReducer.error,
    isLoading: state.shopReducer.isLoading,
    
    
  }
}

export default connect(mapStateToProps, {rxGetItem})(ShopList); 