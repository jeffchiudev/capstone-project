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
      {props.characterList.map((character, index) =>
        <Character name={character.name}
          class={character.class} 
          key={index}/>
      )}
    </React.Fragment>
    
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.array
}

export default CharacterList;