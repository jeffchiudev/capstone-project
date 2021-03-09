import React from 'react';
import CharacterSheet from './CharacterSheet';
import ItemCategoryList from './ItemCategoryList';
import CharacterClassSelect from './CharacterClassSelect';

class CharacterControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sheetVisibleOnPage: false,
      classSelect: ""
    };
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
      currentVisibleState = <CharacterSheet />
      buttonText = "Change your class"; 
    } else {
      currentVisibleState = <CharacterClassSelect classSelect={this.state.classSelect}/>
      buttonText = "Back to Character Sheet";
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