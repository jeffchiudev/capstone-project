import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableCharacterForm from './ReusableCharacterForm';
import { useFirestore } from 'react-redux-firebase';

function CharacterCreatorForm(props){

  const firestore = useFirestore();
  function addCharacterToFirestore(event) {
    event.preventDefault();
    props.onNewCharacterCreation();
    return firestore.collection('characters').add(
      {
      name: event.target.name.value,
      characterClass: event.target.characterClass.value,
      }
    );
  }
  
  // function handleNewCharacterFormSubmision(event) {
  //   event.preventDefault();
  //   props.onNewCharacterCreation({
  //     name: event.target.name.value,
  //     characterClass: event.target.characterClass.value,
  //     id: v4()
  //   });
  // }
  
  return (
    <React.Fragment>
      <h3>Pick your class</h3>
      <ReusableCharacterForm
        formSubmissionHandler = {addCharacterToFirestore}
        buttonText = "Create your character" />
    </React.Fragment>
  );
}

CharacterCreatorForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
}

export default CharacterCreatorForm;