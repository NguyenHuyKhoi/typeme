//import from library 
import React, {Component} from 'react'
import { WHITE ,BLACK} from '../utils/palette'
import HeaderListComponent from './common/header_list.component'

import LabeledInputComponent from './input/labeled_input.component'
import LabeledSelectedInputComponent from './input/labeled_selected_input.component'
import TextareaInputComponent from './input/textarea_input.component'
import {BUSINESS_AREA_DOMAIN, COMPANY_SIZES_DOMAIN, TEXT_SIZES} from '../utils/constants'
import KeyboardComponent from './keyboard.component'
import WordListComponent from './word_list.component'

class InforCard extends Component {
    render(){
        return (
            <div style={{width: '100%',height:'100%',display:'flex',
                flexDirection:'column',alignItems: 'center',backgroundColor: '#302585'}}>

        
                <text style={styles.big_text}>
                    00 : 07
                </text>
                <text style={styles.normal_text}>
                    Đã gõ : 06 từ
                </text>
                <text style={styles.normal_text}>
                    Chính xác : 05 từ
                </text>
                <text style={styles.normal_text}>
                    Tốc độ : 34 wpm
                </text>
            </div>

        )
    }
}

class ContentCard extends Component{
    render(){
        return (
        <div style={{width: '100%',height:'100%',display:'flex',
                flexDirection:'column',alignItems: 'center',backgroundColor: '#302585'}}>

                <WordListComponent  />
                
            </div>
        )
    }
}
export default class PracticeComponent extends Component {
   

    render(){
        return (
            <div style={{width: '60vw',height: '75vh',backgroundColor: '#208412',marginTop:35,
                justifyContent:'space-between',flexDirection:'column',display:'flex'}}>
                <div style={{width: '100%',display:'flex',flexDirection:'row',backgroundColor: '#929454',
                        justifyContent:'space-between',
                        height: '30%'}}>

                    <div style={{width: '60%',height: '100%',backgroundColor: '#355325'}}>
                        <ContentCard/>
                    </div>

                    <div style={{width: '30%',height: '100%',backgroundColor: '#355325'}}>
                        <InforCard/>
                    </div>

                    
                </div>

                <div style={{width: '100%',display:'flex',flexDirection:'row',backgroundColor: '#929454',
                        justifyContent:'space-between',
                        height: '65%'}}>

                    <KeyboardComponent/>

                    
                </div>
            </div>
                    
           
    )
    }
}

const styles={
    big_text:{
        fontSize: TEXT_SIZES.BIG,
        color: BLACK
    },
    normal_text :{
        fontSize: TEXT_SIZES.NORMAL,
        color:BLACK
    }
}


