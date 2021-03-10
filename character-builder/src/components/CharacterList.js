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
      {Object.values(props.characterList).map((character) => 
        <Character
          whenCharacterClicked = { props.onCharacterSelection }
          name = {character.name}
          characterClass = {character.characterClass}
          id = {character.id}
          key = {character.id}/>
      )}
      {/* {props.characterList.map((character) =>
        <Character 
          whenCharacterClicked = {props.onCharacterSelection}
          name={character.name}
          characterClass={character.characterClass} 
          id={character.id}
          key={character.id}/>
      )} */}
    </React.Fragment>
    
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.object,
  onCharacterSelection: PropTypes.func
}

export default CharacterList;