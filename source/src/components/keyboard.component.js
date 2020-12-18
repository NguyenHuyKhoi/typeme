import react,{Component} from 'react'
import { TEXT_SIZES } from '../utils/constants';
import data from '../utils/data.json'
import { WHITE } from '../utils/palette';
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
        return (
            <div 
                style={{flex:button.flex,height:'100%',marginLeft:5,marginRight:5,borderRadius:10,
                    display:'flex',justifyContent:'center',alignItems:'center',
                    backgroundColor:'#282955'}}>
                <text style={{fontSize:TEXT_SIZES.NORMAL,color:WHITE}}>
                    {button.char_1}
                </text>
            </div>
        )
    }
}
export default class KeyboardComponent extends Component{

    render(){
        const keyboard=keyboard_data;
        return (
            <div 
             //   onKeyDown={this.handleKeyDown}
                style={{width:'100%',height:'100%',backgroundColor:'#292557'}}>
                <KeyboardEventHandler
                    handleKeys={['a', 'b', 'c']}
                    onKeyEvent={(key, e) => console.log(`do something upon keydown event of ${key}`)} />
                {
                    keyboard.rows.map(row =>
                        
                        <div style={{width:'100%',height:60,display:'flex',flexDirection:'row'}}>
                            {
                                row.map(button=>
                                    <Button button={button}/>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}