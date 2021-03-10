import React from 'react';
import PropTypes from 'prop-types';

function CharacterSheetDetail(props) {
  const { character, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Character Sheet Example</h3>
      <h3>{character.name} - {character.class}</h3>
      if (character.class === "warrior") {
        <h2>str 5, con 3, int 1</h2>
      }
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