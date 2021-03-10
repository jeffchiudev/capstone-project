import React from 'react';
import PropTypes from 'prop-types';

function Character(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCharacterClicked(props.id)}>
        <h3>{props.name} - {props.characterClass}</h3>
      </div>
    </React.Fragment>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  characterClass: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCharacterClicked: PropTypes.func
};
export default Character;