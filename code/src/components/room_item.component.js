//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../utils/constants'
import { BLACK, GRAY_2, GRAY_5, WHITE } from '../utils/palette'
import ButtonComponent from './common/button.component'
import WordListComponent from './word_list.component'
// import SkillsListComponent from '../common/skills_list.component'
export default class RoomItemComponent extends Component {

    render(){
        const room=this.props.room;
        return (
            
            <div style={styles.container}>
    
                <div style={styles.col1}>

                    <div style={{flex:3,display:'flex',flexDirection:'column'}}>
                        <text style={styles.task_name}>
                            {room.name}
                        </text>

                        <text style={styles.task_time}>
                            {room.owner}
                        </text>

                        <text style={styles.task_description}>
                            {room.content}
                        </text>
                    </div>

                    <div style={styles.skills_container}>
                        <WordListComponent list={[
                            "Bắt đầu: "+room.time_start,
                            "Số người chơi: "+room.cur_users+'/'+room.max_users
                            ]}/>
                    </div>
                    
                
                </div>

                <div style={styles.col2}>


                    <Link  
                        to={routePaths.ROOM_DETAIL}
                        style={styles.btn_container}>
                        <ButtonComponent label='Vào chơi'/>
                    </Link>
                        
                </div>

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'100%',
        height:180,
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
