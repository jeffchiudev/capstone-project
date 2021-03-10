import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableCharacterForm from './ReusableCharacterForm';

function CharacterCreatorForm(props){
  
  function handleNewCharacterFormSubmision(event) {
    event.preventDefault();
    props.onNewCharacterCreation({
      name: event.target.name.value,
      class: event.target.class.value,
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <h3>Pick your class</h3>
      <ReusableCharacterForm
        formSubmissionHandler = {handleNewCharacterFormSubmision}
        buttonText = "Create your character" />
    </React.Fragment>
  );
}

CharacterCreatorForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
}

export default CharacterCreatorForm;