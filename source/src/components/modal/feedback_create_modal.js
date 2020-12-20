//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import {TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import TextareaInputComponent from '../input/textarea_input.component';

import sample_db from '../../sample_db/sample_db.json'
import WordListComponent from '../word_list.component';
const tags=sample_db.feedback_tags

export default class FeedbackCreateModal extends Component {

    render(){
        const is_open=this.props.is_open
        return (
            <Modal
                isOpen={is_open}
                style={styles.modal}>
                        <div style={styles.container}>
                            <text style={styles.big_text}>
                                Góp ý 
                            </text>
                            <text style={styles.small_text}>
                                Đóng góp của bạn là động lực cho chúng tôi phát triển!
                            </text>

                            <div style={{width: '100%',marginTop: 30,marginBottom: 20}}>
                                <TextareaInputComponent   label='Nội dung'/>
                            </div>


                            <WordListComponent  disable={false} label="Tags" list={tags}/>

                            <div style={styles.footer}>
                                <div style={{...styles.btn_container,marginRight: 150}}>
                                    <ButtonComponent color={RED_1} label='Thoát' onClick={this.props.clickCancel}/>
                                </div>
                                <div style={styles.btn_container}>
                                        <ButtonComponent label='Đăng'
                                            onClick={this.props.clickOk}/>
                                  
                                </div>
                            </div>
                        </div>
                </Modal>
                    
    
        )
    }
}

const styles={
    footer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop:40,
        justifyContent:'space-between'
    },
    btn_container:{
        flex:1
    },
    modal:{ 
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        } 
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        width: '30vw',
        height: '60vh',
        borderRadius:6,
        padding:15
    },
    normal_text:{
        fontSize: TEXT_SIZES.NORMAL,
        color:BLACK
    },
    small_text:{
        marginTop:5,
        fontSize: TEXT_SIZES.SMALL,
        color:BLACK,
        textAlign:'center'
    },
    big_text:{
        fontSize: TEXT_SIZES.BIG,
        color: BLACK
    },
    btn_close:{
        fontSize: TEXT_SIZES.SMALL,
        color:RED_1
    }
}

