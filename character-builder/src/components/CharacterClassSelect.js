import React from "react";
import { v4 } from 'uuid';
import wizard from './../img/wizard.png';
import warrior from './../img/warrior.png';
import thief from './../img/thief.png';

function CharacterClassSelect(props){
  
  function handleNewClassFormSubmit(event) {
    event.preventDefault();
    console.log(event.target.class.value);
  }
  
  return (
    <React.Fragment>
      <h3>Pick your class</h3>
      <form onSubmit = {handleNewClassFormSubmit}>
        <div className="row mb-3">
          <div className="col card">
            <img src={warrior} alt="An image of a warrior"/>
            <div class="radio">
              <label>
                <input type="radio" name="class" value="warrior" checked/><br/>
                Warrior
              </label>
            </div>
          </div>
          <div className="col card">
          <img src={wizard} alt="An image of a wizard"/>
            <div class="radio">
              <label>
                <input type="radio" name="class" value="wizard" /><br/>
                Wizard
              </label>
            </div>
          </div>
          <div className="col card">
          <img src={thief} alt="An image of a thief"/>
            <div class="radio">
              <label>
                <input type="radio" name="class" value="thief" /><br/>
                Thief
              </label>
            </div>
          </div>
        </div>
        
        <button type='submit'>Make My Charater!</button>
      </form>
    </React.Fragment>
  );
}

export default CharacterClassSelect;