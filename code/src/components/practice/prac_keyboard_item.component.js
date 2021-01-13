//import from library 
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ButtonComponent from '../common/button.component'
import {TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_2, GRAY_5, WHITE } from '../../utils/palette'
import WordListComponent from '../word_list.component'
// import SkillsListComponent from '../common/skills_list.component'


export default class PracKeyboardItemComponent extends Component {

    collapseText=(text)=>{
        return text.substring(0,Math.min(text.length,70));
    }
    render(){
        const keyboard_hint=this.props.keyboard_hint;
        const index=this.props.index;
        return (
            
            <div style={styles.container}>
    
                <div style={styles.col1}>

                    <div style={{flex:2,display:'flex',flexDirection:'column'}}>
                        <text style={styles.normal_text}>
                                {'Bài '+(index+1)+' :'+this.collapseText(keyboard_hint.title)}
                            </text>

                    </div>
                
                </div>

                <div style={styles.col2}>
                    <Link  
                        style={styles.btn_container}>
                        <ButtonComponent  onClick={this.props.clickItem} label='Luyện ngay'/>
                    </Link>
                        
                </div>

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'100%',
        height:80,
        backgroundColor: WHITE,
        boxShadow:'3px 3px 3px 3px #707070',
        marginTop:25,            
        display:'flex',
        flexDirection: 'row'
    },
    col1:{
        flex:5,
        display:'flex',
        flexDirection: 'column',
        padding: 20
    },
    big_text:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    normal_text:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    small_text:{
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
        flex:6 
    },
    huge_text:{
        fontSize: TEXT_SIZES.HUGE,
        color:BLACK
    },
    col2:{
        flex:3,
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
        
        width:'60%',
        textDecoration:'none'
    }
}
