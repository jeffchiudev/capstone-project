import React from 'react';
import ReusableCharacterForm from './ReusableCharacterForm';
import PropTypes from 'prop-types';

function EditCharacterForm(props) {
  const { character } = props;

  function handleEditCharacterFormSubmission(event) {
    event.preventDefault();
    props.onEditCharacter({
      name: event.target.name.value,
      characterClass: event.target.characterClass.value,
      id: character.id
    });
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