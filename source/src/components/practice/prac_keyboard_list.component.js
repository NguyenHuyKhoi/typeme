//import from library 
import React, {Component} from 'react'

import PracKeyboardItemComponent from './prac_keyboard_item.component'
import sample_db from '../../sample_db/sample_db.json'
import { PRACTICE_MODE } from '../../utils/constants';
import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

const keyboard_hints=sample_db.practice_lessons[PRACTICE_MODE.KEYBOARD]
class PracKeyboardListComponent extends Component {
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
                        <PracKeyboardItemComponent
                            clickItem={()=>{
                                this.props.closePracticeModal();
                                this.props.chooseLessonIndex({ lesson_index:index})
                            }}
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

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(PracKeyboardListComponent)