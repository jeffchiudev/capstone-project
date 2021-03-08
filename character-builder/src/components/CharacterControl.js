import React from 'react';
import CharacterSheet from './CharacterSheet';
import ItemCategoryList from './ItemCategoryList';

class CharacterControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sheetVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState({sheetVisbileOnPage: true});
  }

  render () {
    let currentVisibleState = null;
    let pickClassButton = null;
    if (this.state.sheetVisibleOnPage) {
      currentVisibleState = <CharacterSheet />
    } else {
      currentVisibleState = <ClassList />
      pickClassButton = <button onClick={this.handleClick}>Pick Class</button>
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        {pickClassButton}
      </React.Fragment>
    );
  }
}

export default CharacterControl;