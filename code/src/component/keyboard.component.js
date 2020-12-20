import react, {Component} from 'react';
import {TEXT_SIZES} from '../utils/constant';
import data from '../utils/data.json';
import {WHITE} from '../utils/palette';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const keyboard_data = data.keyboard;

const STENO_BUTTON_STATES = {
  NORMAL: 'NORMAL',
  HIGHLIGHT: 'HIGHLIGHT',
  CORRECT: 'CORRECT',
  WRONG: 'WRONG'
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: STENO_BUTTON_STATES.NORMAL
    };
  }

  render() {
    const button = this.props.button;
    return (
      <div
        style={{
          flex: button.flex, height: '100%', marginLeft: 5, marginRight: 5, borderRadius: 10,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          backgroundColor: '#282955'
        }}>
        <text style={{fontSize: TEXT_SIZES.NORMAL, color: WHITE}}>
          {button.char_1}
        </text>
      </div>
    );
  }
}

export default class KeyboardComponent extends Component {


  // handleKeyDown=(e)=>{
  //     console.log('KEY_DOWN:',e);
  // };

  render() {
    const keyboard = keyboard_data;
    return (
      <div
        //   onKeyDown={this.handleKeyDown}
        style={{width: '50vw', height: '50vh', backgroundColor: '#292557'}}>
        <KeyboardEventHandler
          handleKeys={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']}
          onKeyEvent={(key, e) => console.log(`do something upon keydown event of ${key}`)}/>
        {
          keyboard.rows.map(row =>

            <div style={{width: '100%', height: 60, display: 'flex', flexDirection: 'row'}}>
              {
                row.map(button =>
                  <Button button={button}/>
                )
              }
            </div>
          )
        }
      </div>
    );
  }
}