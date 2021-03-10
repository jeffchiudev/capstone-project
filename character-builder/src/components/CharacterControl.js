import React from 'react';
import CharacterCreatorForm from './CharacterCreatorForm';
import CharacterList from './CharacterList';
import CharacterSheetDetail from './CharacterSheetDetail';
import EditCharacterForm from './EditCharacterForm';

class CharacterControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sheetVisibleOnPage: false,
      masterCharacterList: [],
      selectedCharacter: null,
      editing: false
    };
  }
  handleClick = () => {
    if (this.state.selectedCharacter != null) {
      this.setState ({
        sheetVisibleOnPage: false,
        selectedCharacter: null,
        editing: false
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

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCharacterInList = (characterToEdit) => {
    const editedMasterCharacterlist = this.state.masterCharacterList
      .filter(character => character.id !== this.state.selectedCharacter.id)
      .concat(characterToEdit);
    this.setState({
      masterCharacterList: editedMasterCharacterlist,
      editing: false,
      selectedCharacter: null
    });
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

    if (this.state.editing) {
      currentlyVisibleState = <EditCharacterForm 
        character = {this.state.selectedCharacter}
        onEditCharacter = {this.handleEditingCharacterInList}/>
      buttonText = "Back to Character List";
    } else if (this.state.selectedCharacter != null) {
      currentlyVisibleState = <CharacterSheetDetail 
        character = {this.state.selectedCharacter} 
        onClickingDelete = {this.handleDeletingCharacter} 
        onClickingEdit = {this.handleEditClick}/>
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