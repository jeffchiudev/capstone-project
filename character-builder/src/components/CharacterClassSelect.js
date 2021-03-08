import React from "react";
import { v4 } from 'uuid';

function CharacterClassSelect(props){
  
  function handleNewClassFormSubmit(event) {
    event.preventDefault();
    console.log(event.target.class.value);
  }
  
  return (
    <React.Fragment>
      <h3>Pick your class</h3>
      <form onSubmit = {handleNewClassFormSubmit}>
        <div class="radio">
          <label>
            <input type="radio" name="class" value="warrior" checked/><br/>
            Warrior
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="class" value="wizard" /><br/>
            Wizard
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="class" value="thief" /><br/>
            Thief
          </label>
        </div>
        <button type='submit'>Make My Charater!</button>
      </form>
    </React.Fragment>
  );
}

export default CharacterClassSelect;