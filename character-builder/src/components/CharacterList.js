import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

// const masterCharacterList = [
//   {
//     name:"Jules",
//     class:"Wizard"
//   },
//   {
//     name: "Walter",
//     class: "Thief"
//   },
// ]

function CharacterList(props) {
  return (
    <React.Fragment>
      {props.characterList.map((character) =>
        <Character 
          whenCharacterClicked = {props.onCharacterSelection}
          name={character.name}
          class={character.class} 
          id={character.id}
          key={character.id}/>
      )}
    </React.Fragment>
    
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.array,
  onCharacterSelection: PropTypes.func
}

export default CharacterList;