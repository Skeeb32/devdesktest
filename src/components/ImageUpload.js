import React, { useState } from 'react';
import Pictures from './Pictures';
import {connect} from 'react-redux';
import {rxAddPics} from '../../src/redux/pictures/actions';
import styled from "styled-components";

const Card = styled.div`
width: 40%;
padding: 10px;
box-shadow: 1px 1px 5px black;
border-radius: 10px;
margin: 20px auto;
display: flex;
justify-content: center;
`;

const CardStyle = styled.div `    
    background: lightblue;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in;
     border: 5px solid black;
    &:hover {
      transform: translate(-5px) scale(1.05);
    }

    `;

const ImageUpload = (props) => {
  console.log('ImageUpload props', props);
  const [input, setInput] = useState('');


  const handleChanges = e => {
    setInput({...input, [e.target.name] : e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.rxAddPics(input);
    setInput({id: '', url: ''});
    props.history.push('/partyList');
    setInput('')
};
    return (
      <>
     <Card> 
       <CardStyle>
         <div>
           <h1>Add photos to your event!</h1>
           <p>Upload photos below</p>
           <form onSubmit={handleSubmit}>
             <input type="url" name='url' id='url' 
             onChange={handleChanges} 
             value={input.url}
             name='url'
             placeholder='Enter image url address here...'
          />
          <button>Add Image url</button>
        </form>
      </div>
      </CardStyle>
      </Card>
      <Pictures image={input}/>
      </>
    );
}

const mapStateToProps = state => {
  return {
    url: state.picturesReducer.url,
    id: state.picturesReducer.id,
    error: state.picturesReducer.error,
    isLoading: state.picturesReducer.isLoading
  }
}

export default connect(mapStateToProps, {rxAddPics})(ImageUpload); 