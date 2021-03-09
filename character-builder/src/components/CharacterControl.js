import React from 'react';
import CharacterCreatorForm from './CharacterCreatorForm';
import CharacterList from './CharacterList'

class CharacterControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sheetVisibleOnPage: false,
      masterCharacterList: []
    };
  }

  handleAddingNewCharacterToList = (newCharacter) => {
    const newMasterCharacterList = this.state.masterCharacterList.concat(newCharacter);
    this.setState({
      masterCharacterList: newMasterCharacterList,
      sheetVisibleOnPage: false
    })
  }

  handleClick = () => {
    this.setState(prevState => ({
      sheetVisibleOnPage: !prevState.sheetVisibleOnPage
    }));
  }

  render () {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.sheetVisibleOnPage) {
      currentVisibleState = <CharacterCreatorForm onNewCharacterCreation = {this.handleAddingNewCharacterToList}/>
      buttonText = "Back to Character List"; 
    } else {
      currentVisibleState = <CharacterList characterList = {this.state.masterCharacterList}/>
      buttonText = "Create a Character";
      // pickClassButton = <button onClick={this.handleClick}>Pick Class</button>
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CharacterControl;