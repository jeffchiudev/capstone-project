import React from 'react';
import CharacterClassSelect from './CharacterClassSelect';
import PropTypes from 'prop-types';

function CharacterSheet(props) {
  return (
    <React.Fragment>
      {props.characterPick.map((pick, index) => 
        <CharacterClassSelect name={pick.name}
      )}
    </React.Fragment>
  );
}

export default CharacterSheet;