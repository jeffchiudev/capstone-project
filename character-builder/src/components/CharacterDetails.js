import React from 'react';
import CharacterCreatorForm from './CharacterCreatorForm';
import PropTypes from 'prop-types';

function CharacterSheet(props) {
  return (
    <React.Fragment>
      {props.characterPick.map((pick, index) => 
        <CharacterCreatorForm name={pick.name}
      )}
    </React.Fragment>
  );
}

export default CharacterSheet;