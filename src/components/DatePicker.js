import React, { Component } from 'react';
import {connect} from 'react-redux';
import {rxAddParty} from '../redux/parties/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './icon';
import {Form, Input, FormGroup, Container, Label} from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
import styled from "styled-components";


const BG = styled.body `

background-image: url('party.jpg');
background-size: cover;
background-position: center;
`;

const Card = styled.div`
width: 40%;
background-color: white;
padding: 10px;
box-shadow: 1px 1px 5px black;
border-radius: 10px;
margin: 20px auto;
display: flex;
justify-content: space-around;
margin-botton: 10%;
`;

const CardStyle = styled.div `    
    // background: lightblue;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in;
     border: 2px solid lightgrey;
    &:hover {
      transform: translate(-5px) scale(1.05);
    }

    `;

const CardTitleSize = styled.h2 `
font-size: 20px;

`;
const Button = styled.div`
width: 40%;
margin: 20px auto;
display: flex;
justify-content: space-around;
margin-botton: 10%;
`;


class DatePicker extends Component {
  
  constructor(props) {
    console.log('DatePicker props', props)
    super(props);
    this.state ={
      date: null,
      focused: null
    }
  }

  handleChanges = e => {
    
    // console.log(this.props.note.date);
    this.props.setNote({
      ...this.props.note,
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <BG><div>
       <Card> 
         <Container>
          <Form>
          <CardStyle><FormGroup>
            <CardTitleSize><Label for="party_name">Party Title: </Label></CardTitleSize>
              <Input type="text" name="party_name" placeholder="Enter title of event..." onChange={this.handleChanges} value={this.props.note.party_name}/>
            </FormGroup></CardStyle>
            <CardStyle>
              <FormGroup>
            <CardTitleSize><Label for="host">Host: </Label></CardTitleSize>
              <Input type="text" name="host" placeholder='Who is hosting?' onChange={this.handleChanges} value={this.props.note.host}/>
            </FormGroup>
            </CardStyle>
            {/* <FormGroup>
            <SingleDatePicker
                          // showClearDate={true}
                          customInputIcon={
                            <svg className="icon icon-small">
                              <Icon
                                icon="ICON_CALENDER"
                                className="icon icon-large"
                              />
                            </svg>
                          }
                          name="date"
                          value={this.props.note.date}
                          onChange={this.handleChanges}
                          inputIconPosition="after"
                          small={true}
                          block={false}
                          numberOfMonths={1}
                          date={this.state.date}
                          focused={this.state.focused}
                          onFocusChange={({ focused }) =>
                            this.setState({ focused })
                          }
                          openDirection="up"
                          hideKeyboardShortcutsPanel={true}
                        />
            </FormGroup> */}
            

            <CardStyle><FormGroup>
            <CardTitleSize> <Label for="guests">Number of expected guests: </Label> </CardTitleSize>
              <Input type="number" name="guests" placeholder="Estimated number of guests" onChange={this.handleChanges} value={this.props.note.guests}/>
            </FormGroup> </CardStyle>
            
            
            <CardStyle><FormGroup>
            <CardTitleSize><Label for="theme">Theme: </Label> </CardTitleSize>
              <Input type="text" name="theme" placeholder="Theme of your bash" onChange={this.handleChanges} value={this.props.note.theme}/>
            </FormGroup> </CardStyle>
            
            <CardStyle><FormGroup>
             <CardTitleSize><Label for="date">Date: </Label> </CardTitleSize>
              <Input type="date" name="date" placeholder="Enter date of party" onChange={this.handleChanges} value={this.props.note.date}/>
            </FormGroup></CardStyle>      
            
            <CardStyle><FormGroup>
            <CardTitleSize><Label for="budget">Budget: </Label> </CardTitleSize>
              <Input type="number" name="budget" placeholder="How much can you spend?" onChange={this.handleChanges} value={this.props.note.budget}/>
            </FormGroup> </CardStyle>

            
            <CardStyle><FormGroup>
            <CardTitleSize><Label for="category">Category: </Label> </CardTitleSize>
              <Input type="text" name="category" placeholder="What type of party is this?" onChange={this.handleChanges} value={this.props.note.category}/>
            </FormGroup> </CardStyle>
            <Button><div><button type="submit">Let's Party!!</button></div></Button>
          </Form>
        </Container></Card>
      </div></BG>
    );
  }
}

const mapStateToProps = state => {
  return {
    parties: state.partyReducer.parties,
  }
}


export default connect(mapStateToProps, {rxAddParty})(DatePicker); 