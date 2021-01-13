//import from library 
import React, {Component} from 'react'
import {TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_2, GRAY_5, WHITE } from '../../utils/palette'
import WordListComponent from '../word_list.component'
// import SkillsListComponent from '../common/skills_list.component'

import steno1 from '../../assets/images/steno_1.PNG'
import steno2 from '../../assets/images/steno_2.PNG'
import steno3 from '../../assets/images/steno_3.PNG'
import steno4 from '../../assets/images/steno_4.PNG'

const steno_images=[steno1,steno2,steno3,steno4];

export default class PracKeyboardHintItemComponent extends Component {

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
                                {this.collapseText(keyboard_hint.title)}
                            </text>
                            {/* <text style={styles.normal_text}>
                                {lesson.title}
                            </text> */}

                    </div>

                    <div style={styles.skills_container}>
                        <WordListComponent marginTop={15} list={keyboard_hint.descriptions}/>
                    </div>
                    
                
                </div>

                <div style={styles.col2}>


                    <img src={steno_images[index]} style={{width:'90%',height:'70%'}}/>
                        
                </div>

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'100%',
        height:260,
        backgroundColor: WHITE,
        boxShadow:'3px 3px 3px 3px #707070',
        marginTop:25,            
        display:'flex',
        flexDirection: 'row'
    },
    col1:{
        flex:3,
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
