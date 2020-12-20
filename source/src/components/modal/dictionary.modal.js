//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import {  TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import LabeledInputComponent from '../input/labeled_input.component';


import sample_db from '../../sample_db/sample_db.json'
import WordListComponent from '../word_list.component';

const dic_content=sample_db.dictionaries.content.split(",");
const dic_steno_content=sample_db.dictionaries.steno.split(",");

export default class DictionaryModal extends Component {

    constructor(props){
        super(props);
        this.state={
            res_items:[]
        }
    };

    search=(value)=>{
        console.log('Check with value :',value)
        let count=0;
        let limit=7;
        let arr=[];
        for ( let i=0;i<dic_content.length;i++){
            let word=dic_content[i]
            if (word.includes(value)) {
                arr.push(word+" = "+dic_steno_content[i]);
                count++;
                console.log('Find word :',word)
            };
            if (count>limit) break;
        }
        this.setState({
            res_items:arr
        })
    }

    render(){
        const is_open=this.props.is_open
        const list=this.state.res_items
        return (
            <Modal
                isOpen={is_open}
                style={styles.modal}>
                        <div style={styles.container}>
                            <text style={styles.big_text}>
                                Từ điển tốc ký
                            </text>
                            <text style={styles.small_text}>
                                Đừng lo lắng về khả năng của mình, hãy sử dụng trình soạn thảo này như 
                                    một công cụ tốc ký chuyên nghiệp.
                            </text>

                            <div style={{width: '100%',marginTop: 30,marginBottom: 20}}>
                                <LabeledInputComponent 
                                    onChange={this.search}  
                                    label='Tra từ:'/>
                            </div>


                            <WordListComponent auto_picked={true} disable={true} list={list}/>

                            <div style={styles.footer}>
                                <div style={{...styles.btn_container,marginRight: 150}}>
                                    <ButtonComponent color={RED_1} label='Thoát' onClick={this.props.clickCancel}/>
                                </div>
                                <div style={styles.btn_container}>
                                        <ButtonComponent label='Lưu kết quả'
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

