//Form component to add item to shopping list.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddItem() {
    const [item, setItem] = useState({
        add_item: ""
    });
    const stateFormChange = e => {
      setItem({
        ...item,
        [e.target.member]: e.target.value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
    };
    return (
      <div className="Add-Item">
        <h1>Add an Item</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="add_item"
              placeholder="Party type?"
              onChange={stateFormChange}
            />
          </label>
          <Link to="/items">
            <button type="button">Add to Item List</button>
          </Link>
        </form>
      </div>
    );
  }

  //needs to be setup with backend? 
  //added the form and linked to items.