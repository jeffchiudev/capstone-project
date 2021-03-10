import React from 'react';
import ReusableCharacterForm from './ReusableCharacterForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditCharacterForm(props) {
  const firestore = useFirestore();
  const { character } = props;

  function handleEditCharacterFormSubmission(event) {
    event.preventDefault();
    props.onEditCharacter();
    const propertiesToUpdate = {
      name: event.target.name.value,
      characterClass: event.target.characterClass.value
    }
    return firestore.update({collection: 'characters', doc: character.id }, propertiesToUpdate)
    // props.onEditCharacter({
    //   name: event.target.name.value,
    //   characterClass: event.target.characterClass.value,
    //   id: character.id
    // });
  }
  return (
    <React.Fragment>
      <ReusableCharacterForm
        formSubmissionHandler = {handleEditCharacterFormSubmission}
        buttonText="Update Character"/>
    </React.Fragment>
  );
}

EditCharacterForm.propTypes = {
  character: PropTypes.object,
  onEditCharacter: PropTypes.func
};

export default EditCharacterForm;