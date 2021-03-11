import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';
import wizard from './../img/wizard.png';
import thief from './../img/thief.png';
import warrior from './../img/warrior.png';
import lightning from './../img/lightning.jpg';
import alleyway from './../img/alleyway.jpg';
import battle from './../img/battle.jpg'

function CharacterSheetDetail(props) {
  const { character, onClickingDelete } = props;

  if (character.characterClass == "wizard") {
    return (
      <React.Fragment>
        <h1 style={{textAlign: 'center', background: '#fa9f42', backgroundImage: `url(${lightning})`, backgroundSize: 'cover', opacity: '0.7'}} className="jumbotron">{character.name}</h1>
        <Container>
          <Row>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Inventory</h3>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
            </Col>

            <Col style={{backgroundImage: `url(${wizard})`, opacity: '0.2',  backgroundSize: 'cover', borderRadius: '10px 50px'}} xs={6}>
              <Row style={{paddingTop: '25px'}}>
                {/* <Col></Col> */}
                <Col md={{ span: 3, offset: 4 }} style={{ borderWidth: '5px', padding: '20px' }} className="card ">
                  <h4 style={{textAlign: 'center'}} >Head</h4>
                </Col>
                {/* <Col></Col> */}
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 1 }}  style={{ borderWidth: '5px', padding: '10px' }} className="card ">
                  <h5>Primary Weapon</h5>
                </Col>
                <Col md={{ span: 3, offset: 3 }}  style={{ borderWidth: '5px', padding: '10px' }} className="card ">
                  <h6>Secondary Weapon</h6>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 4 }} style={{ borderWidth: '5px', padding: '20px' }} className="card " >
                <h4 style={{textAlign: 'center'}} >Body</h4>
                </Col>
              </Row>
            </Col>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Ability Scores</h3>
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
        <button style={{margin: '10px'}} onClick={ props.onClickingEdit }>Update Character</button>
        <button style={{margin: '10px'}} onClick={() => onClickingDelete(character.id)}>Delete Character</button>
      </React.Fragment>
    );
  } else if (character.characterClass === "thief") {
    return (
      <React.Fragment>
        <h1 style={{textAlign: 'center', background: '#fa9f42', backgroundImage: `url(${alleyway})`, backgroundSize: 'cover', opacity: '0.7'}} className="jumbotron">{character.name}</h1>
        <Container>
          <Row>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Inventory</h3>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
            </Col>

            <Col style={{backgroundImage: `url(${thief})`, opacity: '0.2',  backgroundSize: 'cover', borderRadius: '10px 50px'}} xs={6}>
              <Row style={{paddingTop: '25px'}}>
                {/* <Col></Col> */}
                <Col md={{ span: 3, offset: 4 }} style={{ borderWidth: '5px', padding: '20px' }} className="card ">
                  <h4 style={{textAlign: 'center'}} >Head</h4>
                </Col>
                {/* <Col></Col> */}
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 1 }}  style={{ borderWidth: '5px', padding: '10px' }} className="card ">
                  <h5>Primary Weapon</h5>
                </Col>
                <Col md={{ span: 3, offset: 3 }}  style={{ borderWidth: '5px', padding: '10px' }} className="card ">
                  <h6>Secondary Weapon</h6>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 4 }} style={{ borderWidth: '5px', padding: '20px' }} className="card " >
                <h4 style={{textAlign: 'center'}} >Body</h4>
                </Col>
              </Row>
            </Col>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Ability Scores</h3>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>Hit points</h6>
                  <h4 style={{textAlign: 'center'}}>14</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>Armor</h6>
                  <h4 style={{textAlign: 'center'}}>16</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>STR</h6>
                  <h4 style={{textAlign: 'center'}}>10</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>DEX</h6>
                  <h4 style={{textAlign: 'center'}}>15</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>CON</h6>
                  <h4 style={{textAlign: 'center'}}>14</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>INT</h6>
                  <h4 style={{textAlign: 'center'}}>12</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>WIS</h6>
                  <h4 style={{textAlign: 'center'}}>8</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>CHA</h6>
                  <h4 style={{textAlign: 'center'}}>13</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <button style={{margin: '10px'}} onClick={ props.onClickingEdit }>Update Character</button>
        <button style={{margin: '10px'}} onClick={() => onClickingDelete(character.id)}>Delete Character</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1 style={{textAlign: 'center', background: '#fa9f42', backgroundImage: `url(${battle})`, backgroundSize: 'cover', opacity: '0.7'}} className="jumbotron">{character.name}</h1>
        <Container>
          <Row>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Inventory</h3>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
              <div style={{ borderWidth: '5px' , margin: '3px'}} className="card"><p style={{textAlign: 'center', marginBottom: '0px'}}>Test Item</p></div>
            </Col>

            <Col style={{backgroundImage: `url(${warrior})`, backgroundPosition: 'right bottom', opacity: '0.2',  backgroundSize: 'cover', borderRadius: '10px 50px'}} xs={6}>
              <Row style={{paddingTop: '25px'}}>
                {/* <Col></Col> */}
                <Col md={{ span: 3, offset: 4 }} style={{ borderWidth: '5px', padding: '20px' }} className="card ">
                  <h4 style={{textAlign: 'center'}} >Head</h4>
                </Col>
                {/* <Col></Col> */}
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 1 }}  style={{ borderWidth: '5px', padding: '10px' }} className="card ">
                  <h5>Primary Weapon</h5>
                </Col>
                <Col md={{ span: 3, offset: 3 }}  style={{ borderWidth: '5px', padding: '10px' }} className="card ">
                  <h6>Secondary Weapon</h6>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 4 }} style={{ borderWidth: '5px', padding: '20px' }} className="card " >
                <h4 style={{textAlign: 'center'}} >Body</h4>
                </Col>
              </Row>
            </Col>
            <Col className="card">
              <h3 style={{textAlign: 'center'}} >Ability Scores</h3>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>Hit points</h6>
                  <h4 style={{textAlign: 'center'}}>18</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>Armor</h6>
                  <h4 style={{textAlign: 'center'}}>17</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>STR</h6>
                  <h4 style={{textAlign: 'center'}}>15</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>DEX</h6>
                  <h4 style={{textAlign: 'center'}}>12</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>CON</h6>
                  <h4 style={{textAlign: 'center'}}>14</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>INT</h6>
                  <h4 style={{textAlign: 'center'}}>8</h4>
                </Col>
              </Row>
              <Row>
                <Col  style={{borderWidth: '5px'}} className="card">
                  <h6 xs={1} style={{textAlign: 'center'}}>WIS</h6>
                  <h4 style={{textAlign: 'center'}}>10</h4>
                </Col>
                <Col style={{borderWidth: '5px'}} className="card">
                  <h6 style={{textAlign: 'center'}}>CHA</h6>
                  <h4 style={{textAlign: 'center'}}>13</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <button style={{margin: '10px'}} onClick={ props.onClickingEdit }>Update Character</button>
        <button style={{margin: '10px'}} onClick={() => onClickingDelete(character.id)}>Delete Character</button>
      </React.Fragment>
    )
  }
}

CharacterSheetDetail.propTypes = {
  character: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CharacterSheetDetail;