//This component will be rendered by PartyList
// Grid to display saved pictures.
// Input to add image url and upload pics for saved ideas.
// Ability to delete  picture
//Rendered by PartyBoard
import React from 'react';


const Pictures = (props) => {
    return (
      <div>
          <img src={props.url} alt = 'party ideas'/>
          <p>{props.url}</p>
      </div>
    );
};
export default Pictures;