// Displays a grid of parties that are in process of being planned. 
// Ability to delete party.
// This component will render PartyBoard
// Click on party and navigates to PartyBoard
// Button to create new party that redirects you to PartyForm

import React, { useEffect } from 'react';
// import AppNav from '../components/AppNav';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {rxGetParty} from '../redux/parties/actions';

// import {rxDeleteParty} from '../redux/categories/actions';
import styled from "styled-components";
import PartyBoard from './PartyBoard';

const Card = styled.div`
width: 50%;
height: 50%;
background-color: lightblue;
padding: 10px;
box-shadow: 1px 1px 5px black;
border-radius: 10px;
margin: 20px auto;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Title = styled.div`
  font-size: 18px;
  border-bottom: 1px solid lightgrey;
  background-color: pink;
  margin: 20px auto;
  width: 50%;
  border-radius: 10px;
`;

const PartyList = (props) => {
  
  function routeToParty(e, item){
    e.preventDefault();
    props.history.push('/')
  }

  useEffect(() => {
    props.rxGetParty();
   
  },[])

  


if(props.isLoading){
  return <h2><span role="img" aria-labelledby='jsx-ally/accessible-emoji'>🔃</span></h2>
}else{
  
  return (

    <>
    {/* <AppNav/> */}
    <Title><h1>Choose Party to Plan</h1></Title>
      <Link to="/partyform">
          <button>ADD NEW PARTY</button>
      </Link>

    <div>
    {props.error && <p>{props.error}</p>}
    {props.parties.map(item => {

      return (
        <>       
        
       <section className="initial-party-page-section">
         
         <Card>
       
        <PartyBoard key={item.id} 
              party_name={item.party_name} 
              host={item.host} 
              guests={item.guests}
              theme={item.theme}
              date={item.date}
              budget={item.budget}
              category={item.category}
             
              />
        </Card>
        </section>
        

        </>
      )
    })} 
           
    
    </div>
    </>
  )
}
}


  const mapStateToProps = state => {
    return {
      parties: state.partyReducer.parties,
      id: state.partyReducer.id,
      error: state.partyReducer.error,
      isLoading: state.partyReducer.isLoading,
      // category: state.categoryReducer.category,
      // id: state.categoryReducer.id
    }
  }

export default connect(mapStateToProps, {rxGetParty})(PartyList); 

  
  