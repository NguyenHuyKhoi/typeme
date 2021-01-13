//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from './../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_5, RED_1, WHITE } from './../utils/palette'
import CustomIconComponent from './common/custom_icon.component'
import WordListComponent from './word_list.component'

export default class FeedbackItemComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            votes:this.props.feedback.votes
        }
    };
    

    render(){
        const feedback=this.props.feedback;

        const votes=this.state.votes;
        console.log('feedback :',feedback)
        return (
            
            <div style={styles.container}>
    
                <div style={styles.col1}>

                    <div style={{flex:3,display:'flex',flexDirection:'column'}}>
                        <text style={styles.task_name}>
                            {feedback.username}
                        </text>

                        <text style={styles.task_time}>
                            {feedback.time}
                        </text>

                        <text style={styles.task_description}>
                            {feedback.content}
                        </text>
                    </div>

                    <div style={styles.skills_container}>
                        <WordListComponent  disable={true} label="Tags" list={feedback.tags}/>
                    </div>
                    
                
                </div>

                <div style={styles.col2}>

                    <div style={{width: '80%',display:'flex',flexDirection:'row',
                        alignItems: 'center',justifyContent:'space-around'}}>
                        
                        <div onClick={()=>this.setState({
                                votes:votes+1
                            })}>
                            <CustomIconComponent name='up' color={BLUE_1} size={40} />
                        </div>
                       
                        <text style={styles.huge_text}>
                            {votes}
                        </text>

                        <div onClick={()=>this.setState({
                                votes:votes-1
                            })}>

                            <CustomIconComponent 
                                name='down' color={RED_1}  size={40}/>
                        </div>
                    </div>
                  
                        
                </div>

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'100%',
        height:250,
        backgroundColor: WHITE,
        boxShadow:'3px 3px 3px 3px #707070',
        marginTop:40,            
        display:'flex',
        flexDirection: 'row'
    },
    col1:{
        flex:8,
        display:'flex',
        flexDirection: 'column',
        padding: 20
    },
    task_name:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    task_time:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    huge_text:{
        fontSize: TEXT_SIZES.HUGE,
        color:BLACK
    },
    task_description:{
        marginTop:10,
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2  
    },
    skills_container:{
        display:'flex',
        flex:1  
    },
    col2:{
        flex:4,
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: GRAY_5
    },
    task_budget:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    task_price:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    btn_container:{
        marginTop:15,
        width:'60%',
        textDecoration:'none'
    }
}
