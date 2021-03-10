import React from 'react';
import PropTypes from 'prop-types';

function CharacterSheetDetail(props) {
  const { character, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Character Sheet Example</h1>
      <h3>{character.name} - {character.class}</h3>
      <button onClick={ props.onClickingEdit }>Update Character</button>
      <button onClick={() => onClickingDelete(character.id)}>Delete Character</button>
    </React.Fragment>
  );
}

CharacterSheetDetail.propTypes = {
  character: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default CharacterSheetDetail;