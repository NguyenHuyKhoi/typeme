//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import {  TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';

import PracParagraphListComponent from '../practice/prac_paragraph_list.component';
export default class PracticeParagraphModal extends Component {

    render(){
        const is_open=this.props.is_open
        return (
            <Modal
                isOpen={is_open}
                style={styles.modal}>
                        <div style={styles.container}>
                            <text style={styles.big_text}>
                                Vừa luyện tập ,vừa đọc thơ hay!
                            </text>
                            <div style={{width:'90%',overflowY: 'scroll',padding: 15}}>
                                <PracParagraphListComponent/>
                            </div>
                          

                            <div style={styles.footer}>
                                <div style={{...styles.btn_container}}>
                                    <div style={{width: '15%'}}>
                                        <ButtonComponent height={40} color={RED_1} label='Thoát' 
                                            onClick={this.props.close}/>
                                    </div>
                                

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
        marginTop:30,
        justifyContent: 'center'
    },
    btn_container:{
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        width: '65vw',
        height: '80vh',
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

