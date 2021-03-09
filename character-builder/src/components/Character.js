import React from 'react';
import PropTypes from 'prop-types';

function Character(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCharacterClicked(props.id)}>
        <h3>{props.name} - {props.class}</h3>
      </div>
    </React.Fragment>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  class: PropTypes.string,
  id: PropTypes.string,
  whenCharacterClicked: PropTypes.func
};
export default Character;