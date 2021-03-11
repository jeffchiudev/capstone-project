import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';
import wizard from './../img/wizard.png';

function CharacterSheetDetail(props) {
  const { character, onClickingDelete } = props;

  if (character.characterClass == "wizard") {
    // console.log("wizard")
    return (
      <React.Fragment>
        <h1 style={{textAlign: 'center', background: '#fa9f42'}} className="jumbotron">{character.name}</h1>
        <Container>
          <Row>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Inventory</h3>
            </Col>
            <Col style={{backgroundImage: `url(${wizard})`, opacity: '0.2',  backgroundSize: 'cover', borderRadius: '10px 50px'}} xs={6}>
            </Col>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Stats</h3>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>Hit points</h6>
                  <h4 style={{textAlign: 'center'}}>12</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>Armor</h6>
                  <h4 style={{textAlign: 'center'}}>14</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>STR</h6>
                  <h4 style={{textAlign: 'center'}}>10</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>DEX</h6>
                  <h4 style={{textAlign: 'center'}}>8</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>CON</h6>
                  <h4 style={{textAlign: 'center'}}>14</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>INT</h6>
                  <h4 style={{textAlign: 'center'}}>15</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>WIS</h6>
                  <h4 style={{textAlign: 'center'}}>13</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>CHA</h6>
                  <h4 style={{textAlign: 'center'}}>12</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <button onClick={ props.onClickingEdit }>Update Character</button>
        <button onClick={() => onClickingDelete(character.id)}>Delete Character</button>
      </React.Fragment>
    );
  }
}

CharacterSheetDetail.propTypes = {
  character: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CharacterSheetDetail;