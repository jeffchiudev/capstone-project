import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

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
  
  useFirestoreConnect([
    {collection: 'characters'}
  ]);

  const characters = useSelector(state => state.firestore.ordered.characters);

  if(isLoaded(characters)) {
    return (
      <React.Fragment>
        {characters.map((character) => {
          return <Character
            whenCharacterClicked = { props.onCharacterSelection }
            name = {character.name}
            characterClass = {character.characterClass}
            id = {character.id}
            key = {character.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
  // return (
  //   <React.Fragment>
  //     {Object.values(props.characterList).map((character) => 
  //       <Character
  //         whenCharacterClicked = { props.onCharacterSelection }
  //         name = {character.name}
  //         characterClass = {character.characterClass}
  //         id = {character.id}
  //         key = {character.id}/>
  //     )}
  //     {/* {props.characterList.map((character) =>
  //       <Character 
  //         whenCharacterClicked = {props.onCharacterSelection}
  //         name={character.name}
  //         characterClass={character.characterClass} 
  //         id={character.id}
  //         key={character.id}/>
  //     )} */}
  //   </React.Fragment>
}

CharacterList.propTypes = {
  // characterList: PropTypes.object,
  onCharacterSelection: PropTypes.func
}

export default CharacterList;