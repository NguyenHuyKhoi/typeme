//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/sample_db.json'
import SentenceItemComponent from './prac_sentence_item.component';
import { PRACTICE_MODE } from '../../utils/constants';

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

const lessons=sample_db.practice_lessons[PRACTICE_MODE.SENTENCE]
class PracSentenceListComponent extends Component {


    render(){
        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    lessons.map((item,index)=>
                        <SentenceItemComponent
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

export default connect(mapStateToProps,action)(PracSentenceListComponent)