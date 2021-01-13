//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import { routePaths, TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component';
import LabeledInputComponent from '../input/labeled_input.component';
import TextareaInputComponent from '../input/textarea_input.component';
import { Link } from 'react-router-dom';


export default class RoomCreateModal extends Component {

    render(){
        const is_open=this.props.is_open
        return (
            <Modal
                isOpen={is_open}
                style={styles.modal}>
                        <div style={styles.container}>
                            <text style={styles.big_text}>
                                Tạo phòng riêng của bạn :
                            </text>

                            <div style={{width: '80%',marginTop: 30}}>
                                <LabeledInputComponent inline={true} label='Tên :'/>
                            </div>

                            <div style={{width: '80%',marginTop: 10}}>
                                <TextareaInputComponent   label='Mô tả :'/>
                            </div>
                            <div style={{width: '80%',marginTop: 10}}>
                                <LabeledSelectedInputComponent  
                                    onChange={(value)=>{}}
                                    label='Số người chơi :'
                                    value={2} domain={[1,2,3,4,5,6,7,8,9]}/>
                            </div>
                           
                            

                            <div style={styles.footer}>
                                <div style={{...styles.btn_container,marginRight: 150}}>
                                    <ButtonComponent color={RED_1} label='Thoát' onClick={this.props.clickCancel}/>
                                </div>
                                <div style={styles.btn_container}>
                                    <Link to={routePaths.ROOM_DETAIL}>
                                        <ButtonComponent label='Tạo'
                                            onClick={this.props.clickOk}/>
                                    </Link>
                                  
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

