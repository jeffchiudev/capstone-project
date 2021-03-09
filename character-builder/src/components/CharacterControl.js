import React from 'react';
import CharacterCreatorForm from './CharacterCreatorForm';
import CharacterList from './CharacterList';
import CharacterSheetDetail from './CharacterSheetDetail';

class CharacterControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sheetVisibleOnPage: false,
      masterCharacterList: [],
      selectedCharacter: null
    };
  }
  handleClick = () => {
    if (this.state.selectedCharacter != null) {
      this.setState ({
        sheetVisibleOnPage: false,
        selectedCharacter: null
      });
    } else {
      this.setState(prevState => ({
        sheetVisibleOnPage: !prevState.sheetVisibleOnPage
      }));
    } 
  }

  handleAddingNewCharacterToList = (newCharacter) => {
    const newMasterCharacterList = this.state.masterCharacterList.concat(newCharacter);
    this.setState({
      masterCharacterList: newMasterCharacterList,
      sheetVisibleOnPage: false
    });
  }

  handleChangingSelectedCharacter = (id) => {
    const selectedCharacter = this.state.masterCharacterList.filter(character => character.id === id )[0];
    this.setState({selectedCharacter: selectedCharacter});
  }

  handleDeletingCharacter = (id) => {
    const newMasterCharacterList = this.state.masterCharacterList.filter(character => character.id !== id);
    this.setState({
      masterCharacterList: newMasterCharacterList,
      selectedCharacter: null
    });
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCharacter != null) {
      currentlyVisibleState = <CharacterSheetDetail 
        character = {this.state.selectedCharacter} 
        onClickingDelete = {this.handleDeletingCharacter} />
      buttonText = "Back to Character List";
    } else if (this.state.sheetVisibleOnPage) {
      currentlyVisibleState = <CharacterCreatorForm onNewCharacterCreation = {this.handleAddingNewCharacterToList}/>
      buttonText = "Back to Character List"; 
    } else {
      currentlyVisibleState = <CharacterList 
        characterList = {this.state.masterCharacterList}
        onCharacterSelection = {this.handleChangingSelectedCharacter} />
      buttonText = "Create a Character";
      // pickClassButton = <button onClick={this.handleClick}>Pick Class</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CharacterControl;