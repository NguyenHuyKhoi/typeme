//import from library 
import React, {Component} from 'react'
import { WHITE ,BLACK, GRAY_2} from '../utils/palette'
import HeaderListComponent from './common/header_list.component'

import LabeledInputComponent from './input/labeled_input.component'
import LabeledSelectedInputComponent from './input/labeled_selected_input.component'
import TextareaInputComponent from './input/textarea_input.component'
import {BUSINESS_AREA_DOMAIN, COMPANY_SIZES_DOMAIN, TEXT_SIZES,BOX_SHADOW} from '../utils/constants'
import KeyboardComponent from './keyboard.component'
import WordListComponent from './word_list.component'
import PracticeContentListComponent from './practice_content_list.component'

import sample_db from './../sample_db/sample_db.json'
import KeyboardLayerTabsComponent from './common/keyboard_layer_tabs.component'

const practice_contents=sample_db.practice_contents;

class Field extends Component{
    render(){
        return(
            <div style={{width: '90%',display:'flex',
                flexDirection:'row',justifyContent:'space-between',
                alignItems: 'center',marginLeft:25,marginRight: 25,marginBottom: 5}}>
                 <text style={styles.normal_text}>
                    {this.props.label}
                </text>

                <text style={styles.normal_text}>
                    {this.props.value}
                </text>
            </div>
        )
    }
}
class InforCard extends Component {
    render(){
        const {time,total_types,correct_types,wpm}=this.props.infor
        return (
            <div style={{width: '100%',display:'flex',
                flexDirection:'column',alignItems: 'center',
                boxShadow: BOX_SHADOW}}>

        
                <text style={{...styles.big_text,marginBottom: 12}}>
                    {time}
                </text>

                <Field label =' Đã gõ (từ):' value={total_types}/>
                <Field label =' Chính xác (từ): ' value={correct_types}/>
                <Field label =' Tốc độ (wpm):' value={wpm}/>

            </div>

        )
    }
}

class ContentCard extends Component{
    render(){
        const mode=practice_contents[this.props.practice_mode]
        const content=mode.content
        const title=mode.title

        console.log('mode:',mode)
        return (
        <div style={{width: '100%',height:'100%',display:'flex',
                flexDirection:'column',alignItems: 'center',overflowY: 'scroll'}}>

                <PracticeContentListComponent title={title} content={content}/>
                
            </div>
        )
    }
}
export default class PracticeComponent extends Component {
   
    constructor(props){
        super(props);
        this.state={
            layer_index:0
        }
    }

    render(){
        const practice_mode=this.props.practice_mode
        return (
            <div style={{width: '100%',height: '75vh',marginTop:20,
                justifyContent:'space-between',flexDirection:'column',display:'flex'}}>

                <div style={{width: '100%',display:'flex',flexDirection:'row',
                        justifyContent:'space-between',
                        height: '35%'}}>

                    <div style={{width: '65%',height: '100%',
                        padding:20,backgroundColor: WHITE,
                        boxShadow: BOX_SHADOW}}>
                        <ContentCard practice_mode={practice_mode}/>
                    </div>

                    <div style={{width: '27%',height: '100%',
                        display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                        <InforCard infor={
                            {
                                time : '00 : 10',
                                correct_types: 20,
                                total_types:30,
                                wpm :120
                            }} />

                            <div style={{width: '100%',height:30,display:'flex',flexDirection:'column',
                                boxShadow: BOX_SHADOW,marginTop: 30 }}>
                            {/* <text style={styles.normal_text}>
                                Chọn chế độ :
                            </text> */}

                            <KeyboardLayerTabsComponent layer_index={this.state.layer_index}
                                onChangeLayer={index=>this.setState({
                                    layer_index:index
                                })}/>
                        </div>
                      
                    </div>

                    
                </div>

                <div style={{width: '100%',display:'flex',flexDirection:'row',
                    justifyContent:'center'}}>

                    <KeyboardComponent layer_index={this.state.layer_index}/>
                    {/* 2 : phim phu + goi y
                    1 : goi y
                    0 : ko gi ca */}

                    
                </div>
            </div>
                    
           
    )
    }
}

const styles={
    big_text:{
        fontSize: TEXT_SIZES.HUGE,
        color: BLACK
    },
    normal_text :{
        fontSize: TEXT_SIZES.NORMAL,
        color:GRAY_2
    }
}


