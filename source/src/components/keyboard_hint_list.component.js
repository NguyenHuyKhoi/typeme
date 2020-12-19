//import from library 
import React, {Component} from 'react'

import HeaderListComponent from './common/header_list.component'
import PaginationComponent from './common/pagination.component';
import FeedbackItemComponent from './feedback_item.component';
import KeyboardHintItemComponent from './keyboard_hint_item.component';
import RoomItemComponent from './room_item.component'
import sample_db from '../sample_db/sample_db.json'

const keyboard_hints=sample_db.practice_keyboards
export default class KeyboardHintListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            keyboard_hints:keyboard_hints
        }
    }



    render(){
        const keyboard_hints=this.state.keyboard_hints

        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    keyboard_hints.map((item,index)=>
                        <KeyboardHintItemComponent
                        clickItem={this.props.clickItem}
                        keyboard_hint={item} index={index}/>
                    )
                }
                </div>
            </div>
                    
    
        )
    }
}


const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    }
}
