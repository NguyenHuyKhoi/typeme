//import from library 
import React, {Component} from 'react'


import sample_db from '../../sample_db/sample_db.json'
import PracWordItemComponent from './prac_word_item.component';

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
import { PRACTICE_MODE } from '../../utils/constants';

const lessons=sample_db.practice_lessons[PRACTICE_MODE.WORD]
class PracWordListComponent extends Component {
    render(){
        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    lessons.map((item,index)=>
                        <PracWordItemComponent
                            clickItem={()=>{
                                this.props.closePracticeModal();
                                this.props.chooseLessonIndex({ lesson_index:index})
                            }}
                            lesson={item} 
                            index={index+1}/>
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

export default connect(mapStateToProps,action)(PracWordListComponent)
