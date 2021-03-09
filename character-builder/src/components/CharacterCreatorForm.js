import React from "react";
import { v4 } from 'uuid';
import wizard from './../img/wizard.png';
import warrior from './../img/warrior.png';
import thief from './../img/thief.png';
import PropTypes from 'prop-types';

function CharacterCreatorForm(props){
  
  function handleNewCharacterFormSubmision(event) {
    event.preventDefault();
    props.onNewCharacterCreation({
      name: event.target.name.value,
      class: event.target.class.value,
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <h3>Pick your class</h3>
      <form onSubmit = {handleNewCharacterFormSubmision}>
        <input
          type='text'
          name='name'
          placeholder='CharacterName'/>
        <div className="row mb-3">
          <div className="col card">
            <img src={warrior} alt="An image of a warrior"/>
            <div style={{textAlign: 'center'}} class="radio">
              <label>
                <input type="radio" name="class" value="warrior" checked/><br/>
                <strong>Warrior</strong>
                <p>For discerning meatheads</p>
              </label>
            </div>
          </div>
          <div className="col card">
          <img src={wizard} alt="An image of a wizard"/>
            <div style={{textAlign: 'center'}} class="radio">
              <label>
                <input type="radio" name="class" value="wizard" /><br/>
                <strong>Wizard</strong>
                <p>For showy eggheads</p>
              </label>
            </div>
          </div>
          <div className="col card">
          <img src={thief} alt="An image of a thief"/>
            <div style={{textAlign: 'center'}} class="radio">
              <label>
                <input type="radio" name="class" value="thief" /><br/>
                <strong>Thief</strong>
                <p>For tricky kleptomaniacs</p>
              </label>
            </div>
          </div>
        </div> 
        <button type='submit'>Lock in My Class</button>
      </form>
    </React.Fragment>
  );
}

CharacterCreatorForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
}

export default CharacterCreatorForm;