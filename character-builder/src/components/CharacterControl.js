import React from 'react';
import CharacterCreatorForm from './CharacterCreatorForm';
import CharacterList from './CharacterList';
import CharacterSheetDetail from './CharacterSheetDetail';
import EditCharacterForm from './EditCharacterForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CharacterControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCharacter: null,
      editing: false
    };
  }
  handleClick = () => {
    if (this.state.selectedCharacter != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedCharacter: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    } 
  }

  handleAddingNewCharacterToList = (newCharacter) => {
    const { dispatch } = this.props;
    const { id, name, characterClass } = newCharacter;
    const action = {
      type: 'ADD_CHARACTER',
      id,
      name,
      characterClass,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
    // const newMasterCharacterList = this.state.masterCharacterList.concat(newCharacter);
    // this.setState({
    //   masterCharacterList: newMasterCharacterList,
    //   formVisibleOnPage: false
    // });
  }

  handleChangingSelectedCharacter = (id) => {
    // const selectedCharacter = this.state.masterCharacterList.filter(character => character.id === id )[0];
    const selectedCharacter = this.props.masterCharacterList[id];
    this.setState({selectedCharacter: selectedCharacter});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCharacterInList = (characterToEdit) => {
    const { dispatch } = this.props;
    const { id, name, characterClass } = characterToEdit;
    const action = {
      type: 'ADD_CHARACTER',
      id,
      name,
      characterClass,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedCharacter: null
    });
    // const editedMasterCharacterlist = this.state.masterCharacterList
    //   .filter(character => character.id !== this.state.selectedCharacter.id)
    //   .concat(characterToEdit);
    // this.setState({
    //   masterCharacterList: editedMasterCharacterlist,
    //   editing: false,
    //   selectedCharacter: null
    // });
  }

  handleDeletingCharacter = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_CHARACTER',
      id,
    }
    dispatch(action);
    this.setState({selectedCharacter: null});
    // const newMasterCharacterList = this.state.masterCharacterList.filter(character => character.id !== id);
    // this.setState({
    //   masterCharacterList: newMasterCharacterList,
    //   selectedCharacter: null
    // });
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CharacterCreatorForm 
        onNewCharacterCreation = {this.handleAddingNewCharacterToList}/>
      buttonText = "Back to Character List"; 
    } else {
      currentlyVisibleState = <CharacterList 
        characterList = {this.props.masterCharacterList}
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

CharacterControl.propTypes = {
  masterCharacterList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterCharacterList: state
  }
}

CharacterControl = connect(mapStateToProps)(CharacterControl);

export default CharacterControl;