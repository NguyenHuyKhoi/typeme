//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';

import { BODY, PRACTICE_MODE, TEXT_SIZES } from '../utils/constants';
import {  GRAY_6} from '../utils/palette';


import {connect }from 'react-redux'
import * as action from './../redux/action/user.action'
import PracticeTabsBarComponent from '../components/common/practice_tabs.component';
import PracticeComponent from '../components/practice.component'
import PracticeRhymeModal from '../components/modal/practice_rhyme.modal';
import PracticeSentenceModal from '../components/modal/practice_sentence.modal';
import PracticeParagraphModal from '../components/modal/practice_paragraph.modal';
import PracticeWordModal from '../components/modal/practice_word.modal';
import PracticeKeyboardModal from '../components/modal/practice_keyboard.modal';


class PracticeScreen extends Component {

    render(){
        const {practice_modals,practice_mode}=this.props.user_infor

        console.log('User_infor:',this.props.user_infor)
        return (

            <div style={{...styles.container,backgroundColor: this.props.user_infor.background_color}}>

                <HeaderBarComponent/>

                <PracticeKeyboardModal 
                    is_open={practice_modals[PRACTICE_MODE.KEYBOARD]} 
                    close={()=> this.props.closePracticeModal({})}/>

                <PracticeRhymeModal
                    is_open={practice_modals[PRACTICE_MODE.RHYME]}
                    close={()=> this.props.closePracticeModal({})}/>

                <PracticeWordModal
                    is_open={practice_modals[PRACTICE_MODE.WORD]}
                    close={()=> this.props.closePracticeModal({})}/>

                <PracticeSentenceModal
                    is_open={practice_modals[PRACTICE_MODE.SENTENCE]}
                    close={()=> this.props.closePracticeModal({})}/>

                <PracticeParagraphModal
                    is_open={practice_modals[PRACTICE_MODE.PARAGRAPH]}
                    close={()=> this.props.closePracticeModal({})}/>

                <div style={styles.body}>

                    <div style={{flex:1}}/>
                    <div style={styles.content_body}>
                        <PracticeTabsBarComponent />
                        
                        <PracticeComponent
                            navToResult={()=>{}}/>
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


const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(PracticeScreen)