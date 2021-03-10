import React from 'react';
import CharacterCreatorForm from './CharacterCreatorForm';
import CharacterList from './CharacterList';
import CharacterSheetDetail from './CharacterSheetDetail';
import EditCharacterForm from './EditCharacterForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import { withFirestore } from 'react-redux-firebase'


class CharacterControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // selectedCharacter: null,
      // editing: false
    };
  }
  handleClick = () => {
    if (this.props.selectedCharacter != null) {
      const { dispatch } = this.props;
      const action = a.deselectCharacter();
      dispatch(action)
      // this.setState ({
      //   // formVisibleOnPage: false,
      //   selectedCharacter: null,
      //   editing: false
      // });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage
      // }));
    } 
  }

  handleAddingNewCharacterToList = () => {
    const { dispatch } = this.props;
    // const { id, name, characterClass } = newCharacter;
    // const action = {
    //   type: 'ADD_CHARACTER',
    //   id,
    //   name,
    //   characterClass,
    // }
    // dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
    // this.setState({formVisibleOnPage: false});
    // const newMasterCharacterList = this.state.masterCharacterList.concat(newCharacter);
    // this.setState({
    //   masterCharacterList: newMasterCharacterList,
    //   formVisibleOnPage: false
    // });
  }

  handleChangingSelectedCharacter = (id) => {
    this.props.firestore.get({collection: 'characters', doc: id}).then((character) => {
      const firestoreCharacter = {
        name: character.get("name"),
        characterClass: character.get("characterClass"),
        id: character.id
      }
      this.setState({selectedCharacter: firestoreCharacter});
    });
    // const { distpatch } = this.props;
    // const action = a.selectedCharacter();
    // dispatch(action);
    // const selectedCharacter = this.state.masterCharacterList.filter(character => character.id === id )[0];
    // const selectedCharacter = this.props.masterCharacterList[id];
    // this.setState({selectedCharacter: selectedCharacter});
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleEditingCharacterInList = () => {
    this.setState({
      editing: false,
      selectedCharacter: null
    });
  //   const { dispatch } = this.props;
  //   // const { id, name, characterClass } = characterToEdit;
  //   const action = a.toggleEdit();
  //   dispatch(action);
  //   const action2 = a.deselectCharacter();
  //   dispatch(action2);

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
    this.props.firestore.delete({collection: 'characters', doc: id});
    this.setState({selectedCharacter: null});
    // const { dispatch } = this.props;
    // const action = a.deselectCharacter();
    // dispatch(action);
    // this.setState({selectedCharacter: null});
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
    } else if (this.props.formVisibleOnPage) {
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


CharacterControl.propTypes = {
  masterCharacterList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedCharacter: PropTypes.object,
  editingVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterCharacterList: state.masterCharacterList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedCharacter: state.selectedCharacter,
    editingVisibleOnPage: state.editingVisibleOnPage
  }
}

CharacterControl = connect(mapStateToProps)(CharacterControl);

export default withFirestore(CharacterControl);