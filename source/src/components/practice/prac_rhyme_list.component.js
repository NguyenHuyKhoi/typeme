//import from library 
import React, {Component} from 'react'

import PracRhymeItemComponent from './prac_rhyme_item.component';
import sample_db from '../../sample_db/sample_db.json'

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
import { PRACTICE_MODE } from '../../utils/constants';

const lessons=sample_db.practice_lessons[PRACTICE_MODE.RHYME]

class PracRhymeListComponent extends Component {

    render(){
        return (

            <div style={styles.container}>

                <div style={styles.body}>
                {
                    lessons.map((item,index)=>
                        <PracRhymeItemComponent
                            onClick={()=>{
                                this.props.closePracticeModal();
                                this.props.chooseLessonIndex({ lesson_index:index})
                            }}
                            lesson={item} index={index}/>
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

export default connect(mapStateToProps,action)(PracRhymeListComponent)