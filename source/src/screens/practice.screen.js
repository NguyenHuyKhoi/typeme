//import from library 
import React, {Component} from 'react'
import FilterComponent from '../components/input/filter.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import FreelancerListComponent from '../components/freelancer/freelancer_list.component';
import api from '../sample_db/fake_api_responses.json'
import { BODY, TEXT_SIZES } from '../utils/constants';
import { BLACK ,GRAY_6} from '../utils/palette';
import {BASE_URL} from '../utils/constants'
import axios from 'axios'
import PracticeTabsBarComponent from '../components/common/practice_tabs.component';
import PracticeComponent from '../components/practice.component'
import PracticeLessonModal from '../components/modal/practice_lesson.modal';
import PracticeSentenceModal from '../components/modal/practice_sentence.modal';
import PracticeParagraphModal from '../components/modal/practice_paragraph.modal';
import PracticeWordsModal from '../components/modal/practice_words.modal';
import PracticeKeyboardModal from '../components/modal/practice_keyboard.modal';
let modals=['keyboard_modal','lesson_modal','word_modal','sentence_modal','paragraph_modal'];

export default class PracticeScreen extends Component {

    constructor(props){
        super(props);
        const init_state={};
        modals.map(item=>init_state[item]=false)
        this.state={
            focus_tab_index:0,
            ...init_state
        }
    }

    openModal=(modal_name)=>{
        this.setState({
            [modal_name]:true
        })
    }

    closeModal=(modal_name)=>{
        this.setState({
            [modal_name]:false
        })
    }


    render(){

        return (

            <div style={styles.container}>

                <HeaderBarComponent/>

                <PracticeKeyboardModal
                    is_open={this.state[modals[0]]} 
                    clickCancel={()=>this.closeModal(modals[0])}

                    clickItem={()=>{
                        alert('Bạn đã chọn bài 3, hãy cố gắng để vượt qua .')
                        this.closeModal(modals[0]);
                    }}/>

                <PracticeLessonModal
                    is_open={this.state[modals[1]]} 
                    clickCancel={()=>this.closeModal(modals[1])}

                    clickItem={()=>{
                        alert('Bạn đã chọn bài 2, hãy cố gắng để vượt qua .')
                        this.closeModal(modals[1]);
                    }}/>

                <PracticeWordsModal
                    is_open={this.state[modals[2]]} 
                    clickCancel={()=>this.closeModal(modals[2])}

                    clickItem={()=>{
                        alert('Bạn đã chọn bài 3, hãy cố gắng để vượt qua .')
                        this.closeModal(modals[2]);
                    }}/>

                <PracticeSentenceModal
                    is_open={this.state[modals[3]]} 
                    clickCancel={()=>this.closeModal(modals[3])}

                    clickItem={()=>{
                        alert('Bạn đã chọn bài 5, hãy cố gắng để vượt qua .')
                        this.closeModal(modals[3]);
                    }}/>

                <PracticeParagraphModal
                    is_open={this.state[modals[4]]} 
                    clickCancel={()=>this.closeModal(modals[4])}

                    clickItem={()=>{
                        alert('Bạn đã chọn bài 3, hãy cố gắng để vượt qua .')
                        this.closeModal(modals[4]);
                    }}/>

                






                <div style={styles.body}>

                    <div style={{flex:1}}/>

                    <div style={styles.content_body}>
                        <PracticeTabsBarComponent 
                            focus_tab_index={this.state.focus_tab_index}
                            onClickTab={(index)=>
                                this.setState({
                                    focus_tab_index:index
                                })}/>
                        
                        <PracticeComponent  
                            onClick={()=>this.openModal(modals[this.state.focus_tab_index])}
                            practice_mode={this.state.focus_tab_index}/>
                    </div>

                    <div style={{flex:1}}/>
                    
                </div>

                
                <FooterBarComponent/>
            </div>
            
        )
    }
}


const styles={
    container:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection: 'column',
        backgroundColor: GRAY_6
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'row',
        paddingBottom:100,
        paddingTop:BODY.PADDING_TOP
    },
    content_body:{
        flex:BODY.FLEX,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}