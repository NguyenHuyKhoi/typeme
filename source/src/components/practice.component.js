//import from library 
import React, {Component} from 'react'
import { WHITE ,BLACK, GRAY_2, BLUE_1} from '../utils/palette'


import {TEXT_SIZES,BOX_SHADOW, PRACTICE_MODE, KEYBOARD_LAYER} from '../utils/constants'
import KeyboardComponent from './keyboard.component'
import PracticeLessonContentComponent from './practice_lesson_content.component'


import {connect }from 'react-redux'
import * as action from './../redux/action/user.action'

import sample_db from './../sample_db/sample_db.json'
import KeyboardLayerTabsComponent from './common/keyboard_layer_tabs.component'
import ButtonComponent from './common/button.component'

const practice_processes=sample_db.practice_processes
const CONTENT_CARD_MODE={
    SHOW_LESSION:0,
    SHOW_RULES:1,
    SHOW_PROCESS:2
}

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

class ProcessItem extends Component{
    render(){
        const label=this.props.label
        const value=this.props.value
        return (
            <div style={{width:140,height:80,display:'flex',flexDirection:'column',borderRadius:10
                ,backgroundColor:BLUE_1,alignItems:'center',justifyContent:'space-around'}}>
                <text style={{fontSize: TEXT_SIZES.NORMAL,color:WHITE}}>
                    {label}
                </text>

                <text style={{fontSize: TEXT_SIZES.HEADER,color:WHITE}}>
                    {value}
                </text>
            </div>
           
        )
    }
}

class ProcessCard extends Component{
    render(){
        const process=this.props.process;
        return(
            <div style={{display: 'flex',width: '100%',flexDirection: 'column',alignItems: 'center'}}>
                <text style={{fontSize: TEXT_SIZES.BIG}}>
                    Sớm thôi! bạn sẽ học xong phần này trong {process.time_remain} nữa:
                </text>

                <div style={{width: '90%',display: 'flex',flexDirection: 'row',
                    marginTop:20,
                    justifyContent:'space-between'}}>
                    <ProcessItem value={process.total} label="Số bài học"/>
                    <ProcessItem value={process.done} label="Đã hoàn thành"/>
                    <ProcessItem value={process.time} label="Thời gian học"/>
                </div>
            </div>
        )

    }
}

class RuleItem extends Component{
    render(){
        const rule=this.props.rule
        const arr=rule.split(" ");
        return (
            <div style={{width:70,height:120,display:'flex',flexDirection:'column',borderRadius:10
                ,backgroundColor:BLUE_1,alignItems:'center',justifyContent:'space-around'}}>
                <text style={{fontSize: TEXT_SIZES.HEADER,color:WHITE}}>
                    {arr[0]}
                </text>
                <text style={{fontSize: TEXT_SIZES.HEADER,color:WHITE}}>
                    {arr[1]}
                </text>
                <text style={{fontSize: TEXT_SIZES.HEADER,color:WHITE}}>
                    {arr[2]}
                </text>
            </div>
           
        )
    }
}

class RuleCard extends Component{
    render(){
        const rule=this.props.rule
        return(
            <div style={{display: 'flex',width: '100%',flexDirection: 'column',alignItems: 'center'}}>
                <text style={{fontSize: TEXT_SIZES.BIG}}>
                    Rất dễ nhớ, phải không nào?
                </text>
                <div style={{width: '80%',display: 'flex',flexDirection: 'row',
                    marginTop:10,
                    justifyContent:'space-between'}}>
                    {
                        rule.map(item=>(
                            <RuleItem rule={item}/>
                        ))
                    }
                </div>
            </div>
        )

    }
}

class ContentCard extends Component{

    render(){
        const {
            practice_mode,
            content_mode,
            lesson_data,
            rule_data,
            process_data,
            word_state
        }=this.props.user_infor




        console.log('user_infor on content_card:',this.props.user_infor)
        return (
        <div style={{width: '100%',height:'100%',display:'flex',
                flexDirection:'column',alignItems: 'center',overflowY: 'scroll'}}>
                {
                    content_mode===CONTENT_CARD_MODE.SHOW_LESSION?
                        <PracticeLessonContentComponent
                            word_state={word_state}
                            onClick={this.props.clickChooseLesson} 
                            lesson={lesson_data}
                        />
                        :
                        content_mode===CONTENT_CARD_MODE.SHOW_RULES?
                        <RuleCard rule={rule_data}/>
                        :
                        <ProcessCard process={practice_processes[practice_mode-1]}/>
                }
                
            </div>
        )
    }
}

class PracticeComponent extends Component {
   
    constructor(props){
        super(props);
        this.state={
            layer_index:KEYBOARD_LAYER.ONLY_SHOW_STENO_KEYBOARD
        }
    }

    render(){
        const {
            practice_mode,
            content_mode,
            lesson_data,
            word_state
            }=this.props.user_infor;
        
        console.log('word_state :',word_state)
        return (
            <div style={{width: '100%',height: '75vh',marginTop:20,
                justifyContent:'space-between',flexDirection:'column',display:'flex'}}>

                <div style={{width: '100%',display:'flex',flexDirection:'row',
                        justifyContent:'space-between',
                        height: '35%'}}>

                    <div style={{width: '65%',height: '100%',
                        padding:20,backgroundColor: WHITE,
                        boxShadow: BOX_SHADOW}}>
                        <ContentCard 
                            word_state={word_state}
                            clickChooseLesson={()=>this.props.openPracticeModal({})}
                            user_infor={this.props.user_infor}/>
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
                    justifyContent:'space-between'

                    }}>

                    <div style={{width: 100}}>
                        {
                            practice_mode===PRACTICE_MODE.RHYME?
                            <ButtonComponent 
                                onClick={()=>{
                                    if (content_mode!==CONTENT_CARD_MODE.SHOW_RULES)
                                    this.props.chooseContentMode({
                                        content_mode:CONTENT_CARD_MODE.SHOW_RULES
                                    })
                                    else  this.props.chooseContentMode({
                                        content_mode:CONTENT_CARD_MODE.SHOW_LESSION
                                    })
                                }}
                                height={45} 
                                label={content_mode===CONTENT_CARD_MODE.SHOW_RULES?
                                    "Bài học":"Quy tắc"} />    
                            :
                            null
                        }
                       
                    </div>

                    <div style={{flex:1,marginLeft:30,marginRight: 30}}>
                        <KeyboardComponent
                            typeWrong={()=>this.props.typeWrong({})}
                            typeCorrect={()=>this.props.typeCorrect({})}
                            enable={content_mode===CONTENT_CARD_MODE.SHOW_LESSION}
                            group={lesson_data.group} 
                            steno_content={lesson_data.steno_content}
                            layer_index={this.state.layer_index}/>
                    </div>
                  
                  
                            {/* 2 : phim phu + goi y
                            1 : goi y
                            0 : ko gi ca */}
                    <div style={{width: 100}}>
                    {
                        practice_mode>0?
                        <ButtonComponent 
                            onClick={()=>{
                                if (content_mode!==CONTENT_CARD_MODE.SHOW_PROCESS)
                                this.props.chooseContentMode({
                                    content_mode:CONTENT_CARD_MODE.SHOW_PROCESS
                                })
                                else  this.props.chooseContentMode({
                                    content_mode:CONTENT_CARD_MODE.SHOW_LESSION
                                })
                            }}
                        height={45} label={content_mode===CONTENT_CARD_MODE.SHOW_PROCESS?
                                "Bài học":"Tiến độ"}/>    
                      
                        :
                        null
                    }
                        </div>

                    
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

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(PracticeComponent)

