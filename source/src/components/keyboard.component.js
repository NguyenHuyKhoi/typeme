import react,{Component} from 'react'
import { TEXT_SIZES } from '../utils/constants';
import data from '../utils/data.json'
import { BLUE_1, GRAY_2, GRAY_4, GREEN_1, INDIGO_0, WHITE } from '../utils/palette';
import KeyboardEventHandler from 'react-keyboard-event-handler';
const keyboard_data=data.keyboard;

const STENO_BUTTON_STATES={
    NORMAL:'NORMAL',
    HIGHLIGHT:'HIGHLIGHT',
    CORRECT:'CORRECT',
    WRONG:'WRONG'
}


class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            state:STENO_BUTTON_STATES.NORMAL
        }
    }
    render(){
        const button=this.props.button
        const is_steno=button.is_steno;
        const is_pressed=this.props.is_pressed

        return (
            <div 
                style={{width:45*button.flex,height:'100%',borderRadius:4,
                    display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',
                    backgroundColor:
                        !is_steno?
                            GRAY_2:
                            is_pressed?GREEN_1: INDIGO_0}}>

                {
                    button.char_2!==undefined?
                    <text style={{fontSize:TEXT_SIZES.SMALL,color:WHITE,marginLeft:is_steno?10:0}}>
                        {button.char_2}
                    </text>
                    :
                    null
                }
                <text style={{fontSize:TEXT_SIZES.SMALL,color:WHITE,marginRight:is_steno?10:0}}>
                    {button.char_1}
                </text>
                
            </div>
        )
    }
}
export default class KeyboardComponent extends Component{

    constructor(props){
        super(props);
        const steno_buttons=[];
        keyboard_data.rows.map(row=>
            row.map(button=>{
                if (button.is_steno) steno_buttons.push(button.char_1)
            }))

        this.state={
            steno_buttons:steno_buttons,
            pressed_button:null
        };

        console.log('steno:',steno_buttons)
    };

    pressButton=(keyname)=>{
        console.log('keyname :',keyname)
        this.setState({
            pressed_button:keyname
        });
    }

    render(){
        const keyboard=keyboard_data;
        const steno_buttons=this.state.steno_buttons;
        return (
            <div 
             //   onKeyDown={this.handleKeyDown}
                style={{width:'55vw',height:'100%'}}>
                <KeyboardEventHandler
                    handleKeys={steno_buttons}
                    onKeyEvent={(key, e) => this.pressButton(key)} />
                {
                    keyboard.rows.map(row =>
                        
                        <div style={{width:'100%',height:45,display:'flex',flexDirection:'row',marginTop:5,
                            justifyContent:'space-between'}}>
                            {
                                row.map(button=>
                                    <Button 
                                        button={button}
                                        is_pressed={this.state.pressed_button===button.char_1}
                                        />
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}