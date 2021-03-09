import React from 'react';
import PropTypes from 'prop-types';

function Character(props) {
  return (
    <React.Fragment>
      <h1>Character example</h1>
      <h3>{props.name}</h3>
      <h3>{props.class}</h3>
    </React.Fragment>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  class: PropTypes.string
};
export default Character;